// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string ""

var longestCommonPrefix = function (strs) {
    if (!strs || strs.length === 0) {
        return "";
    }
    else {
    const referenceString = strs[0];

    let commonPrefix = "";
    for (let i = 0; i < referenceString.length; i++) {
        if (strs.every(str => str[i] === referenceString[i])) {
            commonPrefix += referenceString[i];
        } else {
            break;
        }
    }

       return commonPrefix;
    }
};

console.log(longestCommonPrefix(["flower","flower","flower","flower"]));