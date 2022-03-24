function route(handle,pathname,res,reviewdata){
  console.log("Routing a request for " + pathname);

  if(typeof handle[pathname]==='function'){
    handle[pathname](res,reviewdata);
  }else{
    console.log("No handler for"+ pathname);
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.write("Error 404");
    res.end();
  }
}

exports.route = route;