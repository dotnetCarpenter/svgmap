"use strict";

var test = require("tape");
var compose = require("../lib/compose");

test('compose', function(t) {
	t.plan(1);

	var actual = compose(add, double);
	
	t.equal(actual(10.5,10.5), 42);
	
	function add(a,b) { return a+b; }
	function double(a) { return a*2; }
});
