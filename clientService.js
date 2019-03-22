

const INDEX_ROUTE = "https://jsonplaceholder.typicode.com/todos/"


const getAll = function(){
  return new Promise((resolve,reject) => {
    fetch(INDEX_ROUTE).then((res) => resolve (res),(err) => reject(err))
})

}


export {getAll}