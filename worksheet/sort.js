if (process.argv.length<3) {
  console.log("Syntax: node sort <file to sort> <file to sort output");
  console.log("e.g. node sort input.txt output.txt");
  process.exit();
}

var fs = require('fs');
var tt = require('texttools')
var infile = process.argv[2];
var outfile = process.argv[3];
var toSort = tt.fileToArray(infile);
var doneSort = toSort.sort();
fs.writeFile(outfile, doneSort);
