
const express = require('express')
const fs = require('fs')
const utils = require('./utils')
import {createFile, createFolder, changeFilePermissions} from './fileHandler.js'
const router = express.Router()


router.get('/', function (req, res) {
  res.send('Welcome to the root')
})

router.get('/create/promises', function (req, res) {
  const object = {name: "sebas", lastname: "benavides"}
  let data = JSON.stringify(object)
    createFolder('../files/file.json')

    .then(function(result){
      createFile(result,data)
    },function(err){
      throw 'Error creating folder, backtrace: '+err
    })
    .then(function(result){
      console.log('file created successfully!!')
      changeFilePermissions(result, 0o765)
    },function(err){
      throw 'Error creating file, backtrace: '+err
    })
    .then(function(result){
      console.log('Permissions changed successfully')
      res.redirect('/')
    },function(err){
      throw 'Error changing permissions '+err
    }) 
    .catch(function(err){
      console.log(err)
    })
})


router.get('/create/await', async function (req, res) {
  const object = {name: "sebas", lastname: "benavides"}
  let data = JSON.stringify(object)
  let successfullFilePath;
  
  [err,successfullFilePath] = await convertPromiseToAsyncAwaitHandable(createFolder('../files/file.json'));
  if(err) throw new Error('Error creating folder, backtrace: '+err)

  [err,successfullFilePath] = await convertPromiseToAsyncAwaitHandable(createFile(successfullFilePath,data));
  if(err) throw new Error('Error creating file, backtrace: '+err)

  [err,successfullFilePath] = await convertPromiseToAsyncAwaitHandable(changeFilePermissions(successfullFilePath, 0o765));
  if(err) throw new Error('Error changing permissions '+err)

})




module.exports = router