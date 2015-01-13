/*
 * GET home page.
 */
var Firebase = require('firebase');
var ejs = require('ejs');
var recaptcha = require('simple-recaptcha');


exports.index = function (req, res) {
    res.render('index', { title: 'Index' });
};

exports.postdata = function (req, res) {
    var message = req.body.form.text;

    var accountSid = 'AC439137c82934e09c6e8120d9ee085b2b';
    var authToken = "b145152a0db201fe0e624f0205f66734";
    var TwilioClient = require('node-twilio').Client;
    var Twiml = require('node-twilio').Twiml;
    var client = new TwilioClient(accountSid, authToken, 'phone4t.herokuapp.com');
    numbers = '+84978754416';
    //message = 'I love you';

    var phone = client.getPhoneNumber('+14172024103');
    phone.setup(function () {
        // We'll SMS each of the numbers in 'numbers', sending them the message
        phone.sendSms(numbers, message, null, function (sms) {
            sms.on('processed', function (reqParams, response) {
                console.log('Message processed, request params follow');
                console.log(reqParams);
                process.exit(0);
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.write(JSON.stringify({'success': 'abc', 'html': response}));
                res.end();
                return;
            });
        });
    });

};
