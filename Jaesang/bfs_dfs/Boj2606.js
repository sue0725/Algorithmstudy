// 백준 2606 (안전영역)

const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\r\n");

let [numOfVertexes, numOfEdges, ...rest] = input;

const Graph = Array(Number(numOfVertexes) + 1);

for (let i = 0; i < Graph.length; i++) {
  Graph[i] = [];
}

rest.forEach((pair) => {
  pair = pair.split(" ");
  Graph[Number(pair[0])].push(Number(pair[1]));
  Graph[Number(pair[1])].push(Number(pair[0]));
});

// console.log(Graph); // 그래프 만들기

const visit = Array(Number(numOfVertexes) + 1).fill(false);

function dfs(vertex) {
  if (visit[vertex]) {
    return;
  }
  visit[vertex] = true;
  for (let i = 0; i < Graph[vertex].length; i++) {
    dfs(Graph[vertex][i]);
  }
}

dfs(1);

let infected = 0;

for (let i = 0; i < visit.length; i++) {
  if (visit[i]) infected++;
}
console.log(infected - 1);
