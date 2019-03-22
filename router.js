
const express = require('express')
import {createFile, createFolder} from './fileHandler.js'
const router = express.Router()


router.get('/file', function (req, res) {
  const object = {name: "sebas", lastname: "benavides"}
  let data = JSON.stringify(object)
  createFolder('../files/file.json').then(function(result,err){
    if(err) throw 'Error creating folder'
    createFile(result,data)
    }).then(function(result,err){
    if(err) throw 'Error creating file'
    console.log('file created successfully!!')
    res.redirect('/')
  }).catch(function(err){
    console.log(err)
  })
})

router.get('/', function (req, res) {
  res.send('Welcome to the root')
})


module.exports = router
