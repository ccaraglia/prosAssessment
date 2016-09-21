exports = typeof window === 'undefined' ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {

  },

  wordWrap: function(str, cols) {

  },

  reverseString: function(str) {
    var newStr = ''
    for (var i = 0; i < str.length; i++){
        newStr += str[str.length-1-i]
    }
    return newStr
  }
};
