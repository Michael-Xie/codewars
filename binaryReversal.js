// Binary Reversal
// Have the function BinaryReversal(str) take the str parameter being passed, which will be a positive integer, take its binary representation (padded to the nearest N * 8 bits), reverse that string of bits, and then finally return the new reversed string in decimal form. For example: if str is "47" then the binary version of this integer is 101111 but we pad it to be 00101111. Your program should reverse this binary string which then becomes: 11110100 and then finally return the decimal version of this string, which is 244.
// Examples
// Input: "213"
// Output: 171
// Input: "4567"
// Output: 60296
const BinaryReversal = (str) => {
  let strInt = parseInt(str, 10);
  let quotient = strInt;
  let binaryInt = "";
  while (quotient > 0) {
    binaryInt = (quotient % 2) + binaryInt;

    quotient = Math.floor(quotient / 2);
  }
  // console.log('binaryInt', binaryInt);
  binaryInt = binaryInt.padStart(
    (Math.floor(binaryInt.length / 9) + 1) * 8,
    "0"
  );
  //  console.log('binaryInt', binaryInt);
  const reverseBinary = binaryInt.split("").reverse().join("");
  // console.log('reverseBinary', reverseBinary);
  let total = 0;
  for (let digit of reverseBinary) {
    total = 2 * total + parseInt(digit, 10);
  }
  // console.log ("total", total);
  // code goes here
  str = total;
  return str;
};

// keep this function call here
console.log(BinaryReversal(readline()));
