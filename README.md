ledger-LIFO
============
Trivial Last In First Out (LIFO) tracker with transfer function.

## Usage 

     const LedgerLIFO = require('ledger-lifo');
     var myLIFO = new LedgerLIFO();
     var acct1 = '12345'; //acct identifiers can be any string allowed as an object property name
     var acct2 = '67890';
     var acct3 = '71337';
     // all properties except f (from acct) and t (to acct) are tracked
     // it is up to the developer to choose properties to track, give them meaning, and decide when to override a property
     myLIFO.transfer({f:acct1, t:acct2, v:100, unitcost:3});
     myLIFO.transfer({f:acct1, t:acct2, v:300, unitcost:5});
     // myLIFO.accounts[acct2] === [{v:300, unitcost:5}, {v:100, unitcost:3}]
     myLIFO.transfer({f:acct2, t:acct3, v:350});
     // myLIFO.accounts[acct2] === [{v:50, unitcost:3}]
     // myLIFO.accounts[acct3] === [{v:50, unitcost:3}, {v:300, unitcost:5}]

## Copyright and License

The MIT License (MIT)
Copyright (c) 2016 Paul Brewer, Economic & Financial Technology Consulting LLC <drpaulbrewer@eaftc.com>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
