
//Networking concerns 

const app = require('../../index.js')

app.listen(process.env.HTTP_PORT || 3000, () => console.log('App listening'))

