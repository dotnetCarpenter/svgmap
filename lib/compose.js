"use strict";
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

module.exports = compose;