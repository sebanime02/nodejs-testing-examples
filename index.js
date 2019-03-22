const express = require('express')
const app = express()
const filesRouter = require('./fileHandlerRouter.js')
const clientServiceRouter = require('./clientServiceRouter.js')
const events = require('./events')
//Setup dotenv for environment variables
require('dotenv').config()


app.use('/files', filesRouter);
app.use('/http', clientServiceRouter);



app.listen(3000, () => console.log('App listening'))
