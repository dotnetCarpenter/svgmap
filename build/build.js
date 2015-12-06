"use strict";

var Builder = require("systemjs-builder");

// optional constructor options
// sets the baseURL and loads the configuration file
var builder = new Builder(".", "./build/systemjs.config.js");

/*var args = process.argv.slice(2);

if(args[0] === "cjs") {
  builder
    .bundle("./lib/compose.js", "./build/bundle.js")
    .then(function() {
      console.log("Build complete");
    })
    .catch(function(err) {
      console.error("Build error");
      console.error(err);
    });
} else {*/
  builder
    .buildStatic("./lib/*.js", "./build/browser.js", { minify: false, sourceMaps: true, runtime: false })
    .then(function() {
      console.log("Build complete");
    })
    .catch(function(err) {
      console.error("Build error");
      console.error(err);
    });
//}