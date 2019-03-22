const express = require('express')
const app = express()
const router = require('./router.js')

//Setup dotenv for environment variables
require('dotenv').config()
//const rootRoutes = require('./rootRoutes.js')


app.use('/', router);

app.listen(3000, () => console.log('App listening'))
