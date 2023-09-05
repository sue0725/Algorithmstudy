// Boj 1946 시입사원
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

const T = Number(input[0]);
let startIdx = 1;

let ans = "";

for (let i = 0; i < T; i++) {
  const play = [];
  let numOfPeople = Number(input[startIdx]);
  startIdx++;

  for (let j = startIdx; j < numOfPeople + startIdx; j++) {
    const ranks = input[j].split(" ").map((v) => +v);
    // ranks.push((ranks[0] + ranks[1]) / 2);
    play.push(ranks);
  }

  ans = ans + sol(play) + "\n";

  startIdx = numOfPeople + startIdx;
}

console.log(ans.trim());

function sol(innerArr) {
  innerArr.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  let pass = innerArr.length;
  let cur;

  outerLoop: for (let i = innerArr.length - 1; i >= 0; i--) {
    cur = innerArr[i];

    innerLoop: for (let j = 0; j < innerArr.length; j++) {
      if (cur[0] > innerArr[j][0] && cur[1] > innerArr[j][1]) {
        pass--;
        break innerLoop;
      } else if (cur[0] + cur[1] == innerArr[j][0] + innerArr[j][1]) {
        break innerLoop;
      }
    }
  }
  return pass;
}
