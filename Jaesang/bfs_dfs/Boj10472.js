// 십자 뒤집기
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const colorTransitionIndex = [
  [0, 1, 3],
  [0, 1, 2, 4],
  [1, 2, 5],
  [0, 3, 4, 6],
  [1, 3, 4, 5, 7],
  [2, 4, 5, 8],
  [3, 6, 7],
  [4, 6, 7, 8],
  [5, 7, 8],
];

function flip(color) {
  return color === "." ? "*" : ".";
}

function bfs(target) {
  let visited = new Set();
  let queue = [];

  queue.push(target);
  visited.add(target);

  let cnt = 0;

  while (queue.length) {
    let queueLen = queue.length;

    for (let i = 0; i < queueLen; i++) {
      let current = queue.shift();

      if (current === ".........") {
        console.log(cnt);
        return;
      }

      for (let j = 0; j < 9; j++) {
        let next = current.split("");

        for (let k = 0; k < colorTransitionIndex[j].length; k++) {
          let idx = colorTransitionIndex[j][k];
          next[idx] = flip(next[idx]);
        }

        let nextStr = next.join("");
        if (!visited.has(nextStr)) {
          visited.add(nextStr);
          queue.push(nextStr);
        }
      }
    }

    cnt++;
  }
}

let testCaseCount = 0;
let testCase = "";

rl.on("line", (line) => {
  if (testCaseCount === 0) {
    testCaseCount = Number(line);
  } else {
    testCase += line;
    if (testCase.length === 9) {
      bfs(testCase);
      testCase = "";
      testCaseCount--;
    }
  }

  if (testCaseCount === 0) {
    rl.close();
  }
});

rl.on("close", () => {
  process.exit(0);
});
