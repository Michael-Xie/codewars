function lookAndSay(data,len){
    // Populate result list with the look and say numbers
    // data:  starting number set
    // len:   sequence length
    const result = [];
    if (len < 0) {
      return result;
    } else {
      let currChar = "";
      let currCounter = 0;
      for (const char of data) {
        if (!currChar) {
          currChar = char;
          currCounter++;
        }
        if (char === currChar) {
          currCounter++;
        } else {
          
      return lookAndSay(blah, len - 1)
    }
  
  }