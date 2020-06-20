// Have the function FibonacciChecker(num) return the string yes if the number given is part of the Fibonacci sequence. This sequence is defined by: Fn = Fn-1 + Fn-2, which means to find Fn you add the previous two numbers up. The first two numbers are 0 and 1, then comes 1, 2, 3, 5 etc. If num is not in the Fibonacci sequence, return the string no.

// Use the Parameter Testing feature in the box below to test your code with different arguments.

// To test if a number is a fib number, the square of (5*N^2+-4) must be a perfect square (aka whole number square roots)
const isPerfectSquare = (n) => {
  let s = Math.sqrt(n);
  return s === parseInt(s);
};
const FibonacciChecker = (num) => {
  if (
    isPerfectSquare(5 * num * num - 4) ||
    isPerfectSquare(5 * num * num + 4)
  ) {
    return "yes";
  }
  return "no";
};

// keep this function call here
console.log(FibonacciChecker(readline()));
