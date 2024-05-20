'use strict';
const config = require('config');
var fs = require('fs');
const fs1 = require('fs-extra');
var spawn = require('child_process').spawn;

process.chdir('./node_modules/dicomweb-pacs');

let TestsTxtFile = `${__dirname.split('\\webpacsApp')[0]}\\webpacsApp\\node_modules\\dicomweb-pacs\\Testss.Txt`;
let getTxtFile = `${__dirname.split('\\webpacsApp')[0]}\\webpacsApp\\node_modules\\dicomweb-pacs\\getText.txt`;
let DataNativeFolder = `${__dirname.split('\\webpacsApp')[0]}\\data\\Native`;

// This fixes dicom-pacs in Unix-like file systems (MacOS/Linux...) where backslashes are used instead of forward slashes like on Windows
if (__dirname.split('dicomweb-pacs\\').length <= 1) {
  TestsTxtFile = `${__dirname.split('\\webpacsApp')[0]}\\webpacsApp\\node_modules\\dicomweb-pacs\\Testss.Txt`;
  getTxtFile = `${__dirname.split('\\webpacsApp')[0]}\\webpacsApp\\node_modules\\dicomweb-pacs\\getText.txt`;
  DataNativeFolder = `${__dirname.split('\\webpacsApp')[0]}\\data\\Native`;
}

function startServer() {
  console.log('starting dicomweb-pacs...');
  const ls = spawn('node', ['src/app.js']);

  ls.stdout.on('data', (data) => {
    console.log(`stdout mao out: ${data}`);
  });

  ls.stderr.on('data', (data) => {
    fs.appendFileSync(TestsTxtFile, data);
    const contents2 = fs.readFileSync(TestsTxtFile, 'utf-8');

    var newString = contents2.toString();

    let result1 = newString.replace(/\s/g, '');

    let result2 = result1.replace(/['"]+/g, '');

    const citrus = result2.slice(result2.indexOf('I:AssociationReceived') + 37, result2.indexOf('I:AssociationReceived') + 75);

    var mySubString = citrus.substring(citrus.indexOf(':') + 1, citrus.lastIndexOf('->'));

    if (
      mySubString != 'DICOMWEB_PACS' &&
      mySubString.length > 2 &&
      mySubString.length < 20 &&
      !mySubString.includes(':') &&
      !mySubString.includes('.') &&
      !mySubString.includes('&')
    ) {
      fs.writeFileSync(getTxtFile, mySubString);
    }

    //latest code

    //1. catch edit aet and create folder.
    const gettext = fs.readFileSync(getTxtFile, 'utf8');
    console.log('gettext', gettext);

    //read folders in Native
    try{
      const getfolder = fs.readdirSync(DataNativeFolder);
    }catch(err){
      console.log("check err is 63", err);

    }
    const getfolder = fs.readdirSync(DataNativeFolder);
    console.log('getfolder', getfolder);

    const getfolder2 = getfolder.filter((cur) => cur != 'image.db');

    //get latest time folder then replace with desktop name
    let dateaArr = [];
    let nameOfLatestFolder = '';
    for (var i = 0; i < getfolder2.length - 1; i++) {
      fs.stat(`${DataNativeFolder}/${getfolder2[i]}`, (error, stats) => {
        // in case of any error
        if (error) {
          console.log("check err is 72", error);
          return;
        }
        // else show creation time from stats object
        console.log('File created at: ', stats.birthtime);
        dateaArr.push(stats.birthtime);
        console.log('dateaArr === ', dateaArr);
        console.log('Folders === ', getfolder2);
        //find latest created folder
        var largest = 0;
        for (i = 0; i < dateaArr.length; i++) {
          if (dateaArr[i] > largest) {
            largest = dateaArr[i];
          }
        }
        //find index of latest created folder and name of that folder
        const indexOfLatestDate = dateaArr.indexOf(largest);
        nameOfLatestFolder = getfolder2[indexOfLatestDate];
      });
    }

    //create folder of gettext
    // setTimeout(() => {
    //   console.log("start");
    //   fs.readFile(getTxtFile, 'utf8', function(err, data){
    //     if(data){
    //       if(data != "DICOMWEB_PACS"){
    //       var dir = `${DataNativeFolder}/${data}`;
    //       // if (!fs.existsSync(dir)){
    //       //     fs.mkdirSync(dir);
    //       // }
    //     }
    //     }else{
    //       console.log("see data", err);
    //     }
    // });
    // }, 1000);

    // //now sote incoming file in date folder, date can be created wehn file sent
    // setTimeout(() => {
    //   if(nameOfLatestFolder.includes(".")){
    //     const src = `${DataNativeFolder}/${nameOfLatestFolder}`
    //       const d = new Date();
    //       const day = d.getDate();
    //       const year = d.getFullYear();
    //       const month = d.getMonth() + 1;
    //       let finalDate = `${year}${month}${day}`
    //       const dest = `${DataNativeFolder}/${gettext}/${finalDate}/${nameOfLatestFolder}`
    //     if(gettext != "DICOMWEB_PACS" && gettext.length > 2 && gettext.length < 20){
    //     fs1.move(src, dest, { overwrite: false }, function(err, data){
    //       if(data){
    //         console.log("files has been succcessfully moved", data);
    //       }else{
    //         console.log("files has not been moved", err);
    //       }
    //     });
    //   }
    //   }
    // }, 12000);

    // //----------------------------------------reading tags starts-----------------------------
    // setInterval(() => {
    //       fs.stat(DataNativeFolder, (err, stats) => {
    //         if (err) {
    //           throw err
    //         }

    //         var diff = Math.abs(new Date() - stats.ctime);
    //         function millisToMinutesAndSeconds(millis) {
    //           var minutes = Math.floor(millis / 60000);
    //           var seconds = ((millis % 60000) / 1000).toFixed(0);
    //           return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
    //         }
    //        //  console.log("differencedifferencedifference=", millisToMinutesAndSeconds(diff));

    //         var timeSplit = millisToMinutesAndSeconds(diff).split(":");
    //        // console.log("splitsplitsplit", timeSplit[0]);
    //         // var delay = Math.ceil(files.length/25);
    //         console.log("change folder interval is ", timeSplit);

    //         if(parseInt(timeSplit[0]) >= 1 || parseInt(timeSplit[1]) >= 50){

    //           fs.readdir(DataNativeFolder, (err, topFolders) => {
    //             if (err)
    //               console.log(err);
    //             else {
    //               if(topFolders.length > 1){
    //                 var Mfolders1 = topFolders.filter((cur) => cur !== 'image.db');
    //                 var Mfolders2 = Mfolders1.filter((cur) => cur.includes("."));

    //                 if(Mfolders2.length >= 1){

    //                   console.log("Mfolders2Mfolders2", Mfolders2);

    //                   const gettext = fs.readFileSync(getTxtFile, 'utf8');
    //                   console.log("gettext", gettext);

    //                   Mfolders2.forEach((cur) => {

    //                     const src = `${DataNativeFolder}/${cur}`
    //                     const d = new Date();
    //                     const day = d.getDate();
    //                     const year = d.getFullYear();
    //                     const month = d.getMonth() + 1;
    //                     let finalDate = `${year}${month}${day}`
    //                     const dest = `${DataNativeFolder}/${gettext}/${finalDate}/${cur}`
    //                   if(gettext != "DICOMWEB_PACS" && gettext.length > 2 && gettext.length < 20){
    //                   fs1.move(src, dest, { overwrite: false }, function(err, data){
    //                     if(data){
    //                       console.log("files has been succcessfully moved", data);
    //                     }else{
    //                       console.log("files has not been moved", err);
    //                     }
    //                       });
    //                     }

    //                   });

    //                 }

    //               }

    //             }
    //           });

    //         }
    //       })

    // }, 5000);

    // //--------------------------------reding tags ends-----------------------------------

    setTimeout(() => {
      fs.writeFileSync(TestsTxtFile, '');
      console.log('set time out for test.txt clear nameOfLatestFolder', nameOfLatestFolder);
      console.log('gettext length', gettext.length);

      if (gettext.length > 2) {
        console.log('yes greater than 1', gettext.length);
      } else {
        console.log('no not greater than 1', gettext.length);
      }
    }, 2000);
    console.error(`stderr mao err: ${data}`);
  });

  ls.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

module.exports = startServer;
