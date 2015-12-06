"use strict";

var System = require("systemjs");

System.config({
	baseURL: "..",
	meta: {
		"lib/compose.js": {
			format: "cjs"
		},
		"lib/assign.js": {
			format: "global"
		}
	}
});