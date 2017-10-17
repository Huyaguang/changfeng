'use strict';

var path = require('path');

exports.websiteHtml = function (req, res) {
    res.sendFile(path.resolve(__dirname, '../../client/html/main.client.view.html'));
};
