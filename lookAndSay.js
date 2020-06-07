const lookAndSay = function (data, len) {
  // Populate result list with the look and say numbers
  // data:  starting number set
  // len:   sequence length
  if (len < 1) {
    return [];
  } else {
    let currChar = data[0];
    let currCounter = 1;
    let layerResult = "";
    if (data.length > 1) {
      for (let i = 1; i < data.length; i++) {
        let nextCurr = data[i];
        if (nextCurr === currChar) {
          currCounter++;
        } else {
          layerResult += `${currCounter}${currChar}`;
          currChar = nextCurr;
          currCounter = 1;
        }
      }
    }
    layerResult += `${currCounter}${currChar}`;

    return [layerResult, ...lookAndSay(layerResult, len - 1)];
  }
};

console.log(lookAndSay("1", 5));

// result = ['11','21','1211','111221','312211']
// Test.assertEquals(lookAndSay('1',5).join(','),result.join(','))

// result = ['11121519', '311211151119', '13211231153119', '1113122112132115132119', '31131122211211131221151113122119']
// Test.assertEquals(lookAndSay('1259',5).join(','),result.join(','))