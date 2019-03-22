
var mkdirp = require('mkdirp');
var path = require('path');
var fs = require('fs')

const createFile = function(filePath, data){
  return new Promise(function(resolve, reject){
    fs.writeFile(filePath, data, function(err){
      if(err) reject(new Error(err))
      resolve(filePath)
    })
  })
}

const createFolder = function(filePath){
  return new Promise(function(resolve,reject){
    mkdirp(path.dirname(filePath), function (err) {
    if (err) reject(new Error(err));
    resolve(filePath)
    })
  })
}

const changeFilePermissions = function(filePath,fileMode){
  return new Promise(function(resolve,reject){
    fs.chmod(path.dirname(filePath),fileMode,function(err){
      if(err) reject(new Error(err))
      resolve(filePath)
    })
  })
}

export {createFile, createFolder, changeFilePermissions}
