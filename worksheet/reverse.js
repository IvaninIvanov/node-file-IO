/*
 * Loads a file into memory,
 * reverses it and returns the reversed version.
 *
 * Filename is specified in command-line arguments
 */
if (process.argv.length<3) {
  console.log("Syntax: node reverse <file to reverse> <file to reverse output");
  console.log("e.g. node reverse input.txt output.txt");
  process.exit();
}

var fs = require('fs');
var infile = process.argv[2];
var outfile = process.argv[3];
var toReverse = fs.readFileSync(infile, 'utf8');
var tt = require('../worksheet/texttools.js');
var doneReverse = tt.reverse(toReverse);
fs.writeFile(outfile, doneReverse);
