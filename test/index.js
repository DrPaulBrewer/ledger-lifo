const should = require('should');
const assert = require('assert');
const LedgerLIFO = require("../index.js");

describe('LedgerLIFO',function(){
    it('should be a function ', function(){
	assert.strictEqual(typeof(LedgerLIFO), "function");
    });
    it('should initialize accounts as a blank object', function(){
	const L = new LedgerLIFO();
	L.should.have.properties(['accounts']);
	L.accounts.should.deepEqual({});
    });
    describe('.transfer', function(){
	describe('tracking scenario 1', function(){
	    var L;
	    L = new LedgerLIFO();
	    L.transfer({f:'G', t:'23', v:1500, c:'G'});
	    L.transfer({f:'M', t:'23', v:400,  c:'M'});
	    L.transfer({f:'17',t:'23', v:100});
	    it('should pick up the c setting in the first two transfers', function(){
		L.accounts['23'].should.deepEqual([{v:100},{v:400,c:'M'},{v:1500,c:'G'}]);
	    });
	});
	describe('tracking scenario 2', function(){
	    var L;
	    beforeEach(function(){
		L = new LedgerLIFO();
		L.transfer({f:'G', t:'23', v:1500, c:'G'});
		L.transfer({f:'M', t:'23', v:400,  c:'M'});
		L.transfer({f:'17',t:'23', v:100});
		L.transfer({f:'23',t:'39',v:700});
	    });
	    it('should use whole lots and split final lot to fill transfer according to LIFO of existing deposits', function(){
		L.accounts['39'].should.deepEqual([
		    {v:200,c:'G'},
		    {v:400,c:'M'},		    
		    {v:100}
		]);
	    });
	});
    });	    		
});
