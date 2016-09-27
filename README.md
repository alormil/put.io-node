[![Build Status](https://travis-ci.org/alormil/put.io-node.svg?branch=master)](https://travis-ci.org/alormil/put.io-node)
[![Coverage Status](https://coveralls.io/repos/github/alormil/put.io-node/badge.svg?branch=master)](https://coveralls.io/github/alormil/put.io-node?branch=master)
[![bitHound Overall Score](https://www.bithound.io/github/alormil/put.io-node/badges/score.svg)](https://www.bithound.io/github/alormil/put.io-node)
[![bitHound Dependencies](https://www.bithound.io/github/alormil/put.io-node/badges/dependencies.svg)](https://www.bithound.io/github/alormil/put.io-node/master/dependencies/npm)
[![bitHound Code](https://www.bithound.io/github/alormil/put.io-node/badges/code.svg)](https://www.bithound.io/github/alormil/put.io-node)
# put.io-node
A Node.js wrapper for put.io APIv2 https://api.put.io/v2/docs/

It supports all the methods & functions that put.io's API provides: Files, Transfers, Zips, Friends, Account, Events.

Take a look at [put.io's API documentation](https://api.put.io/v2/docs/) to get started.

<img src="https://put.io/statics/img/logo.svg" alt="" height="25">

## Install

Via NPM
``` bash
$ npm install put.io-node
```

Via GIT
``` bash
$ git clone git@github.com:alormil/put.io-node.git
```
## Usage

``` javascript
const Client = require('put.io-node').Client;

// Initialize client with your own app token
const apiClient = new Client('XYZTOKEN');

// Account
// Retrieve Account Info
apiClient.account.getAccountInfo().then((result) => console.log(JSON.parse(result))); 

// Friends
// Send Friend Request
apiClient.friends.sendFriendRequest('Bob').then((result) => console.log(JSON.parse(result)));

// Zips
// Create Zip from File list
apiClient.zips.createZip([123,556,989]).then((result) => console.log(JSON.parse(result)));

// Transfers
// Get List of Transfers
apiClient.transfers.getTransfersList().then((result) => console.log(JSON.parse(result)));

// Files
// Create Folder
apiClient.files.createFolder('Folder123', 0).then((result) => console.log(JSON.parse(result)));

// Events
// Get List of Events
apiClient.events.getEventsList().then((result) => console.log(JSON.parse(result)));
```
All functions return string promises, make sure you convert these strings to JSON objects for future manipulation. 
I will add examples for each function call in the Wiki, but feel free to have a look at the source code in order to see which functions are available.


## Tests

``` bash
$ npm test
```

## Security

If you discover any security related issues, please email me at: [alormil@gmail.com](mailto:alormil@gmail.com).

## Contributing

Pull requests are welcome, take care of maintaining the existing coding style. Add unit tests for any new or changed functionality.
Lint and test your code using the existing standards.

## License

MIT License

Copyright (c) 2016 Alain Lormil

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
