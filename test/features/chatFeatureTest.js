process.env.NODE_ENV = 'test';
var app = require('../../app').listen(3001);
var User = require('../../models/user');
var Browser = require('zombie');
var mongoose = require('mongoose');
var expect = require('chai').expect;

var browser, browser2;


describe('Chat features', function() {

  before(function(done) {
    browser = new Browser({ site: "http://localhost:3001"});
    browser.visit('/', function() {
    browser.visit('/users/new', function() {
      browser.fill('username', 'testusername');
      browser.fill('email', 'test@email.com');
      browser.fill('password', 'testpassword');
      browser.fill('passwordconfirmation', 'testpassword');
      browser.pressButton('Sign Up', function() {
        browser.visit('/sessions/new', function() {
          browser.fill('username', 'testusername');
          browser.fill('password', 'testpassword');
          browser.pressButton('Sign In', function(){
            done();
          });
          });
        });
      });
    });
  });
  //
  // afterEach(function(done) {
  //   mongoose.connection.db.dropDatabase(done);
  // });

  describe('can click ask for help',function() {
    //
    it('has an ask for help button', function(){
      expect(browser.html()).to.contain('<button id="help-button">Get help now</button>');
    });
    //
    it('can click ask for help and go to create room page', function(done){
      browser.pressButton('Get help now').then(function() {
        expect(browser.html()).to.contain('I would like help with...');
      }).then(done, done);
    });
  });

  describe('argh', function() {

    before(function(done){
      browser.fill('description', 'Ruby help');
      browser.pressButton('Submit', done);
    });


    it('can fill in issue and go to wait page', function(){
      browser.assert.text('#loading-image-text', 'Waiting for a Code Coach to respond to your request...');
    });

    it('second user can see the chat room', function(done) {
          var browser2 = new Browser({ site: "http://localhost:3001"});
          browser2.visit('/', function() {
            console.log(browser2.html());
            browser2.assert.text('#loading-image-text', 'Ruby help');
            done();
          });
    });
  });

});
