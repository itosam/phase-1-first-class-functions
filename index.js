const callbackFunction = () => console.log("hi");

const receivesAFunction = callbackFunction => callbackFunction();
//full syntax function receivesAFunction(callbackFunction){
//   callbackFunction()
// }

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("hi");
  }
}

function returnsAnAnonymousFunction(){
  return function(){ 
    console.log('hi');
  }
}
