var querystring = require('querystring');

function home(res){
  console.log("Executing home handler");
  var htmlfile = '<html>'+
  '<head>'+
  '</head>'+
  '<body>'+
  '<form action="/review" method ="post">'+
  '<textarea name="text" rows="20" col="60"></textarea>'+
  '<input type="submit" value="submit text" />'+
  '</form>'+
  '</body>'+
  '</html>';

  res.writeHead(200,{"Content-Type":"text/html"});
  res.write(htmlfile);
  res.end();

}

function review(res,reviewdata){
  console.log("Executing review handler");
  res.writeHead(200,{"Content-Type":"text/plain"});
  res.write("Your review is "+querystring.parse(reviewdata).text);
  res.end();

}

exports.home = home;
exports.review = review;