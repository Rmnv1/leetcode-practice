// 268. Missing number
// Дан массив nums, содержащий различные числа в диапазоне [0, n], вернуть единственное число в диапазоне, отсутствующее в массиве.

let missingNumber = function (nums) {
  const n = nums.length;
  const sum = nums.reduce((a, b) => a + b, 0);
  return (n * (n + 1)) / 2 - sum;
};

// Для вычисления первых n натуральных чисел используется формула n * (n + 1) / 2
// Например:
// 1 + 2 + 3 + 4 + 5 = 15

// Можно посчитать как:
// 5 * (5 + 1) / 2 = 15
