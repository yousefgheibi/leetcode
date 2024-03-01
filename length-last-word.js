// Given a string s consisting of words and spaces, 
// return the length of the last word in the string.

var lengthOfLastWord = function(s) {
  const words = s.trim().split(' ');
  
  if(words.length === 0){
       return 0;
  }

  return words[words.length -1].length;
};
