var climbStairs = function(n, memo = {}) {
  if (n in memo) {
    return memo[n];
  }

  if (n === 1) {
    return 1;
  } else if (n === 2) {
    return 2;
  }

  const result = climbStairs(n - 1, memo) + climbStairs(n - 2, memo);

  memo[n] = result;

  return result;
};
