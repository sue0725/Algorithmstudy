const fs = require("fs"); //Boj2805
const filePath = process.platform === "linux" ? "/dev/stdin" : "./input.txt";
let input = fs.readFileSync(filePath).toString().trim().split("\n");

[Commands, ...rest] = input;

const target = Number(Commands.split(" ")[1]);

let max = -1;

const beforeCut = rest.map((v) => {
  if (max < Number(v)) {
    max = Number(v);
  }

  return Number(v);
});

let longest = -1;

const bs = (begin, end) => {
  if (begin > end) {
    return -1;
  }

  const middle = Math.floor((begin + end) / 2);

  let totalNumOfLine = 0;

  for (let i = 0; i < beforeCut.length; i++) {
    let numOfLine = Math.floor(beforeCut[i] / middle);
    totalNumOfLine = totalNumOfLine + numOfLine;
  }

  if (totalNumOfLine >= target) {
    // 짧게자름
    if (longest < middle) {
      longest = middle;
    }

    return bs(middle + 1, end);
  } else {
    // 길게 자름
    return bs(begin, middle - 1);
  }
};

bs(0, max);

console.log(longest);
