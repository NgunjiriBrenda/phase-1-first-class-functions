function receivesAFunction(callback){
    callback();

}
function returnsANamedFunction(){
   function innerFunction(){
    console.log("Hey, I'm present");
   }
   return innerFunction;
}

function returnsAnAnonymousFunction(){
    return function(){
        console.log("I am anonymous and good ");
    }
}
  