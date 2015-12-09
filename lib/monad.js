'use strict';

const flatten = require('./flatten');

const l = console.log;
function parameters(arg) {
	return flatten([].slice.call(arg));
	//return Object.keys(arg);
}
/*function Monad(f) {
	this.ret = ret;
	this.bind = bind;
	return function() {
		if(arguments.length === 0) return; 
		var args = [].slice.call(arguments);
		
	}
	function bind() {
		console.log(this)
		console.log(arguments)
		
		Object.keys(args).forEach(function(arg, i) {
			if(args[arg] instanceof Function) 
		});
	}
	function ret() {
		
	}
}
*/
/*
function Monad(f) {
	//return compose([]);
	let bindings = [];
	return function compose() {
		let args = parameters(arguments);
		
		if(args.length === 0) return bindings.reduce(
			(a,b) => (l(a,b,a(),b()), a(b()))
		);
		l(args);
		
		let x = args[0];
		let xs = args.slice(1);
		bindings.push(f.bind(null, x));
		return compose(xs);
	}
}*/
let add1 = x => x+1;
function Monad(f) {
	let value;
	this.bind = (x) => {
		value = x;		
	};
	this.ret = () => f(value);
}

let add1M = new Monad(add1);
let add2M = new Monad(add1);
add1M.bind(11)
add2M.bind(10)
l(add1M.ret());

/*let addM = Monad(add);
let multiM = Monad(multiply);
l(addM(666, 999));*/

function add(a,b) { l('add', a,b); return a+b; }
//function add(a) { l('add', a); return a; }
function multiply(a,b) { return a*b; }

module.exports = Monad;
