const https = require("https");
const fs = require("fs");
const stream = fs.createWriteStream("output.txt");
const crypto = require("crypto");

https.get("https://coderbyte.com/api/challenges/json/age-counting", (resp) => {
  let data = "";
  let finalHash = null;

  // Read data
  resp.on("data", (chunk) => {
    data += chunk;
  });
  resp.on("end", () => {
    // Get data and parse into JSON format
    const dataObj = JSON.parse(data);
    // const dataObj = { "data": "key=IAfpK, age=32, key=WNVdi, age=64, key=jp9zt, age=40, key=9snd2, age=32" }
    // console.log(dataObj);
    // Turn value of data to an array
    const dataStrArr = dataObj.data.split(",");

    // Read two values at a time where first value is key and second is age
    let i = 1;
    let key = dataStrArr[i - 1].trim();
    let age = dataStrArr[i].trim();
    let dataToFile = "";
    while (dataStrArr && i < dataStrArr.length) {
      let ageProcessed = parseInt(age.split("=")[1].trim());
      let keyProcessed = key.split("=")[1].trim();
      // console.log(ageProcessed, keyProcessed);
      // Write to file keys where age is 32 separated by new line
      if (ageProcessed === 32) {
        dataToFile += `${keyProcessed}\n`;
      }
      // Prepare for next iteration
      i += 2;
      if (i < dataStrArr.length) {
        key = dataStrArr[i - 1].trim();
        age = dataStrArr[i].trim();
      }
    }
    // console.log(dataToFile);
    stream.write(dataToFile);
    stream.end();
  });
  // // parse json data here...
  // const rStream = fs.createReadStream("output.txt");
  // const hash = crypto.createHash('sha1');
  // // hash.setEncoding('hex');
  // rStream.on('data', (data) => {
  //   // console.log("read data", data);
  //   hash.update(data);
  // })
  // rStream.on('end', () => {
  //   // hash.end();
  //   finalHash = hash.digest('hex');
  //   return finalHash;
  //   // console.log("hash",finalHash);
  // })
  // Read file and create hash
  let sum = crypto.createHash("sha1");

  fs.readFile("output.txt", "utf-8", (err, data) => {
    if (err) throw err;
    // console.log('data', data);
    sum.update(data);
    // console.log("checksum", sum);
    const hex = sum.digest("hex");
    finalHash = hex;
    console.log(finalHash);
    return finalHash;
  });
  // console.log(fileBuffer);
  // sum.update(fileBuffer);
  // const hex = sum.digest('hex');
  // finalHash = hex;
  // console.log(finalHash);
  // console.log(resp);
  // return finalHash;
});
