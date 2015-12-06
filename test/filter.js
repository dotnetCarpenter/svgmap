"use strict";

var test = require("tape");
var filter = require("../lib/filter");

test('basic filter', function(t) {
  t.plan(1);
	var list = [0,1,2,3,4,5,6,7,8,9];
	var actual = filter(list, n => n > 6);
	var expected = [7,8,9];
  t.deepEquals(actual, expected);
});
