# The Net Ninja Node Playlist

## Video 1 - Introduction

### What is Node.js?

* A platform which allows us to run JavaScript on a computer/server
* Read, delete and update files
* Easily community with a database

### Why is Node.js Popular?
* It uses JavaScript
* Very fast with huge ecosystem of open source packages
* Great for real-time services like chats

## Video 2 - Installing Node.js

### Running Node.js at the command line

* The current version as of 2/18/2018 is 9.5.0
* Node can be run from the Terminal/Command by typing the command ```node```
	* After, a prompt will appear with ```>```
	* At this promp, a JavaScript file can be run by typing the filename

## Video 3 -The V8 Engine

### JavaScript Engines

*  Computers do not understand JavaScript
* A JavaScript engine takes JavaScript and converts it into something it does understand - machine code
	* JavaScript > C++ > Assembly Language > Machine Code
	* Node.js is written in C++, but as a program it allows developers to write JavaScript that can run on a computer or server
* The reason why Node.js is written in C++ is because it uses the V8 JavaScript engine, created by Google and written in C++.
	* The V8 engine converts JavaScript into machine code
Test

## Video 4 - The Global Object

* When writing JavaScript in the browser, the Global Object is the *window object*
*  The Global Object when using Node.js is no longer the *window* object
	* The Global Object in Node is an object called *global*
	* Like the *window* object, *global* gives access to methods that can be accessed straight out of the box
	* Documentation: <https://nodejs.org/api/globals.html#globals_global>

###  Examples
**__dirname** - The directory name of the current module.
```js
console.log(__dirname);
// Prints: /Users/mjr
```
**__filename** - The file name of the current module. This is the resolved absolute path of the current module file.
```js
console.log(__filename);
// Prints: /Users/mjr/example.js
```
## Video 5 - Function Expressions

```js
// normal function statement
function sayHi() {
	console.log('Hi');
}
sayHi();
```
```js
// function expression
var sayBye = function(){
	console.log('bye');
};
sayBye();
```
Function expressions are used often in Node.js

## Video 6 - Modules and require()
Code in Node.js is typically split up into logical *modules* and, when certain code is needed, the module is called and used in the project.

Below is an example of two separate JavaScript files.  The 2nd, app.js, requires count.js and count.js exports the function that is defined within the file:

**count.js**
```js
const counter = function(arr) {
  return 'There are ' + arr.length + ' elements in this array.';
};
console.log(counter(['xavier', 'ryu', 'ken']));

module.exports = counter; // exported to use in app.js
```
**app.js**
```js
const counter = require('./count');
/**
	counter function from count.js is used when
	app.js is run
**/
```
### Do you need to use module.exports?

In the above code snippets, leaving out *module.exports* from the count.js file and requiring it in app.js won't throw any errors

This [Stack Overflow](https://stackoverflow.com/questions/38172337/using-require-without-export) page goes into more detail about *module.exports* and why it's needed.


