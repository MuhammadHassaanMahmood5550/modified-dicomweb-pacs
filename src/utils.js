// const config = require('config');
const config = require('../config/default');

const dict = require('dicom-data-dictionary');
const dimse = require('dicom-dimse-native');
const fs = require('fs');
const shell = require('shelljs');
const path = require('path');
const sqlite3 = require('sqlite3').verbose();
let sql;
// // open database in memory
// console.log("path=-=", path.join(__dirname, '../../../database.sqlite3'));

//connect to db
let db = new sqlite3.Database(`${__dirname.split('\\webpacsApp')[0]}\\database.sqlite3`, sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    return console.error('line 11 database err', err.message);
  }
  console.log('Connected to the in-memory SQlite database.');
});
//create table
// sql = 'CREATE TABLE PACSNODE(aet,ip,port)';
// db.run(sql);
// insert into database
// db.run(`INSERT INTO PACSNODE(aet,ip,port) VALUES(?,?,?)`, ['myaet', 'myip', 'myport'], function(err) {
//   if (err) {
//     return console.log("line 26 database err",err.message);
//   }
//   // get the last insert id
//   console.log(`A row has been inserted`);
// });
// read data from database
// sql = `SELECT * FROM PACSNODE`;
// db.all(sql, [], (err, rows) => {
//   if(err) return console.error("line 44 database error", err.message);
//    rows.forEach((row) => {
//     console.log("rowwwwwwwwwwwwwww", row);
//   });
// })

//'../../../data/Native/Incoming'
// make sure default directories exist
// const logDir = config.get('logDir');
const logDir = config.logDir;

shell.mkdir('-p', logDir);
shell.mkdir('-p', config.storagePath);

// create a rolling file logger based on date/time that fires process events
const opts = {
  errorEventName: 'error',
  logDirectory: logDir, // NOTE: folder must exist and be writable...
  fileNamePattern: 'roll-<DATE>.log',
  dateFormat: 'YYYY.MM.DD',
};
const manager = require('simple-node-logger').createLogManager();
// manager.createConsoleAppender();
manager.createRollingFileAppender(opts);
const logger = manager.createLogger();

//------------------------------------------------------------------

const findDicomName = (name) => {
  // eslint-disable-next-line no-restricted-syntax
  for (const key of Object.keys(dict.standardDataElements)) {
    const value = dict.standardDataElements[key];
    if (value.name === name) {
      return key;
    }
  }
  return undefined;
};

//working on database starts

//working  on database starts

//------------------------------------------------------------------

const utils = {
  getLogger: () => logger,
  startScp: () => {
    // read data from database
    let source = {};
    var enable = true;
    var defaultIP;
    // sql = `SELECT * FROM PacsSetup`;
    // db.all(sql, [], (err, rows) => {
    //   if (err) return console.error('line 34 database error', err.message);
    //   enable = rows[0]['enable'];
    // });

    sql = `SELECT * FROM sourceNode where enable = "true"`;
    db.all(sql, [], (err, rows) => {
      if (err) return console.error('line 34 database error', err.message);

      console.log('sourceee db read', rows);
      source = rows[rows.length - 1];
    });
    //database work ends

    setTimeout(() => {
      console.log('j.source', source);

      // const source = config.get('source');
      //  const source =  { aet: "DICOMWEB_PACS1", ip: "192.168.18.23", port: "5558" };

      // const ar = config.get('peers');
      // const ar = config.peers;
      const peers = [];
      // ar.forEach((aet) => {
      //   peers.push(aet);
      // });

      // const ts = config.get('transferSyntax');
      const ts = config.transferSyntax;
      const j = {};
      j.source = source;
      j.target = j.source;
      j.peers = peers;
      j.peers.push(j.source);

      //database work srats
      // read data from database
      sql = `SELECT * FROM PACSNODE`;
      db.all(sql, [], (err, rows) => {
        if (err) return console.error('line 44 database error', err.message);

        rows.forEach((row) => {
          console.log('scp', row, row.aet);
          j.peers.push({
            aet: row.aet,
            ip: row.ip,
            port: row.port,
          });
          if (enable == 'false') {
            console.log('ura do peers');
            j.peers = [];
          }
          // console.log(j.peers,localStorage,"j.peers")
        });
      });
      //database work ends

      // j.peers.push({
      //   aet: "DICOMWEB_PA1",
      //   // ip: "192.168.100.20",
      //   // port: "9991"
      // })
      // j.peers.push({
      //   aet: "DICOMWEB_PA2",
      //   // ip: "192.168.100.20",
      //   // port: "9991"
      // })
      // j.peers.push({
      //   aet: "DICOMWEB_PA3",
      //   // ip: "192.168.100.20",
      //   // port: "9991"
      // })
      // j.peers.push({
      //   aet: "DICOMWEB_PA4",
      //   // ip: "192.168.100.20",
      //   // port: "9991"
      // })
      // j.peers.push({
      //   aet: "DICOMWEB_PA5",
      //   // ip: "192.168.100.20",
      //   // port: "9991"
      // })
      // j.peers.push({
      //   aet: "DICOMWEB_PA6",
      //   // ip: "192.168.100.20",
      //   // port: "9991"
      // })
      // j.peers.push({
      //   aet: "DICOMWEB_PA7",
      //   // ip: "192.168.100.20",
      //   // port: "9991"
      // })

      setTimeout(() => {
        // j.storagePath = config.get('storagePath');
        j.storagePath = config.storagePath;
        j.verbose = config.verboseLogging;
        j.permissive = config.permissiveMode;
        j.netTransferPrefer = ts;
        j.netTransferPropose = ts;
        j.writeTransfer = ts;

        logger.info(`pacs-server listening on port: ${j.source.port}`);

        dimse.startStoreScp(j, (result) => {
          // currently this will never finish
          logger.info(JSON.parse(result));
        });
      }, 2000);
    }, 1000);
  },
  shutdown: () => {
    const j = {};
    let source = {};
    // read data from database
    sql = `SELECT * FROM sourceNode where enable = "true"`;
    db.all(sql, [], (err, rows) => {
      if (err) return console.error('line 34 database error', err.message);

      console.log('sourceee db read', rows[rows.length - 1]);
      source = rows[rows.length - 1];
    });
    //database work ends

    setTimeout(() => {
      j.source = source;
      // j.target = source;

      // j.source = config.get('source');
      // j.target = config.get('source');

      // j.source = { aet: "DICOMWEB_PACS1", ip: "192.168.18.23", port: "5558" };
      // j.target = { aet: "DICOMWEB_PACS1", ip: "192.168.18.23", port: "5558" };

      j.verbose = config.verboseLogging;

      logger.info(`sending shutdown request to target: ${j.target.aet}`);

      return new Promise((resolve, reject) => {
        dimse.shutdownScu(j, (result) => {
          if (result && result.length > 0) {
            try {
              logger.info(JSON.parse(result));
              resolve();
            } catch (error) {
              logger.error(result);
              reject();
            }
          }
          reject();
        });
      });
    }, 1000);
  },
  sendEcho: () => {
    const j = {};
    // j.source = config.get('source');

    // read data from database
    sql = `SELECT * FROM sourceNode where enable = "true"`;
    db.all(sql, [], (err, rows) => {
      if (err) return console.error('line 34 database error', err.message);

      console.log('sourceee db read', rows[rows.length - 1]);
      j.source = rows[rows.length - 1];
    });
    //database work ends

    setTimeout(() => {
      console.log('j.source', j.source);
      //j.source = { aet: "DICOMWEB_PACS1", ip: "192.168.18.23", port: "5558" };
      // { aet: "DICOMWEB_PACS1", ip: "192.168.18.23", port: "5558" }

      j.target = j.source;
      j.verbose = config.verboseLogging;
      console.log('echoooooooooooooooooooooooooo');
      logger.info(`sending C-ECHO to target: ${j.target.aet}`);

      return new Promise((resolve, reject) => {
        dimse.echoScu(j, (result) => {
          if (result && result.length > 0) {
            try {
              logger.info(JSON.parse(result));
              resolve();
            } catch (error) {
              logger.error(result);
              reject();
            }
          }
          reject();
        });
      });
    }, 1000);
  },
  fileExists: (pathname) =>
    new Promise((resolve, reject) => {
      fs.access(pathname, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    }),
  studyLevelTags: () => [
    '00080005',
    '00080020',
    '00080030',
    '00080050',
    '00080054',
    '00080056',
    '00080061',
    '00080090',
    '00081190',
    '00100010',
    '00100020',
    '00100030',
    '00100040',
    '0020000D',
    '00200010',
    '00201206',
    '00201208',
  ],
  seriesLevelTags: () => ['00080005', '00080054', '00080056', '00080060', '0008103E', '00081190', '0020000E', '00200011', '00201209'],
  imageLevelTags: () => ['00080016', '00080018'],
  imageMetadataTags: () => [
    '00080016',
    '00080018',
    '00080060',
    '00280002',
    '00280004',
    '00280010',
    '00280011',
    '00280030',
    '00280100',
    '00280101',
    '00280102',
    '00280103',
    '00281050',
    '00281051',
    '00281052',
    '00281053',
    '00200032',
    '00200037',
  ],
  compressFile: (inputFile, outputDirectory, transferSyntax) => {
    const j = {
      sourcePath: inputFile,
      storagePath: outputDirectory,
      writeTransfer: transferSyntax || config.transferSyntax,
      verbose: config.verboseLogging,
    };

    // run find scu and return json response
    return new Promise((resolve, reject) => {
      dimse.recompress(j, (result) => {
        if (result && result.length > 0) {
          try {
            const json = JSON.parse(result);
            if (json.code === 0) {
              resolve();
            } else {
              logger.error(`recompression failure (${inputFile}): ${json.message}`);
              reject();
            }
          } catch (error) {
            logger.error(error);
            logger.error(result);
            reject();
          }
        } else {
          logger.error('invalid result received');
          reject();
        }
      });
    });
  },
  doFind: (queryLevel, query, defaults) => {
    // add query retrieve level
    const j = {
      tags: [
        {
          key: '00080052',
          value: queryLevel,
        },
      ],
    };

    // set source and target from config
    // j.source = config.get('source');

    // j.source = config.get('source');

    j.source = { aet: 'DICOMWEB_PACS1', ip: '192.168.18.23', port: '5558' };
    j.target = j.source;
    j.verbose = config.verboseLogging;

    // parse all include fields
    const includes = query.includefield;

    let tags = [];
    if (includes) {
      tags = includes.split(',');
    }
    tags.push(...defaults);

    // add parsed tags
    tags.forEach((element) => {
      const tagName = findDicomName(element) || element;
      j.tags.push({ key: tagName, value: '' });
    });

    // add search param
    let isValidInput = false;
    Object.keys(query).forEach((propName) => {
      const tag = findDicomName(propName);
      if (tag) {
        let v = query[propName];
        // patient name check
        if (tag === '00100010') {
          // check if minimum number of chars for patient name are given
          if (config.qidoMinChar > v.length) {
            isValidInput = true;
          }
          // auto append wildcard
          if (config.qidoAppendWildcard) {
            v += '*';
          }
        }
        j.tags.push({ key: tag, value: v });
      }
    });
    // return with empty results if invalid
    if (isValidInput) {
      return [];
    }

    const offset = query.offset ? parseInt(query.offset, 10) : 0;

    // run find scu and return json response
    return new Promise((resolve) => {
      dimse.findScu(j, (result) => {
        if (result && result.length > 0) {
          try {
            const json = JSON.parse(result);
            if (json.code === 0) {
              const container = JSON.parse(json.container);
              if (container) {
                resolve(container.slice(offset));
              } else {
                resolve([]);
              }
            } else if (json.code === 1) {
              logger.info('query is pending...');
            } else {
              logger.error(`c-find failure: ${json.message}`);
              resolve([]);
            }
          } catch (error) {
            logger.error(error);
            logger.error(result);
            resolve([]);
          }
        } else {
          logger.error('invalid result received');
          resolve([]);
        }
      });
    });
  },
};
module.exports = utils;
