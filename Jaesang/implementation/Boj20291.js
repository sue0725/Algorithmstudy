// Boj20291 파일 합치기
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [fileNum, ...files] = input;

const dic = {};

files.forEach((fileName) => {
  innerLoop: for (let i = 0; i < fileName.length; i++) {
    let extention = "";

    if (fileName[i] === ".") {
      extention = fileName.slice(i + 1);

      if (!dic[extention]) {
        dic[extention] = 1;
      } else {
        dic[extention]++;
      }
    }
  }
});

files = Object.entries(dic).sort((a, b) => (a[0] < b[0] ? -1 : 1));

let ans = "";

files.forEach((file) => {
  ans = ans + file[0] + " " + file[1] + "\n";
});

console.log(ans.trimEnd());
