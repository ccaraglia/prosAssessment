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
    var leng = str.length - 1
    return ( str[leng] === 'a' || str[leng] === 'e' || str[leng] === 'i' ||  str[leng] === 'o' || str[leng] === 'u' || str[leng] === 'A' || str[leng] === 'E' || str[leng] === 'I' ||  str[leng] === 'O' || str[leng] === 'U')
  },

  captureThreeNumbers: function(str) {

  },

  matchesPattern: function(str) {
    if(str.length === 12 && str[3] === '-' && str[7] ==='-' && !isNaN(str.slice(0,3)) && !isNaN(str.slice(4,7)) && !isNaN(str.slice(8,12))){
    return true
}else{
    return false
}

  },

  isUSD: function(str) {

  }
};
