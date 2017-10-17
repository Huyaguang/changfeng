'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('./server/configs/express');

var app = express();
app.set('port', 6868);
app.listen(app.get('port'));

module.exports = app;
console.log('Server is running in http://localhost:' + app.get('port'));
