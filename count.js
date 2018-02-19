const counter = function(arr) {
  return 'There are ' + arr.length + ' elements in this array.';
};

console.log(counter(['xavier', 'ryu', 'ken']));

module.exports = counter;