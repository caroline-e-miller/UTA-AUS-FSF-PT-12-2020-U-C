function Algo() { }

Algo.prototype.reverse = function (str) {
  // TODO: Your code here
};

Algo.prototype.isPalindrome = function (str) {
  // TODO: Your code here
};

Algo.prototype.capitalize = function (str) {
  // TODO: Your code here 
  const word = str.split(' ');
  for (var i = 0; i < word.length, i++) {
    let caps = word[0].toUpperCase();
  }
};

module.exports = Algo;
