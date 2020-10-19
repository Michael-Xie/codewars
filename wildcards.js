// Wildcards
// Have the function Wildcards(str) read str which will contain two strings separated by a space. The first string will consist of the following sets of characters: +, *, $, and {N} which is optional. The plus (+) character represents a single alphabetic character, the ($) character represents a number between 1-9, and the asterisk (*) represents a sequence of the same character of length 3 unless it is followed by {N} which represents how many characters should appear in the sequence where N will be at least 1. Your goal is to determine if the second string exactly matches the pattern of the first string in the input.

// For example: if str is "++*{5} jtggggg" then the second string in this case does match the pattern, so your program should return the string true. If the second string does not match the pattern your program should return the string false.
// Examples
// Input: "+++++* abcdehhhhhh"
// Output: false
// Input: "$**+*{2} 9mmmrrrkbb"
// Output: true
function Wildcards(str) {
  const [pattern, sequence] = str.split(" ");
  let seqIndex = 0;
  let k = 0; // optional collector for * to properly increment seqIndex
  let i = 0; // index of pattern
  let l = 0; // optional collector with *{n} to shift i back to its intended position for seqIndex (assumes *{n} as one index)
  while (i < pattern.length) {
    seqIndex = parseInt(i, 10) + parseInt(k, 10);

    const subSequence = sequence.slice(seqIndex);
    let patternItem = pattern[i];
    let optional = "";

    // for special case *{n}, set optional, move i forward, keep track of the forwarding
    if (patternItem === "*" && pattern[i + 1] === "{") {
      optional = pattern.slice(i + 1, i + 4);

      i = i + 3;
      l += 3;
      // console.log("optional", optional)
    } else {
      optional = "";
    }
    const [newIndex, result] = hasPattern(patternItem, subSequence, optional);
    console.log(subSequence, result, i, seqIndex, k + newIndex, patternItem);
    if (!result) {
      console.log("result false");
      return false;
    }
    k += newIndex;
    i++;
  }

  seqIndex = i - 1 + k; // final seqIndex calc and remove extra i++ that triggers end of loop
  seqIndex -= l; // reomve optional collector due to *{n}

  // after going through the pattern and still not end of sequence then false
  if (seqIndex !== sequence.length - 1) {
    console.log("sequence not at end", seqIndex, sequence.length, i, k);
    return false;
  }
  // after all else then sequence matches pattern
  return true;
}

const hasPattern = (pattern, sequence, optional) => {
  const patternToRegex = {
    "+": `[A-Za-z]`,
    $: `[0-9]`,
    "*": `${sequence[0]}{3}`,
    [`*${optional}`]: `${sequence[0]}${optional}`,
  };
  let combinedPattern = `${pattern}${optional}`;
  // console.log(patternToRegex, combinedPattern);

  let regex = new RegExp(patternToRegex[combinedPattern] || "");
  let newIndex = 0; // no shift needed from i - pattern index

  // set k value that is the shift amount from i when encountering * or *{n} cases
  if (combinedPattern === "*") {
    newIndex = 2;
  } else if (combinedPattern === `*${optional}`) {
    let amount = parseInt(optional[1], 10);
    // console.log("inside optional")
    newIndex = amount - 1;
  }
  return [newIndex, regex.test(sequence)];
};
// keep this function call here
console.log(Wildcards(readline()));
