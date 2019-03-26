//API declaration 

const express = require('express')
const app = express()
const events = require('./app/events')
const filesRouter = require('./app/fileHandlerRouter.js')
const clientServiceRouter = require('./app/clientServiceRouter.js')
//Setup dotenv for environment variables
require('dotenv').config()


app.use('/files', filesRouter);
app.use('/http', clientServiceRouter);

module.exports = app