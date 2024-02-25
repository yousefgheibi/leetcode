// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

var isValid = function (s) {
    const stack = [];
    const bracketPairs = {
        '(': ')',
        '{': '}',
        '[': ']'
    };

    for (let char of s) {
        if (char in bracketPairs) {
            stack.push(char);
        }
        else {
            if (stack.length === 0 || bracketPairs[stack.pop()] !== char) {
                return false
            }
        }
    }

    return stack.length === 0;

};