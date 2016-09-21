exports = typeof window === 'undefined' ? global : window;

exports.regexAnswers = {
  containsNumber: function(str) {
    for (var i = 0; i < str.length; i++){

    if (str.indexOf(i) > 0) return true

    }

    return false
  },

  containsRepeatingLetter: function(str) {

  },

  endsWithVowel: function(str) {
    return ( str[str.length-1] === 'a' || str[str.length-1] === 'i' || str[str.length-1] === 'o' ||  str[str.length-1] === 'e' || str[str.length-1] === 'u' )
  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {

  },

  isUSD: function(str) {

  }
};
