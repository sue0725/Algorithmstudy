// Boj1913 , 달팽이
const fs = require("fs");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

[N, target] = input.map((v) => +v);
//예, N = 7 , target = 35

const arr = Array.from(Array(N), () => new Array(N));

// 위는 입력값을 받는 코드
// arr는 7x7의 이차원 배열

let startPoint = Math.floor(N / 2);
// 첫 기준점은 언제나 사각형의 중앙이므로 (N,N)이다.
let startStep = 0;
// 작업하는 한 변의 길이, 처음은 0으로 해둠

let num = 1; // 처음 (N,N)에 채워질 값

arr[startPoint][startPoint] = num++; // 채워짐
startStep = startStep + 2; // 다음 작업할 한 변의 길이

function sol(m, step) {
  for (let i = m; i < m + step; i++) {
    arr[m - 1][i] = num++;
  } //1

  for (let i = m; i < m + step; i++) {
    arr[i][m + step - 1] = num++;
  } //2

  for (let i = m + step - 2; i >= m - 1; i--) {
    arr[m + step - 1][i] = num++;
  } //3

  for (let i = m + step - 2; i >= m - 1; i--) {
    arr[i][m - 1] = num++;
  } //4
}

while (startPoint > 0) {
  sol(startPoint, startStep);
  startStep = startStep + 2;
  startPoint--;
} // 기준점은 작업할 수록 (0,0)에 가까워짐

let res = "";

let coord = "";

for (let i = 0; i < N; i++) {
  let line = "";
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === target) {
      coord = i + 1 + " " + (j + 1);
    }

    line = line + arr[i][j] + " ";
  }
  res = res + line.trim() + "\n";
} // 좌표를 찾는 작업

console.log(res.trimEnd());
console.log(coord);
