process.env.NODE_ENV = 'test';
var app = require('../../app').listen(3001);
// var User = require('../../models/user');
// var Browser = require('zombie');
// var mongoose = require('mongoose');
// var expect = require('chai').expect;
// var browser = new Browser({ site: "http://localhost:3001"});
//
// before(function(done) {
//   this.timeout(10000);
//   browser.visit('/users/new', function() {
//     browser.fill('username', 'testusername');
//     browser.fill('email', 'test@email.com');
//     browser.fill('password', 'testpassword');
//     browser.fill('passwordconfirmation', 'testpassword');
//     browser.pressButton('Sign Up', function() {
//       browser.visit('/sessions/new', function() {
//         browser.fill('username', 'testusername');
//         browser.fill('password', 'testpassword');
//         browser.pressButton('Sign In', function(){
//           done();
//         });
//       });
//     });
//   });
// });
//
// after(function(done) {
//   mongoose.connection.db.dropDatabase();
//   done();
// });
//
// module.exports = browser;
