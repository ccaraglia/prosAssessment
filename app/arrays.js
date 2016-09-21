exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
    return arr.indexOf(item)
  },

  sum: function(arr) {
    return arr.reduce(function(a, b){return a+b})
  },

  remove: function(arr, item) {

  },

  removeWithoutCopy: function(arr, item) {

  },

  append: function(arr, item) {
    return arr.concat(item)
  },

  truncate: function(arr) {
    return arr.slice(0, arr.length - 1)
  },

  prepend: function(arr, item) {
    var arr1 = [item]
    return arr1.concat(arr)
  },

  curtail: function(arr) {
    return arr.slice(1, arr.length)
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2)
  },

  insert: function(arr, item, index) {
    var item = [item]
    var inter = arr.slice(0,index).concat(item)
    return (inter.concat(arr.slice(index, arr.length)))
  },

  count: function(arr, item) {
    var counter = 0
    for (var i = 0; i < arr.length; i++){
        if (arr[i] === item){
            counter += 1
        }

    }
    return counter
  },

  duplicates: function(arr) {

  },

  square: function(arr) {
    return arr.map(a => a*a)
  },

  findAllOccurrences: function(arr, target) {

  }
};
