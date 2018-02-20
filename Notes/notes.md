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

## Video 7 - Module Patterns

There are several ways to export modules, below is a few examples:
**stuff.js**
```js
module.exports.counter = function(arr) {
  return 'There are ' + arr.length + ' elements in this array.';
};
module.exports.adder = function(a, b) {
    return `The sum of the two numbers is ${a + b}`;
};
module.exports.pi = 3.142;
```
**app.js**
```js
const stuff = require('./stuff');

console.log(stuff.counter(['xavier', 'ryu', 'ken']));
console.log(stuff.adder(5, 6));
console.log(stuff.pi);
```
**stuff.js**
```js
const counter = function(arr) {
    return 'There are ' + arr.length + ' elements in this array.';
};

const adder = function(a, b) {
    return `The sum of the two numbers is ${a + b}`;
};

const pi = 3.142;

module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
};
```
## Video 8 - The Node Event Emitter

An example of using the Event Module:
```js
const EventEmitter = require('events');

class Person extends EventEmitter {
    constructor(name) {
        super();
        this.name = name;
    }
}

const foo = new Person('Foo');
const bar = new Person('Bar');
const baz = new Person('Baz');

const people = [foo, bar, baz];

people.forEach((person) => {
    person.on('speak', (msg) => {
        console.log(person.name + ' said: ' + msg);
    });
});

foo.emit('speak', 'hey dudes');
bar.emit('speak', 'I am bar');
baz.emit('speak', 'So is baz');
```
## Video 9 - Reading & Writing Files

### File System Module (fs)
To get started with reading and writing files, it requires the core module **fs** ([documentation](https://nodejs.org/api/fs.html))

```js
const fs = require('fs');
```
### Synchronous read and write
```js
// Read file
const txt = fs.readFileSync('myFile.txt', 'utf8');
console.log(txt);

// Write to file
fs.writeFileSync('myFile.txt', txt);

// Async read file
fs.readFile('myfile.txt', 'utf8', (err, data) => console.log(data));
console.log('test');
```
### Asynchronous read and write
```js
// Async read and write
fs.readFile('myfile.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('File has been read');
   fs.writeFile('writeMe.txt', data, (error) => {
       if (error) throw error;
       console.log('The file has been saved!');
   });
});
```
### Delete files

```js
fs.unlink('writeMe.txt', (err) => {
        if (err) throw err;
        console.log('File deleted');
    }
);
```
## Video 10 - Creating / Removing Directories
Deleting directories requires the same File System (fs) module required to read/write/delete files:
```js
const fs = require('fs');
```
### Synchronous add/remove
```js
fs.mkdirSync('myDirectory');
```
```js
fs.rmdirSync('myDirectory');
```
### Asynchronous

```js
fs.mkdir('myDirectory');
```
```js
fs.rmdir('myDirectory');
```
### Make directory, create file and write to file
```js
// Make directory, create file and write to file
fs.mkdir('stuff', () => {
    fs.readFile('myFile.txt', 'utf8', (err, data) => {
        if (err) throw err;
        fs.writeFile('./stuff/myfile.txt', data, (err) =>{
            if (err) throw err;
        });
    });
});
```
### Remove directory with file inside
```js
// Remove directory with file inside
fs.unlink('./stuff/myfile.txt', (err) => {
    if (err) throw err;
    fs.rmdir('stuff', (err) => {
        if (err) throw err;
    });
});
```

## Video 11 - Clients & Servers

### Protocols
* Client sends **request** to server
* Server handles request and sends **response** to client
* This is done through the use of protocols

**Protocols** are a set of communication rules that two sides agree to use when communicating

* HTTP/HTTPS is a protocol
* FTP
* TCP
* 
### Ports

A program running on a computer can listen for requests sent to a particular port number

* 172.24.86.76:**3000**

## Video 12 - Creating a Server

Creating a server requires the **http** module
```js
const http = require('http');
```
using the *createServer()* method will create the server
```js
const server = http.createServer();
```
The *createServer()* method takes in two parameters from dealing with responses and requests:
```js
const server = http.createServer((req, res) => {
    
});
```

### Response Headers
* Client request also contains headers
* Response contains data and response headers

Headers are extra information about the request or response.  It's similar to how an HTML page has a ```<head></head>``` section that tells the browser more about the HTML document, but isn't shown in the browser.

Resposne Headers contain similar information such as **content-type** and **status**.
* content-type can be something like JSON, HTML, plain text, etc; information the browser could use to know what type of data to expect and deal with accordingly
* status can be things like 404 ,200, etc

### Using Response Headers
The *writeHead()* method in the example below takes in two paramaters:
1. The status
2. Content type

```js
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});
```
### Listen From a Port

After the above configuration, the server is still not ready because it's not listening on a port.

Using the *listen()* method, the server can be set-up to listen on a port and IP Address.  For local development, this would look like:

```js
server.listen(3000, 'localhost');
console.log('listening on port 3000');
```

### The Entire Server Script
```js
const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url); // get path on change
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hey ninjas');
});

server.listen(3000, 'localhost');
console.log('listening on port 3000');
```
## Video 13 - Streams and Buffers

### Buffers
* Temporary storage spot for a chunk of data that is being transferred from one place to another
* The buffer is filled with data, then passed along
* Transfer small chunks of data at a time

### Streams

* In Node.js, streams can be created to transfer data
* Increased performance

## Video 14 - Readable Streams

### Types of streams
* Writable Streams
* Readable Streams
* Duplex

 Working with streams requires File System (fs) module:
 ```js
 const fs = require('fs');
 ```
### Create a Read Stream from a file

Using the *createReadStream()*, a file can be read and a stream will be created from it:
```js
const myReadStream = fs.createReadStream(`${__dirname}/lorem.txt`, 'utf8');
```
### Listen to Read Stream

The *createReadStream()* method inherits from the Event Emitter, creating an event called 'data':
```js
// Listen for when data arrives
myReadStream.on('data', (chunk) =>{
    console.log('new chunk received: ');
    console.log(chunk);
});
```

## Video #15 - Writable Streams

In the previous section, when reading data from the buffer stream, the data was logged in the console.  Typically, the data will be written somewhere else like the client/browser or a new file is created, for example

### Creating a write stream
```js
const myWriteStream = fs.createWriteStream(`${__dirname}/writeLorem.txt`);
```
*myWriteStream()* can be called inside myReadStream() created in the section before:
```js
// Listen for when data arrives
myReadStream.on('data', (chunk) =>{
    console.log('new chunk received: ');
    myWriteStream.write(chunk);
});
```

## Video 16 - Pipes

Reading data from a read stream then transferring that data to the write stream is common in Node.js

Using **pipes** is a much more efficient way to handle read/write streams.

### Example of using Pipe to write data to a server response

```js
const http = require('http');
const fs = require('fs');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    const myReadStream = fs.createReadStream(`${__dirname}/lorem.txt`, 'utf8');
    // Listen for data
    myReadStream.pipe(res); // creates and writes to the response stream
});

// Listen for server
server.listen(3000, 'localhost');
console.log('listening on port 3000');
```
## Video 17 - Serving HTML Pages

Using the same process as the previous section where a stream was read and the data was written to the response, rather than read from the .txt file, an html file can be used instead.

### Changes to Server Script
To make this happen a few changes need to take place:
1. Content-Type needs to be changed to text/html
	```js
	res.writeHead(200, {'Content-Type': 'text/html'});
	```
2. The *createReadStream()* method's file name needs to be changed
	```js
	const myReadStream = fs.createReadStream(`${__dirname}/index.html`, 'utf8');
	```
### The New Server Script
```js
const http = require('http');
const fs = require('fs');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html'}); // changed
    const myReadStream = fs.createReadStream(`${__dirname}/index.html`, 'utf8'); // changed
    // Listen for data
    myReadStream.pipe(res); // creates and writes to the response stream
});

// Listen for server
server.listen(3000, 'localhost');
console.log('listening on port 3000');
```

## Video 18 - Serving JSON Data

In the previous section, HTML was sent to the browser/client using a read stream then piping it to the response.

This time, we want to send back JSON instead using the response and *end()* method.

### Header Changes

Content type needs to be changed to   *application/json*
```js
res.writeHead(200, {'Content-Type': 'application/json'});
```
### Write the Object, Stringify then end()

Before the created object can be passed into the *end()* method, it needs to be converted into a JSON string:
```js
const myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
res.end(JSON.stringify(myObj));
```
### The New Serving JSON Data Script
```js
const http = require('http');

// Create server
const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'application/json'});
    const myObj = {
        name: 'Ryu',
        job: 'Ninja',
        age: 29
    };
    res.end(JSON.stringify(myObj));
});

// Listen for server
server.listen(3000, 'localhost');
console.log('listening on port 3000');
```

## Video 18 - Basic Routing

Basic routing can be handled by getting the request url path and doing something based on that request
```js
const http = require('http');
const fs = require('fs');

// Create server
const server = http.createServer((req, res) => {
    console.log(`request was made: ${req.url}`);
    if (req.url === '/home' || req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(`${__dirname}/index.html`).pipe(res);
    } else if (req.url === '/contact') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream(`${__dirname}/contact.html`).pipe(res);
    } else if (req.url === '/api/ninjas') {
        const ninjas = [{name: 'Ryu', age: 29}, {name: 'Yoshi', age: 32}];
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify(ninjas));
    } else {
        res.writeHead(404, {'Content-Type': 'text/html'});
        fs.createReadStream(`${__dirname}/404.html`).pipe(res);
    }
});
// Listen for server
server.listen(3000, 'localhost');
console.log('listening on port 3000');
```














