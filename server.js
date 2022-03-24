var http = require('http');
var url = require('url');

function startServer(route,handle){
  function onRequest(req, res){
    var reviewdata = '';
    var pathname = url.parse(req.url).pathname;
    console.log("Request received for" + pathname);
    req.setEncoding("utf8");
    req.addListener("data",function(chunk){
      reviewdata += chunk;
    });
    req.addListener("end",function(){
      route(handle,pathname,res,reviewdata);
    })
 
  }
  http.createServer(onRequest).listen(8888);
  console.log("Server started on port 8888");
}
exports.startServer = startServer;

