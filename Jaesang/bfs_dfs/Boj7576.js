// 토마토
//const input = require('fs').readFileSync('./input.txt').toString().trim().split('\r\n');
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n");
let [x, y] = input
  .shift()
  .split(" ")
  .map((v) => +v);
let array = [];

input.forEach((row) => {
  let innerArr = row.split(" ").map((v) => +v);
  array.push(innerArr);
});

let numOfRapedTomatoes = 0;
let previousNumOfRapedTomatoes = 0;

class Node {
  constructor(data) {
    this.data = data;
    this.link = null;
  }
}

class ListQueue {
  constructor() {
    this.front = null;
    this.rear = null;
    this.size = 0;
  }

  isEmpty() {
    if (this.front === null) {
      return 1;
    } else {
      return 0;
    }
  }

  enQueue(data) {
    let newNode = new Node(data);
    if (this.isEmpty() === 1) {
      this.front = newNode;
      this.rear = newNode;
    } else {
      this.rear.link = newNode;
      this.rear = newNode;
    }
    this.size = this.size + 1;
  }

  deQueue() {
    if (this.isEmpty() === 1) {
      return -1;
    } else {
      this.size = this.size - 1;
      let deQueueData = this.front.data;
      this.front = this.front.link;

      if (this.front === null) {
        this.rear = null;
      }
      return deQueueData;
    }
  }
  getSize() {
    return this.size;
  }
}

const bfs = () => {
  let Q = new ListQueue();
  let cnt = 0;
  let empty = 0;

  for (let i = 0; i < y; i++) {
    for (let j = 0; j < x; j++) {
      if (array[i][j] === 1) {
        Q.enQueue([i, j]);
      } else if (array[i][j] === -1) {
        empty++;
      }
    }
  }

  let total = x * y - empty; // 총 토마토의 갯수
  numOfRapedTomatoes = Q.getSize(); //익은 토마토

  if (numOfRapedTomatoes === total) {
    return cnt;
  }
  if (numOfRapedTomatoes === 0) {
    return -1;
  }

  cnt = 1;

  let dx = [-1, 1, 0, 0];
  let dy = [0, 0, 1, -1]; //위 ,아래,오른쪽,왼쪽

  while (Q.getSize()) {
    QLen = Q.getSize();
    previousNumOfRapedTomatoes = numOfRapedTomatoes;
    for (let i = 0; i < QLen; i++) {
      let X = Q.deQueue();

      for (let j = 0; j < 4; j++) {
        let adjacentX = X[0] + dx[j];
        let adjacentY = X[1] + dy[j];

        if (
          adjacentX >= 0 &&
          adjacentY >= 0 &&
          adjacentX < y &&
          adjacentY < x &&
          array[adjacentX][adjacentY] == 0
        ) {
          array[adjacentX][adjacentY] = 1; //방문
          Q.enQueue([adjacentX, adjacentY]);
          numOfRapedTomatoes++;
        }
      } // 하나에 토마토에 대해서 이웃한 토마토 모두 익음
    } // 같은 날짜에 있는 토마토가 모두 익음
    if (numOfRapedTomatoes == total) {
      return cnt;
    }
    cnt++;
    if (
      numOfRapedTomatoes === previousNumOfRapedTomatoes &&
      numOfRapedTomatoes !== total
    ) {
      return -1;
    }
  } // 큐에 남아있는 값이 없음
};

let answer = bfs();

console.log(answer);
