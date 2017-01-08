//Some notes :
//closures are functions retaining access to the lexical scope they were defined in, so they can reference variables even if the function they were defined in already returned
//a function with access to its parent's scope
//private variables, security
//can have a function with variables that returns methods to interact with the private variables
//in strict mode this cannot be window, it will be undefined, error



function memo2(fn) {
  var self = fn;
  var cache = {};
  return function(...args) {
    if(args in cache) {
      console.log('already stored')
      return cache[args];
    } else {
      return cache[args] = self(...args)
    }
  }
}
// var remember = function(str) { return str + 'REMEMBER'}
// var memoRemember = memo2(remember);
// memoRemember('Welcome');
// memoRemember('Goodbye')
// memoRemember('Welcome');


//takes a function, binds a scope to it, so when it is invoked it is with that context (this, sets the object that owns it)
function binder(func, scope) {
 return function(...args) {
   return func.apply(scope, args);
 }
}
// var heyThere = function(str, str2) {
//   return `Hey There ${str} ${str2} ${this.name}`
// }
// var bound = binder(heyThere, {name:'Javascript'})

// Function.prototype.bind = function (scope) {
//     var fn = this;
//     return function () {
//         return fn.apply(scope);
//     };
// }

//scope: what variables have access to when invoked
//Context: is always the value of the this keyword which is a reference to the object that “owns”

//returns a function with the first parameter set
function freezeFirstParam(fn, val) {
  return function(...args) {
    return fn(val, ...args)
  }
}

//call multiple functions in a row passing the result to the next function
var pipe = (initialValue, ...functions) => {
  return functions.reduce((val, fn) => {
    return fn(val);
  }, initialValue)
}
// function add10(a) { return a + 10;}
// function subtract5(a) { return a - 5;}
// function times7(a) { return a * 7;}
//
// pipe(12,add10,subtract5,times7);
