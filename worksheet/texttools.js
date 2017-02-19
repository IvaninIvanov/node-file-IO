function fileToArray(path) {
  var fs = require('fs');
  var array = fs.readFileSync(path).toString().split("\n");
  if (array[array.length-1] == "" || array[array.length-1] == " ") {
    array.splice(-1);
  }
  return array;
}
module.exports.fileToArray = fileToArray;


function reverse(str) {
  return str.split('').reverse().join('');
}
module.exports.reverse = reverse;
