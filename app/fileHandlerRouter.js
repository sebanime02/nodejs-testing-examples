
const express = require('express')
const fs = require('fs')
//const  convertPromiseToAsyncAwaitHandable =  require('./utils.js').convertPromiseToAsyncAwaitHandable
import {createFile, createFolder, changeFilePermissions} from './fileHandler.js'
const router = express.Router()


router.get('/', function (req, res) {
  res.send('Welcome to the root')
})

router.get('/create/promises', function (req, res) {
  const object = {name: "sebas", lastname: "benavides"}
  let data = JSON.stringify(object)
  createFolder("../files/file.json")

  .then(function(result){
    console.log('folder created successfully!!')
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


router.get('/create/await', async function (req, res){
  const object = {name: "sebas", lastname: "benavides"}
  
  let data = JSON.stringify(object)

  try{
    let successfullFilePath = await createFolder('../files/file.json').catch(error => {
      throw 'Error creating folder, backtrace: '+error
    })
    let result = await createFile(successfullFilePath,data).catch(error => {
      throw 'Error creating file, backtrace: '+error
    })
  
    console.log(JSON.stringify(result))
    res.redirect('/')  
  }catch(e){
    console.log(e)
  }
 
})





module.exports = router