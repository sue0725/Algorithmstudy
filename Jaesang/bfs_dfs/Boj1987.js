// 알파벳
const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

let [size, ...values] = input;

let [row, col] = size.split(" ").map((v) => +v);

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
// 상, 하,좌,우

const arr = values.map((row) => row.split(""));

let maxValue = -1;

const dfs = (pointX, pointY, visit, cnt) => {
  let adj = 0;

  visit[arr[pointX][pointY]] = true;

  for (let i = 0; i < 4; i++) {
    let X = pointX + dx[i];
    let Y = pointY + dy[i];

    if (X >= 0 && Y >= 0 && X < row && Y < col && !visit[arr[X][Y]]) {
      adj++;
      dfs(X, Y, visit, cnt + 1);
      visit[arr[X][Y]] = undefined;
    }
  }

  if (!adj && maxValue < cnt) {
    maxValue = cnt;
    return;
  }
};

const sol = () => {
  dfs(0, 0, {}, 1);
  console.log(maxValue);
};

sol();
