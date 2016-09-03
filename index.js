function LedgerLIFO(){
    this.accounts = {};
};

module.exports = LedgerLIFO;

LedgerLIFO.prototype.transfer = function(params){
    const f=params.f, t=params.t;
    const facct = this.accounts[f];
    var v = +params.v;
    var lot;
    if (f && t && (v>0)){
	const props = Object.assign({}, params);
	delete props.f;
	delete props.t;
	delete props.v;
	if (!(this.accounts[t]))
	    this.accounts[t] = [];
	while(v>0){
	    if (facct && facct.length){
		if (facct[0].v > v){
		    facct[0].v -= v;
		    lot = Object.assign({}, facct[0], {v:v}, props);
		} else {
		    lot = Object.assign({}, facct.shift(), props);
		}
	    } else {
		lot = Object.assign({}, {v:v}, props);
	    }
	    this.accounts[t].unshift(lot);
	    v -= lot.v;
	    if (typeof(this.onTransferLot)==='function'){
		this.onTransferLot(Object.assign({}, params), Object.assign({}, lot));
	    }
	}
    }
};

		    
	    


