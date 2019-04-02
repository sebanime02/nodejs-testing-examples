import {getAll} from './clientService.js'
const utils = require('./utils')
const express = require('express')
const fetch = require('node-fetch')
const INDEX_ROUTE = "https://jsonplaceholder.typicode.com/posts/"


const router = express.Router()


router.get('/getPosts', async function (req, res) {
  res.set('Content-Type', 'text/plain');

  try{
    let streamResponse = await fetch(INDEX_ROUTE).catch((err)=> {throw 'Error Fetch '+err})
    let jsonResponse = await streamResponse.json().catch((err)=> {throw 'Error Json '+err})
    console.log(JSON.stringify(jsonResponse))
    res.set('Content-Type', 'application/json');
    res.status(200).send(jsonResponse)
  }catch(e){
    console.log(e)
    res.status(500).send({error: e})
  }
})

router.get('/responseGet/:userId/edit/:foodId', function (req, res) {

  const {userId,foodId} =  req.params
  var object = {userId: userId, foodId: foodId, query: req.query}
  res.status(200).send(object)
})


module.exports = router
