## Hoisting Exercises

### If the code is `valid` what will be the output and if `invalid` what will be the error. Write the error message.

1.

```js
console.log(animal);
var animal = "monkey";
// Output or Error Message
```
There is no error.

The output is 'undefined' logged on the console.

2.

```js
console.log(animal);
let animal = "monkey";
// Output or Error Message
```
my guess -- ReferenceError: Animal is not defined.

on checking -- error: ReferenceError: can't access lexical declaration 'animal' before initialization

Reasoning -- let variables are not initialized when hoisted, hence the console looks at the variable animal as something that is not defined/initialized yet.

3.
```js
console.log(animal);
const animal = "monkey";
// Output or Error Message
```

This piece of code will throw an error.

The error should be as follows:

my guess -- ReferenceError: can't access animal

on checking -- ReferenceError: can't access lexical declaration 'animal' before initialization

Reasoning -- const keyword doesn't get initialized when hoisted. Since, we cannot use a variable without initialization in JS, therefore, the _animal_ variable will not be accessible to the log method.

4.
```js
function sayHello(msg) {
  alert(msg);
}
sayHello("Hey Everyone");
// Output or Error Message
```
My guess -- No Error. The window should display an alert with the message - "Hey Everyone".

On checking -- correct.

Reasoning -- The function declaration was done before it was called. Thus, the function call could locate the function sayHello in the lexical scope.

5.
```js
sayHello("Hey Everyone");
function sayHello(msg) {
  alert(msg);
}
// Output or Error Message
```

There should be no errors in this piece of code. Since, the function declaration would hoist the function definition of sayHello above the line of code where we call it, there should be no issues for the function call to locate it in the lexical scope.

It would display an alert with the string "Hey Everyone"

6.
```js
sayHello("Hey Everyone");
var sayHello = msg => {
  alert(msg);
};
// Output or Error Message
```

My Guess -- TypeError: the js compiler wouldn't know whether sayHello is a function.

On checking -- error: TypeError: sayHello is not a function

Reasoning -- the var keyword hoists the sayHello declaration to the top and initializes it with the value of undefined. Now, in the succeeding line, we call the function. But the compiler has no way to know if the variable sayHello is a function or not. Thus, when we call it, the compiler would throw an error.

7.
```js
sayHello("Hey Everyone");
let sayHello = msg => {
  alert(msg);
};
```

My Guess -- ReferenceError: the js compiler cannot access the sayHello variable in the lexical scope

On Checking -- error: ReferenceError: can't access lexical declaration 'sayHello' before initialization

Reasoning -- The let keyword ensures that the sayHello variable is not initialized. It is hoisted, but not initialized. Since, in JS, we cannot use any variable without initialization, the compiler would throw an error when we try to call the function.