// function printstuff(stuff){
//   console.log(stuff);
// }

// //Anonymous function
// function mainfunc(anotherfunc,value){
//   anotherfunc(value);
// }

// var printstuff = function(stuff){
//   console.log(stuff);
// }


// mainfunc(printstuff,"hello");

// mainfunc(function(stuff){
// console.log(stuff);
// },"hi");


// //Callback function
// console.log("User1 made a request");
// setTimeout(callback,5000);

// console.log("User2 made a request");
// setTimeout(callback,5000);

// console.log("User3 made a request");
// setTimeout(callback,5000);

// function callback(){
//   console.log("Queried the database and delivered the data in 5 Sec");
// }

//for importing module
// var athletic = require('./athletics');
// athletic.relay(); 
// athletic.Running();

//HTTP MODULE

// var http = require('http'); 
// http.createServer(function(req,res){
//   res.writeHead(200,{"Content-Type":"text/plain"});
//   res.write("Hello World");
//   res.end();
// }).listen(8888);


//Events
// var events = require('events');
// var eventemitter = new events.EventEmitter();

// var ringbell =function(){
//   console.log("ring");
//   eventemitter.emit( 'bellrings','welcome')
// }

// eventemitter.on('dooropen',ringbell);
// eventemitter.on('bellrings',function(msg){
//   console.log(msg);
// })
// eventemitter.emit('dooropen');


//File(fs) module 


// var fs = require('fs');

// //does not blocks the code excec 
// fs.readFile('input.txt',function(err,data){
//     if(err){
//       console.log(err);
//     }
//     else{
//       console.log(" Async Data is : " + data.toString());
//     }
// }); 
// //blocks the code excec,
//  //output: sync data first and then async data
// var data = fs.readFileSync('input.txt')
// console.log("Sync data :" + data.toString());
// console.log("this is end");



//Streams: used to read the data from source and pipes the data to destn easily

var fs = require('fs');

// var readablestream = fs.createReadStream('input.txt');
// var data = '';
// readablestream.setEncoding('UTF8');
// readablestream.on('data',function(chunk){
//   data +=chunk;
// });

// readablestream.on('end',function(){
//   console.log(data);
// });

// var writedata = " this is write data"
// var writestream = fs.createWriteStream('output.txt');
// writestream.write(writedata,'UTF8');
// writestream.end();
// writestream.on('finish',function(){
//   console.log('write completed');
// })
//Deleting the files: unlink()

//Pipes

readstream = fs.createReadStream('input.txt');
writestream = fs.createWriteStream('out.txt');

readstream.pipe(writestream);

