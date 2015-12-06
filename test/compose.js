"use strict";

var test = require("tap").test;

function compose() {
	var functions = [].slice.call(arguments);
	return function() {
    var args = [].slice.call(arguments);
    functions.forEach(function(fn) {
      args = Array.isArray(args) ? args : [args];
      args = fn.apply(null, args);
		});
    return args;
	}
}

test('compose', function(t) {
  t.plan(1);

	var actual = compose(add, double);
	
  t.equal(actual(10.5,10.5), 42);
  
  t.end();
	
	function add(a,b) { return a+b; }
	function double(a) { return a*2; }
});
