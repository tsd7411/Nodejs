//Module way 1

// function relay(){
//   console.log("This is relay function");
// }

// function Running(){
//   console.log("This is running function");
// }

// module.exports.relay = relay;
// module.exports.Running = Running;

//module way 2

module.exports = {
  relay:function(){
    console.log("This is relay func");
  },
  Running:function(){
    console.log("This is running func");
  }
}