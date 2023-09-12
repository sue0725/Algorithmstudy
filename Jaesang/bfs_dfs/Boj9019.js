// 백준 9019 DSLR

const fs = require("fs");
const { start } = require("repl");
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

[num, ...arr] = input;

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
}

const getL = (value) => {
  let el = Math.floor(value / 1000);
  value = "" + (value % 1000) + el;
  return parseInt(value);
};

const getR = (value) => {
  let strValue = "";

  if (value < 10) {
    strValue = value + "000";
  } else if (value < 100) {
    strValue = (value % 10) + "00" + Math.floor(value / 10);
  } else if (value < 1000) {
    strValue = (value % 10) + "0" + Math.floor(value / 10);
  } else {
    strValue = "" + (value % 10) + Math.floor(value / 10);
  }

  return parseInt(strValue);
};

const sol = (str) => {
  let [start, target] = str.split(" ");

  const visit = Array(9999).fill(false);

  let startValue = +start;
  let targetValue = +target;

  visit[startValue] = true;

  let calVal = "";

  const Q = new ListQueue();

  Q.enQueue([startValue, calVal]);

  while (!Q.isEmpty()) {
    let [value, res] = Q.deQueue();

    if (value >= 10000) continue;

    if (2 * value === targetValue || (2 * value) % 10000 === targetValue) {
      let newRes = res + "D";
      return newRes;
      // D 연산을 하여 정답이 나왔을 경우
    }
    if (2 * value < 10000) {
      // 10000보다 작을 때,
      if (!visit[2 * value]) {
        // 처음 나온 값이라면 방문하고 Q에 값을 넣는다.
        let newRes = res + "D";
        Q.enQueue([2 * value, newRes]);
        visit[2 * value] = true;
      }
    } else {
      //2* value가 10000보다 클 때,
      if (!visit[(2 * value) % 10000]) {
        //2*value를 10000으로 나눈 값이 처음 등장했다면, 방문하고 Q에 값을 넣는다.
        let newRes = res + "D";
        Q.enQueue([(2 * value) % 10000, newRes]);
        visit[(2 * value) % 10000] = true;
      }
    } // D연산

    if (value - 1 == targetValue || (value == 0 && target == 9999)) {
      // S연산을 해서 정답이 나왔을 경우,
      let newRes = res + "S";
      return newRes;
    }

    if (value == 0) {
      if (!visit[9999]) {
        let newRes = res + "S";
        Q.enQueue([9999, newRes]);
        visit[9999] = true;
      }
    } else {
      if (!visit[value - 1]) {
        let newRes = res + "S";
        Q.enQueue([value - 1, newRes]);
        visit[value - 1] = true;
      }
    } // S연산

    const lValue = getL(value); // L연산

    if (lValue == targetValue) {
      let newRes = res + "L";
      return newRes;
    } // L 연산으로 정답이 나왔을 경우

    if (!visit[lValue]) {
      let newRes = res + "L";
      Q.enQueue([lValue, newRes]);
    } // 나오지 않으면 Q에 집어넣음

    const rValue = getR(value); //R 연산

    if (rValue == targetValue) {
      let newRes = res + "R";
      return newRes;
    } //R 연산으로 정답이 나왔을 경우,

    if (!visit[rValue]) {
      let newRes = res + "R";
      Q.enQueue([rValue, newRes]);
    } // 나오지 않으면 Q에 집어넣음
  }
};

let ans = "";

arr.forEach((el) => {
  ans = ans + sol(el) + "\n";
});

console.log(ans.trimEnd());
