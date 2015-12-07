"use strict";

var test = require("tape");
var filter = require("../lib/filter");

test('array filter', function(t) {
  t.plan(1);
	let list = [0,1,2,3,4,5,6,7,8,9];
	let actual = filter(list, n => n > 6);
	let expected = [7,8,9];
  t.deepEquals(actual, expected);
});

test('typedArray filter', function(t) {
  t.plan(1);
	//uint8 = {0,1,..,255}
	let list = Uint8Array.from([0,1,2,3,4,5,6,7,8,9]);
	let actual = filter(list, n => n > 6);
	let expected = [7,8,9];
  t.deepEquals(actual, expected);
});
