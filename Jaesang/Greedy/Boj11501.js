// 백준 11501 주식
const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

[testCase, ...rest] = input;
testCase = +testCase;

const arr = [];

let ans = "";

let mode = "arrLength";
rest.forEach((v) => {
  if (mode === "arrLength") {
    mode = "arrElements";
  } else {
    const elements = v.split(" ").map((v) => {
      return +v;
    });

    arr.push(elements);
    mode = "arrLength";
  }
});

//ex  innerArr = [9, 3, 10, 9, 5, 6, 7, 8, 8]
const sol = (innerArr) => {
  let totalSurplus = 0;
  let maxValue = -1;

  maxValue = innerArr[innerArr.length - 1];

  for (let i = innerArr.length - 1; i >= 0; i--) {
    if (maxValue < innerArr[i]) {
      maxValue = innerArr[i];
    } else {
      totalSurplus = totalSurplus + (maxValue - innerArr[i]);
    }
  }

  return totalSurplus;
};

arr.forEach((v) => {
  ans = ans + sol(v) + "\n";
});

console.log(ans.trim());
