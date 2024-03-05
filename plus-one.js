var plusOne = function(digits) {
    const num = BigInt(digits.join(''));
    const incremented = num + 1n;
    const result = Array.from(String(incremented), Number);
    return result
};
