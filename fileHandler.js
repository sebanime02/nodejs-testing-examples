
var mkdirp = require('mkdirp');
var path = require('path');
var fs = require('fs')

const createFile = function(filePath, data){
  return new Promise(function(resolve, reject){
    fs.writeFile(filePath, data, function(err){
      if(err) reject(err)
      resolve(filePath)
    })
  })
}

const createFolder = function(filePath){
  return new Promise(function(resolve,reject){
    mkdirp(path.dirname(filePath), function (err) {
    if (err) reject(err);
    resolve(filePath)
    })
  })
}


export {createFile, createFolder}
