// 단지번호 붙이기
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
const N = input.shift();
const arr = input.map((item) => item.split("").map(Number));

function bfs(x, y) {
  const queue = [[x, y]];
  const visited = {};
  visited[[x, y]] = true;
  visitedCoords[[x, y]] = true;
  let dx = [0, 0, 1, -1];
  let dy = [-1, 1, 0, 0];
  let cnt = 1;

  while (queue.length) {
    let X = queue.shift();
    for (let j = 0; j < 4; j++) {
      let nx = X[0] + dx[j];
      let ny = X[1] + dy[j];
      if (
        nx >= 0 &&
        ny >= 0 &&
        nx < arr.length &&
        ny < arr.length &&
        // 좌표의 유효성 확인
        arr[nx][ny] === 1 &&
        // 1일 경우에만 진행되므로 1인 경우만 좌표 출력
        !visited[[nx, ny]]
        // visited 확인
      ) {
        visited[[nx, ny]] = true;
        visitedCoords[[nx, ny]] = true;
        cnt++;
        queue.push([nx, ny]);
      }
    }
  }
  return cnt;
}

// 정답 출력을 위해 좌표를 순회할때, 중복된 좌표를 순회하지 않기 위해서 추가로 삽입한 객체
// 여기서, ture로 지정된 좌표는 더이상 순회하지 않는다.
const visitedCoords = {};
const answer = [];
for (let i = 0; i < N; i++) {
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === 1 && !visitedCoords[[i, j]]) answer.push(bfs(i, j));
  }
}

console.log(answer.length);
answer.sort((a, b) => a - b);
answer.forEach((item) => console.log(item));
