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
	return function(x) {
		return f(x);
	}
}
function bind(M) {
	return function() {
		let args = parameters(arguments)
		return M.bind(null, args);
	}
}
function ret(M) {
	return M();
}
/*Monad.prototype.bind = function(x) {
	this.value = x;
	return this;
}
Monad.prototype.ret = function() {
	return () => this.f(this.value);
}*/

let add1M = Monad(add1);
let add1MB = bind(add1M);
l( ret(add1MB(41)) );

let add2M = Monad(add1);
let add2MB = bind(add2M);
l( ret(add2MB(0)) );

/*let addM = Monad(add);
let multiM = Monad(multiply);
l(addM(666, 999));*/

function add(a,b) { l('add', a,b); return a+b; }
//function add(a) { l('add', a); return a; }
function multiply(a,b) { return a*b; }

module.exports = Monad;
