var path = require("path");
var fs = require("fs");
var assert = require("assert");

var LESS_PATH = path.join(__dirname, 'Styles');
var GFX_PATH = path.join(__dirname, 'UI', 'gfx');
var FONTS_PATH = path.join(__dirname, 'UI', 'fonts');
var ICONS_PATH = path.join(__dirname, 'UI', 'icons');

function assertDir(dir) {
  var isDir = false;
  try {
    isDir = fs.statSync(dir).isDirectory();
  }
  catch (e) {
    assert(false, "Expected "+dir+ " to be a directory, but got an error while doing fs.statSync: "+e.stack)
  }
  assert(isDir, "Expected "+dir+ " to be a directory");
}

assertDir(LESS_PATH);
assertDir(GFX_PATH);
assertDir(FONTS_PATH);
assertDir(ICONS_PATH);

module.exports = {
  LESS_PATH: LESS_PATH,
  GFX_PATH: GFX_PATH,
  FONTS_PATH: FONTS_PATH,
  ICONS_PATH: ICONS_PATH
};