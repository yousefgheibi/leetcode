var removeDuplicates = function(nums) {
    const uniqeSet = new Set(nums);
    const uniqeArray = Array.from(uniqeSet);
    return uniqeArray;
};

const nums = [1, 1, 2, 2, 2, 3, 4, 4, 5];
const uniqueCount = removeDuplicates(nums);

console.log(uniqueCount)