import {getAll} from './clientService.js'
const utils = require('./utils')
const express = require('express')

const router = express.Router()


router.get('/getAll', async function (req, res) {
  let err, streamResponse,jsonResponse;

  [err,streamResponse] = await convertPromiseToAsyncAwaitHandable(getAll());
  [err,jsonResponse] = await convertPromiseToAsyncAwaitHandable(streamResponse.json());
  console.log(jsonResponse)
})

module.exports = router
