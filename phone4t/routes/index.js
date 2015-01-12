/*
 * GET home page.
 */
var Firebase = require('firebase');
var ejs = require('ejs');
var fs = require('fs');
var recaptcha = require('simple-recaptcha');
exports.index = function (req, res) {
    res.render('index', { title: 'Index' });
};

exports.postdata = function (req, res) {
};
