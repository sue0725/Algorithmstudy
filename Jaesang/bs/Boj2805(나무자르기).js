const fs = require("fs"); //Boj2805
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

[numOfTree, key] = input[0].split(" ").map((v) => +v);

let arr = input[1]
  .split(" ")
  .map((v) => +v)
  .sort((a, b) => a - b);
//[10 15 17 20]

let low = 0;
// low가 0이 되는 경우: 가져가야 할 나뭇가지의 크기가 배열내 요소의 합인 경우
let high = arr[arr.length - 1]; //20

const bs = (low, high, key) => {
  let middle = parseInt((low + high) / 2);

  let lengthToTake = 0;

  if (low >= high) {
    return low - 1;
  }

  arr.forEach((v) => {
    if (v > middle) {
      lengthToTake = lengthToTake + v - middle;
    }
  });

  if (lengthToTake < key) {
    return bs(low, middle, key);
  } else {
    return bs(middle + 1, high, key);
  }
};

let ans = bs(low, high, key);
console.log(ans);
