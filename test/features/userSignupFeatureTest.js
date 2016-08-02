process.env.NODE_ENV = 'test';

// var server = require('../../app');
var User = require('../../models/user');
var Browser = require('zombie');
var mongoose = require('mongoose');
var expect = require('chai').expect;
var browser = new Browser({ site: "http://localhost:3001"});


describe('User visits signup page', function() {

  describe('Should see the signup page', function() {
    it('Should see sign up', function(done) {
      browser.visit('/users/new', function() {
        expect(browser.html()).to.contain('Sign up to get help now!');
        done();
      });
    });
  });

  describe('successful sign up', function() {

    it('successful when all details entered correctly', function(done) {
      browser.fill('username', 'testusername')
      .fill('email', 'test@email.com')
      .fill('password', 'testpassword')
      .fill('passwordconfirmation', 'testpassword')
      .pressButton('Sign Up', function() {
        browser.assert.text('div.flash_msg', 'You are registered and can now log in');
        done();
      });
    });

  // });
  //
  // describe('unsuccessful sign up', function() {
  //
  //   beforeEach(function(done) {
  //     browser.fill('username', '')
  //     .fill('email', 'test@email.com')
  //     .fill('password', 'testpassword')
  //     .fill('passwordconfirmation', 'testpassword')
  //     .pressButton('Sign Up', done);
  //   });
  //
  //   it('error when username is missing', function() {
  //     browser.assert.text('div.flash_msg', 'Username is required');
  //   });
  //
  // });
  //
  // describe('unsuccessful sign up', function() {
  //
  //   beforeEach(function(done) {
  //     browser.fill('username', 'testusername')
  //     .fill('email', '')
  //     .fill('password', 'testpassword')
  //     .fill('passwordconfirmation', 'testpassword')
  //     .pressButton('Sign Up', done);
  //   });
  //
  //   it('error when email is missing', function() {
  //     browser.assert.text('div.flash_msg', 'Email is required Email is not valid');
  //   });
  //
  // });
  //
  // describe('unsuccessful sign up', function() {
  //
  //   beforeEach(function(done) {
  //     browser.fill('username', 'testusername')
  //     .fill('email', 'hello')
  //     .fill('password', 'testpassword')
  //     .fill('passwordconfirmation', 'testpassword')
  //     .pressButton('Sign Up', done);
  //   });
  //
  //   it('error when email is invalid', function() {
  //     browser.assert.text('div.flash_msg', 'Email is not valid');
  //   });
  //
  // });
  //
  // describe('unsuccessful sign up', function() {
  //
  //   beforeEach(function(done) {
  //     browser.fill('username', 'testusername')
  //     .fill('email', 'test@email.com')
  //     .fill('password', '')
  //     .fill('passwordconfirmation', '')
  //     .pressButton('Sign Up', done);
  //   });
  //
  //   it('error when password is missing', function() {
  //     browser.assert.text('div.flash_msg', 'Password is required');
  //   });
  //
  // });
  //
  // describe('unsuccessful sign up', function() {
  //
  //   beforeEach(function(done) {
  //     browser.fill('username', 'testusername')
  //     .fill('email', 'test@email.com')
  //     .fill('password', 'testpassword')
  //     .fill('passwordconfirmation', 'failure')
  //     .pressButton('Sign Up', done);
  //   });
  //
  //   it('error when passwords do not match', function() {
  //     browser.assert.text('div.flash_msg', 'Passwords do not match');
  //   });
  //
  });

});
