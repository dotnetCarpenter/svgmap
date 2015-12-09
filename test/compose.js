'use strict';

const test = require('tape');
const compose = require('../lib/compose');

test('compose', t => {
	t.plan(1);

	let actual = compose(add, double);
	let expected = 42;
	
	t.equal(actual(10.5,10.5), expected);
	
	function add(a,b) { return a+b; }
	function double(a) { return a*2; }
});
