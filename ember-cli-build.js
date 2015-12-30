/*jshint node:true*/
/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');
var mergeTrees = require('broccoli-merge-trees');
var stew = require('broccoli-stew');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
  });

  var appTree = app.toTree();
  var env = EmberApp.env();

  if (env === 'production') {
    appTree = stew.rm(appTree, 'robots.txt');
    appTree = stew.rename(appTree, 'robots-production.txt', 'robots.txt');
  } else {
    appTree = stew.rm(appTree, 'robots-production.txt');
  }

  return appTree;
};
