// 백준 2468 안전영역

const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

[N, ...rest] = input;

N = +N;

const arr = rest.map((line) => line.split(" ").map((v) => +v));

const dx = [-1, 1, 0, 0];
const dy = [0, 0, -1, 1];
// 상, 하,좌,우

function raining(h, field, n) {
  // h는 비의 양, field는 array, n은 N

  const coloredField = Array.from(Array(n), () => new Array(n).fill(false));

  //비의 양 보다 높이가 적은 point는 침수 처리함
  field.forEach((line, i) => {
    line.forEach((point, j) => {
      if (point > h) {
        coloredField[i][j] = true;
      }
    });
  });

  return coloredField;
}

function sol(h) {
  let sections = 0;
  // 방문하지 않은 안전지역일 경우 sections++;

  const coloredField = raining(h, arr, N);
  const visited = Array.from(Array(N), () => new Array(N).fill(false));

  function bfs(x, y) {
    if (!coloredField[x][y] || visited[x][y]) return;

    sections++;

    const Q = [[x, y]];
    visited[x][y] = true;

    while (Q.length) {
      let point = Q.shift();

      for (let i = 0; i < 4; i++) {
        let X = point[0] + dx[i];
        let Y = point[1] + dy[i];

        if (
          X >= 0 &&
          Y >= 0 &&
          X < N &&
          Y < N &&
          !visited[X][Y] &&
          coloredField[X][Y]
        ) {
          visited[X][Y] = true;
          Q.push([X, Y]);
        }
      }
    }
  }

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N; j++) {
      bfs(i, j);
    }
  }
  // 모든 정점에 대해서 bfs를 시행해줌

  return sections;
}

let max = -1;

for (let i = 0; i < 101; i++) {
  let value = sol(i);

  if (value > max) {
    max = value;
  }
}

console.log(max);
