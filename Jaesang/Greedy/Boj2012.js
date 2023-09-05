//Boj2012 등수매기기
const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [C, ...rest] = input;

C = Number(C);
const arr = rest.map((v) => +v);

arr.sort((a, b) => a - b);

let sum = 0;

for (let i = 0; i < arr.length; i++) {
  sum = sum + Math.abs(arr[i] - (i + 1));
}

console.log(sum);
