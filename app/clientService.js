
const fetch = require('node-fetch')

const INDEX_ROUTE = "https://jsonplaceholder.typicode.com/posts/"


const getAll = function(){
    fetch(INDEX_ROUTE)
  }


export {getAll}