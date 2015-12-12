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
let sub1 = x => x-1;
function Monad(f) {
	return bind(function(x) {
		return f(x);
	});
}
function bind(M) {
	return function(x) {
		return function() {
			return M(x);
		}
	}
}
function ret(M) {
	l("ret", M);
	if(M instanceof Function)
		return ret(M())
	return M;
}
/*Monad.prototype.bind = function(x) {
	this.value = x;
	return this;
}
Monad.prototype.ret = function() {
	return () => this.f(this.value);
}*/

let add1M = Monad(add1);
let sub2M = Monad(sub1);
let c = Monad(Monad(add1M));
l( ret(c(41)) );
/* Left identity */		l( ret(Monad(add1)(41)) === add1(41) );
/* Right identity */	l(  );

//let add1MB = bind(add1M);

//let sub2MB = bind(sub2M);

/*let addM = Monad(add);
let multiM = Monad(multiply);
l(addM(666, 999));*/

function add(a,b) { l('add', a,b); return a+b; }
//function add(a) { l('add', a); return a; }
function multiply(a,b) { return a*b; }

module.exports = Monad;
