var express = require('express');
var app = module.exports.app = exports.app = express();

//you won't need 'connect-livereload' if you have livereload plugin for your browser
app.use(require('connect-livereload')());
app.use(express.static("dist/"))
app.listen(8081);
