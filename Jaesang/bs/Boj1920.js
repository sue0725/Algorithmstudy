const { time } = require("console");
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let firstArr = input[1].split(" ").map((v) => +v);
let secondArr = input[3].split(" ").map((v) => +v);

firstArr.sort((a, b) => a - b);

const bs = (arr, a, b, k) => {
  if (a > b) {
    return -1;
  }

  let m = parseInt((a + b) / 2);

  if (arr[m] == k) {
    return m;
  } else if (arr[m] > k) {
    return bs(arr, a, m - 1, k);
  } else if (arr[m] < k) {
    return bs(arr, m + 1, b, k);
  }
};

let answer = "";

secondArr.forEach((v) => {
  if (
    bs(firstArr, 0, firstArr.length - 1, v) == -1 ||
    bs(firstArr, 0, firstArr.length - 1, v) == undefined
  ) {
    answer = answer + 0 + "\n";
  } else {
    answer = answer + 1 + "\n";
  }
});

console.log(answer);
