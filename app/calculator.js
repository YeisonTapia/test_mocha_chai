/* this function only add  'tested' to end of string */
exports.addTested = function(value) {
  var result = value + " tested";
  return result;
};

/* This function add all element of a array */
exports.sumElements = function (arr) {
  return arr.length * (arr.length + 1)/2;
}
