// const config = require('config');
const config = require('../config/default');
const fs = require('fs');
const path = require('path');
const dicomParser = require('dicom-parser');
const crypto = require('crypto');
const fastify = require('fastify')({ logger: false });
const { Readable } = require('stream');
const dimse = require('dicom-dimse-native');
const fs1 = require('fs-extra');
// let DataNativeFolder = `${__dirname.split("\\node_modules\\dicomweb-pacs\\")[0]}\\data\\Native`;
// let DataNativeFolder = `${__dirname.split('\\DicomPacs\\dicomweb-pacs\\src')[0]}\\data\\Native`;
console.log("checkpath=-=-", `${__dirname.split('\\webpacsApp')[0]}\\data\\Native`);
let DataNativeFolder = `${__dirname.split('\\webpacsApp')[0]}\\data\\Native`;
console.log("checkpath after=-=-", DataNativeFolder);

let getTxtFile = `${__dirname.split('\\webpacsApp')[0]}\\webpacsApp\\calling.txt`;

// console.log(`${__dirname.split("\\\Pacs2\\dicomweb-pacs\\src")[0]}\\database.sqlite3`,"*******Path DataNative********")
console.log(DataNativeFolder, '*******Path DataNative********');
console.log(config.storagePath, '*******Path storage********');

const gettext = fs.readFileSync(getTxtFile, 'utf8');
console.log('gettext', gettext);
const utils = require('./utils');
const sqlite3 = require('sqlite3').verbose();
let sql;

fastify.register(require('fastify-static'), {
  root: path.join(__dirname, '../public'),
});

fastify.setNotFoundHandler((req, res) => {
  res.sendFile('index.html');
});

fastify.register(require('fastify-cors'), {});

fastify.register(require('fastify-sensible'));

fastify.register(require('fastify-helmet'), { contentSecurityPolicy: false });

// TOO SLOW
// fastify.register(require('fastify-compress'), { global: true });

const logger = utils.getLogger();

// log exceptions
process.on('uncaughtException', (err) => {
  logger.error('uncaught exception received:');
  logger.error(err.stack);
});

//------------------------------------------------------------------

process.on('SIGINT', async () => {
  await logger.info('shutting down web server...');
  fastify.close().then(
    async () => {
      await logger.info('webserver shutdown successfully');
    },
    (err) => {
      logger.error('webserver shutdown failed', err);
    }
  );
  await logger.info('shutting down DICOM SCP server...');
  await utils.shutdown();
  process.exit(1);
});

//------------------------------------------------------------------

fastify.get('/rs/studies', async (req, reply) => {
  const tags = utils.studyLevelTags();
  const json = await utils.doFind('STUDY', req.query, tags);
  reply.header('Content-Type', 'application/dicom+json');
  reply.send(json);
});

//------------------------------------------------------------------

fastify.get('/viewer/rs/studies', async (req, reply) => {
  const tags = utils.studyLevelTags();
  const json = await utils.doFind('STUDY', req.query, tags);
  reply.header('Content-Type', 'application/dicom+json');
  reply.send(json);
});

//------------------------------------------------------------------

fastify.get('/viewer/rs/studies/:studyInstanceUid/metadata', async (req, reply) => {
  const { query } = req;
  query.StudyInstanceUID = req.params.studyInstanceUid;
  const stTags = utils.studyLevelTags();
  const serTags = utils.seriesLevelTags();
  const json = await utils.doFind('SERIES', query, [...stTags, ...serTags]);
  reply.header('Content-Type', 'application/dicom+json');
  reply.send(json);
});

//------------------------------------------------------------------

fastify.get('/viewer/rs/studies/:studyInstanceUid/series', async (req, reply) => {
  const tags = utils.seriesLevelTags();
  const { query } = req;
  query.StudyInstanceUID = req.params.studyInstanceUid;

  const json = await utils.doFind('SERIES', query, tags);
  reply.header('Content-Type', 'application/dicom+json');
  reply.send(json);
});

//------------------------------------------------------------------

fastify.get('/viewer/rs/studies/:studyInstanceUid/series/:seriesInstanceUid/instances', async (req, reply) => {
  const tags = utils.imageLevelTags();
  const { query } = req;
  query.StudyInstanceUID = req.params.studyInstanceUid;
  query.SeriesInstanceUID = req.params.seriesInstanceUid;

  const json = await utils.doFind('IMAGE', query, tags);
  reply.header('Content-Type', 'application/dicom+json');
  reply.send(json);
});

//------------------------------------------------------------------

fastify.get('/viewer/rs/studies/:studyInstanceUid/series/:seriesInstanceUid/metadata', async (req, reply) => {
  const stTags = utils.studyLevelTags();
  const serTags = utils.seriesLevelTags();
  const imTags = utils.imageMetadataTags();
  const { query } = req;
  query.StudyInstanceUID = req.params.studyInstanceUid;
  query.SeriesInstanceUID = req.params.seriesInstanceUid;

  const json = await utils.doFind('IMAGE', query, [...stTags, ...serTags, ...imTags]);
  reply.header('Content-Type', 'application/dicom+json');
  reply.send(json);
});

fastify.post('/viewer/mysinc', async (req, reply) => {
  const { query } = req;
  console.log('/mysinc/mysinc/mysinc/mysinc', query, 'req.body', req.body);

  //send to target starts
  const dimse = require('dicom-dimse-native');
  const config = require('config');
  const path = require('path');

  const j = {};
  // j.source = config.source;
  j.source = {};
  //j.target = j.source;
  var myTarget = {
    aet: 'DICOMWEB_PACS1',
    ip: '192.168.100.20',
    port: '9991',
  };

  j.target = myTarget;
  j.sourcePath = path.join(__dirname, '../import');
  j.verbose = true;
  dimse.storeScu(j, (result) => {
    if (result && result.length > 0) {
      try {
        console.log(JSON.parse(result));
      } catch (e) {
        console.error(e, result);
      }
    }
  });
  //send to target ends

  // reply.send("kks");
  reply.send(req.body.name);
});

//------------------------------------------------------------------

fastify.get('/viewer/rs/studies/:studyInstanceUid/series/:seriesInstanceUid/instances/:sopInstanceUid/frames/:frame', async (req, reply) => {
  const { studyInstanceUid, sopInstanceUid } = req.params;

  const storagePath = config.storagePath;
  const studyPath = path.join(storagePath, studyInstanceUid);
  const pathname = path.join(studyPath, sopInstanceUid);

  try {
    // logger.info(studyInstanceUid, seriesInstanceUid, sopInstanceUid, frame);
    await utils.fileExists(pathname);
  } catch (error) {
    logger.error(error);
    reply.code(404);
    reply.send(`File ${pathname} not found!`);
    return;
  }

  try {
    await utils.compressFile(pathname, studyPath, '1.2.840.10008.1.2');
  } catch (error) {
    logger.error(error);
    const msg = `failed to compress ${pathname}`;
    reply.code(500);
    reply.send(msg);
    return;
  }

  // read file from file system
  try {
    const data = await fs.promises.readFile(pathname);
    const dataset = dicomParser.parseDicom(data);
    const pixelDataElement = dataset.elements.x7fe00010;
    const buffer = Buffer.from(dataset.byteArray.buffer, pixelDataElement.dataOffset, pixelDataElement.length);

    const term = '\r\n';
    const boundary = crypto.randomBytes(16).toString('hex');
    const contentId = crypto.randomBytes(16).toString('hex');
    const endline = `${term}--${boundary}--${term}`;

    reply.header('Content-Type', `multipart/related;start=${contentId};type='application/octed-stream';boundary='${boundary}'`);

    const readStream = new Readable({
      read() {
        this.push(`${term}--${boundary}${term}`);
        this.push(`Content-Location:localhost${term}`);
        this.push(`Content-ID:${contentId}${term}`);
        this.push(`Content-Type:application/octet-stream${term}`);
        this.push(term);
        this.push(buffer);
        this.push(endline);
        this.push(null);
      },
    });
    reply.send(readStream);
  } catch (error) {
    logger.error(error);
    reply.code(500);
    reply.send(`Error getting the file: ${error}.`);
  }
});

//------------------------------------------------------------------

fastify.get('/viewer/wadouri', async (req, reply) => {
  const studyUid = req.query.studyUID;
  const seriesUid = req.query.seriesUID;
  const imageUid = req.query.objectUID;
  if (!studyUid || !seriesUid || !imageUid) {
    const msg = `Error missing parameters.`;
    logger.error(msg);
    reply.code(500);
    reply.send(msg);
    return;
  }
  const storagePath = config.storagePath;
  const studyPath = path.join(storagePath, studyUid);
  const pathname = path.join(studyPath, imageUid);

  try {
    await utils.fileExists(pathname);
  } catch (error) {
    logger.error(error);
    const msg = `file not found ${pathname}`;
    reply.code(500);
    reply.send(msg);
    return;
  }

  try {
    await utils.compressFile(pathname, studyPath);
  } catch (error) {
    logger.error(error);
    const msg = `failed to compress ${pathname}`;
    reply.code(500);
    reply.send(msg);
    return;
  }

  // if the file is found, set Content-type and send data
  reply.header('Content-Type', 'application/dicom+json');

  // read file from file system
  fs.readFile(pathname, (err, data) => {
    if (err) {
      const msg = `Error getting the file: ${err}.`;
      logger.error(msg);
      reply.setCode(500);
      reply.send(msg);
    }
    reply.send(data);
  });
});

//------------------------------------------------------------------

const port = config.webserverPort;
logger.info('starting...');
fastify.listen(port, '0.0.0.0', (err, address) => {
  if (err) {
    logger.error(err, address);
    process.exit(1);
  }
  logger.info(`web-server listening on port: ${port}`);
  utils.startScp();
  utils.sendEcho();

  //--------------starts
  var preAetLength;

  //connection starts
  let db = new sqlite3.Database(`${__dirname.split('\\webpacsApp')[0]}\\database.sqlite3`, sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
      return console.error('line 11 database err', err.message);
    }
    console.log('Connected to the in-memory SQlite database.');
  });
  //connection ends
  //database work srats
  // read data from database
  sql = `SELECT * FROM PACSNODE`;
  db.all(sql, [], (err, rows) => {
    if (err) return console.error('line 306 database error', err.message);

    console.log('db appjssssssssssssss', rows, 'length=', rows.length);
    preAetLength = rows.length;
  });
  //database work ends

  var newAetLength;
  setInterval(async () => {
    sql = `SELECT * FROM PACSNODE`;
    db.all(sql, [], async (err, rows) => {
      if (err) return console.error('line 306 database error', err.message);

      // console.log("db appjssssssssssssss", rows, "length=", rows.length);
      newAetLength = await rows.length;
    });

    await console.log('preAetLength', preAetLength, 'newAetLength', newAetLength);

    if (newAetLength != preAetLength && newAetLength != 'undefined' && newAetLength != '' && newAetLength != null) {
      console.log('chalaaaaa');
      await logger.info('shutting down web server...');
      fastify.close().then(
        async () => {
          await logger.info('webserver shutdown successfully');
        },
        (err) => {
          logger.error('webserver shutdown failed', err);
        }
      );
      await logger.info('shutting down DICOM SCP server...');
      await utils.shutdown();
      utils.startScp();
      utils.sendEcho();
      preAetLength = newAetLength;
    }
  }, 10000);

  //----------------ends
  let Msource;
  // read data from database
  sql = `SELECT * FROM sourceNode where enable = "true"`;
  db.all(sql, [], (err, rows) => {
    if (err) return console.error('line 34 database error', err.message);

    console.log('sourceee db read', rows[rows.length - 1]);
    Msource = rows[rows.length - 1];
  });
  //database work ends

  //database target work srats
  // read data from database target starts
  setInterval(() => {
    console.log('MsourceMsourceMsourceMsource', Msource);

    sql = `SELECT * FROM TargetNode`;
    db.all(sql, [], (err, rows) => {
      if (err) return console.error('line 306 database error', err.message);

      console.log('db appjssssssssssssss', rows, 'length=', rows.length);

      if (rows.length > 0) {
        console.log('yes target exist');

        //---------send to target(pacs) starts
        const j = {};
        j.source = Msource;
        // j.target = j.source;
        j.target = rows[0];
        // j.sourcePath = path.join(__dirname, '../../../data/Target');
        j.sourcePath = `${__dirname.split('\\DicomPacs\\dicomweb-pacs\\src')[0]}\\data\\Target`;
        // j.sourcePath = path.join(__dirname, '../export');
        j.verbose = true;
        dimse.storeScu(j, (result) => {
          if (result && result.length > 0) {
            try {
              console.log(JSON.parse(result));
              if (JSON.parse(result).message == 'request succeeded' || JSON.parse(result).message == 'Failed to send DICOM files to target') {
                // fs1.emptyDirSync(path.join(__dirname, '../../../data/Target'));
                fs1.emptyDirSync(`${__dirname.split('\\DicomPacs\\dicomweb-pacs\\src')[0]}\\data\\Target`);
              }

              if (JSON.parse(result).message == 'Target not set') {
                // fs1.emptyDirSync(path.join(__dirname, '../../../data/Target'));
                fs1.emptyDirSync(`${__dirname.split('\\DicomPacs\\dicomweb-pacs\\src')[0]}\\data\\Target`);
              }
            } catch (e) {
              console.error(e, result);
            }
          }
        });
        //---------send to target(pacs) ends

        //delete target from db start
        sql = `DELETE FROM TargetNode`;
        db.all(sql, [], (err, rows) => {
          if (err) return console.error('line 306 database error', err.message);

          console.log('db deleted', rows, 'length=', rows.length);
        });
        //delete target from db ends
      }
    });
  }, 10000);

  // read data from database target ends

  //----------------------------------------change froldes starts-----------------------------
  setInterval(() => {
    fs.stat(DataNativeFolder, (err, stats) => {
      if (err) {
        console.log("check err is 432", err);
        throw err;
      }

      var diff = Math.abs(new Date() - stats.ctime);
      function millisToMinutesAndSeconds(millis) {
        var minutes = Math.floor(millis / 60000);
        var seconds = ((millis % 60000) / 1000).toFixed(0);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
      }
      //  console.log("differencedifferencedifference=", millisToMinutesAndSeconds(diff));

      var timeSplit = millisToMinutesAndSeconds(diff).split(':');
      // console.log("splitsplitsplit", timeSplit[0]);
      // var delay = Math.ceil(files.length/25);
      console.log('change folder interval is ', timeSplit);

      if (parseInt(timeSplit[0]) >= 1 || parseInt(timeSplit[1]) >= 10) {
        fs.readdir(DataNativeFolder, (err, topFolders) => {
          if (err) console.log("check err is 450",err);
          else {
            if (topFolders.length > 1) {
              var Mfolders1 = topFolders.filter((cur) => cur !== 'image.db');
              var Mfolders2 = Mfolders1.filter((cur) => cur.includes('.'));

              if (Mfolders2.length >= 1) {
                console.log('Mfolders2Mfolders2', Mfolders2);

                const gettext = fs.readFileSync(getTxtFile, 'utf8');
                console.log('gettext', gettext);

                Mfolders2.forEach((cur) => {
                  const src = `${DataNativeFolder}/${cur}`;
                  const d = new Date();
                  const day = d.getDate();
                  const year = d.getFullYear();
                  const month = d.getMonth() + 1;
                  let finalDate = `${year}${month}${day}`;
                  const dest = `${DataNativeFolder}/${gettext}/${finalDate}/${cur}`;
                  if (gettext != 'DICOMWEB_PACS' && gettext.length > 2 && gettext.length < 20) {
                    fs1.move(src, dest, { overwrite: true }, function (err, data) {
                      if (data) {
                        console.log('files has been succcessfully moved', data);
                      } else {
                        console.log('files has not been moved', err);
                      }
                    });
                  }
                });
              }
            }
          }
        });
      }
    });
  }, 40000);

  //--------------------------------change froldes ends-----------------------------------

  //-----------------------------------------------------------------
  // setInterval( async () => {
  //   await logger.info('shutting down web server...');
  //   fastify.close().then(
  //     async () => {
  //       await logger.info('webserver shutdown successfully');
  //     },
  //     (err) => {
  //       logger.error('webserver shutdown failed', err);
  //     }
  //   );
  //   await logger.info('shutting down DICOM SCP server...');
  //   await utils.shutdown();
  //   utils.startScp();
  //   utils.sendEcho();
  // }, 20000);

  // const config = require('config');

  // const j = {};
  // j.source = config.get('source');
  // console.log("logggggggg", config.get('source'));

  // const path = require('path');

  // j.target = config.get('target');
  // j.peers = config.get('peers');
  // j.verbose = true;

  //  j.sourcePath = path.join(__dirname, '../export');

  //new---------
  // dimse.echoScu(j, result => {
  //   console.log("the echo j is", j);
  //   if (result && result.length > 0) {
  //     try {
  //       console.log(JSON.parse(result));
  //     } catch (e) {
  //       console.error(e, result);
  //     }
  //   }
  // });

  // dimse.startStoreScp(j, result => {
  //   if (result && result.length > 0) {
  //     try {
  //       console.log(JSON.parse(result));
  //     } catch (e) {
  //       console.error(e, result);
  //     }
  //   }
  // });

  // dimse.storeScu(j, result => {
  //   if (result && result.length > 0) {
  //     try {
  //       console.log(JSON.parse(result));
  //     } catch (e) {
  //       console.error(e, result);
  //     }
  //   }
  // });

  //working---------------
  // dimse.echoScu(j, result => {
  //   console.log("the echo j is", j);
  //   if (result && result.length > 0) {
  //     try {
  //       console.log(JSON.parse(result));
  //     } catch (e) {
  //       console.error(e, result);
  //     }
  //   }
  // });

  // dimse.storeScu(j, result => {
  //   if (result && result.length > 0) {
  //     try {
  //       console.log(JSON.parse(result));
  //     } catch (e) {
  //       console.error(e, result);
  //     }
  //   }
  // });

  // //send to target starts
  // const dimse = require('dicom-dimse-native');
  // const config = require('config');
  // const path = require('path');

  // const j = {};
  // j.source = config.get('source');
  // //j.target = j.source;
  // var myTarget = {
  //   aet: "DICOMWEB_PACS1",
  //   ip: "192.168.100.20",
  //   port: "9991"
  // };

  // j.target = myTarget;
  // j.sourcePath = path.join(__dirname, '../import');
  // j.verbose = true;
  // dimse.storeScu(j, result => {
  //   if (result && result.length > 0) {
  //     try {
  //       console.log(JSON.parse(result));
  //     } catch (e) {
  //       console.error(e, result);
  //     }
  //   }
  // });
  // //send to target ends
});

//------------------------------------------------------------------
