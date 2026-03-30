const fs = require("fs");

fs.readFile("data.txt", "utf8", (err, data) => {
  if (err) {
    console.error("Error reading file");
    return;
  }

  const lineCount = data.split("\n").length;
  fs.writeFile("result.txt", `Total lines: ${lineCount}`, (err) => {
    if (err) console.error("Error writing file");
    else console.log("Result written successfully");
  });
});
