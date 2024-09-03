// 2623. Memoize
// Для заданной функции fn вернуть  мемоизированную  версию этой функции.

// Мемоизированная  функция — это функция, которая никогда не будет вызвана дважды с теми же входными данными. Вместо этого она вернет кэшированное значение.

// Можно предположить, что существует  3  возможные входные функции:  sum, fib,  и  factorial.

// sum принимает два целых числа  a и b и возвращает a + b. Предположим, что если значение уже кэшировано для аргументов (b, a), где a != b, его нельзя использовать для аргументов (a, b). Например, если аргументы (3, 2) и (2, 3), следует выполнить два отдельных вызова.
// fib принимает одно целое число  n и возвращает  1 if n <= 1 или otherwise. fib(n - 1) + fib(n - 2)
// factorial принимает одно целое число  nи возвращает 1 if  n <= 1 или  factorial(n - 1) * n otherwise.

/**
 * @param {Function} fn
 * @return {Function}
 */

var memoize = function (fn) {
  const cache = new Map();

  return function (...args) {
    const argList = JSON.stringify(args);

    if (cache.has(argList)) {
      return cache.get(argList);
    } else {
      const result = fn(...args);
      cache.set(argList, result);
      return result;
    }
  };
};

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5m
 * console.log(callCount) // 1
 */
