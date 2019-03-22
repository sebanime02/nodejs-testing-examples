
module.exports = function (server) {
  server.on('request', function (request, response) {
    console.log("New request")
  }); // Emitted each time there is a request.

}
