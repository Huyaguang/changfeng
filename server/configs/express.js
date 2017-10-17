'use strict';

var path = require('path');
var express = require('express');
var morgan = require('morgan');
var compress = require('compression');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var flash = require('connect-flash');

/**
 * express 包装模块
 */
module.exports = function () {
    var app, staticPathPublic, staticPathClient, staticPathResource;
    app = express();

    if (process.env.NODE_ENV === 'production') {
        app.use(compress());
        app.use(morgan('dev'));
    } else {
        app.use(morgan('dev'));
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    app.use(flash());

    // 设置路由
    require('../routes/index.server.route.js')(app);

    // 最后执行静态文件服务
    staticPathPublic = path.resolve(__dirname, '../../public');
    app.use('/public', express.static(staticPathPublic));
    staticPathClient = path.resolve(__dirname, '../../client');
    app.use('/client', express.static(staticPathClient));
    staticPathResource = path.resolve(__dirname, '../../resource');
    app.use('/resource', express.static(staticPathResource));

    return app;
};
