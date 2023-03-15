var http = require("http");

http.createServer(function (req, res) {
  res.end("./index.html")
}).listen(8081);

console.log("eu sou foda");