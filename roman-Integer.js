// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
// For example, 2 is written as II in Roman numeral, just two ones added together.
// 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.


var romanToInt = function(s) {
    const romanNumerals = {
       'I': 1,
       'V': 5,
       'X': 10,
       'L': 50,
       'C': 100,
       'D': 500,
       'M': 1000
   };

   let result = 0;

   for (let i = 0; i < s.length; i++) {
       if (i < s.length - 1 && romanNumerals[s[i]] < romanNumerals[s[i + 1]]) {
           result -= romanNumerals[s[i]];
       } else {
           result += romanNumerals[s[i]];
       }
   }

   return result;
};
