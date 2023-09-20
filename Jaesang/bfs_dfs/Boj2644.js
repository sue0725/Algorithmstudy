// 촌수 계산

const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

[total, targets, ...rest] = input;

let mainArr = Array(Number(total) + 1);

let visited = [...mainArr].fill(false);

for (let i = 0; i < mainArr.length; i++) {
  mainArr[i] = [];
}

[target1, target2] = targets.split(" ").map((v) => +v);

const subArrs = [];

for (let i = 1; i < rest.length; i++) {
  subArrs.push(rest[i].split(" ").map((v) => +v));
}

subArrs.forEach((pair) => {
  mainArr[pair[0]].push(pair[1]);
  mainArr[pair[1]].push(pair[0]);
});

//console.log(mainArr);

let minDist = -1;

const dfs = (t1, t2, dist) => {
  if (visited[t1]) {
    return;
  } else {
    visited[t1] = true;
    dist++;
    for (let i = 0; i < mainArr[t1].length; i++) {
      if (t1 == t2) {
        minDist = dist;
        console.log(dist);
        process.exit();
      }
      dfs(mainArr[t1][i], t2, dist);
    }
  }
};

dfs(target1, target2, minDist);
console.log(minDist);
