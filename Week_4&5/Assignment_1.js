// 1. How does JavaScript execute code?
// Question: Write a program that calls three functions (start, process, end) in sequence. Predict the order in which they will execute.

function start() {

    console.log("Start");
  
}
  
const process= function () {
  
    console.log("Processing...");
  
}
  
const end = () => {
  
    console.log("End");

  
}
  
start();
  
process();
  
end();
  
