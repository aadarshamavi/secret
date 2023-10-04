const fs = require("fs");
const googleIt = require("google-it");
const words = ["nepal", "jhapa", "word is world", "Youtube total download"];

words.forEach((query, index) => {
  googleIt({ query: query }).then((results) => {
    let fileContent = JSON.stringify(results);

    fs.appendFileSync(__dirname + "/res/res" + index + ".json", fileContent);
  });
});
