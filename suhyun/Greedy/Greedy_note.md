## Greedy Algorithm

---

* 탐욕법
  * 이름에서 알 수 있듯이 어떠한 문제가 있을 때 단순 무식하게, 탐욕적으로 문제를 푸는 알고리즘
  * '현재 상황에서 지금 당장 좋은 것만 고르는 방법'
  * 매 순간 가장 좋아 보이는 것을 선택하며, 현재의 선택이 나중에 미칠 영향에 대해서는 고려하지 않는다.

* 그리디 알고리즘은 기준에 따라 좋은 것을 선택하는 알고리즘이므로 문제에서 '가장 큰 순서대로', '가장 작은 순서대로'와 같은 기준을 알게 모르게 제시해준다.


### 🃏숫자 카드 게임

* 숫자 카드 게임은 여러 개의 숫자 카드 중에서 가장 높은 숫자가 쓰인 카드 한 장을 뽑는 게임이다.
단, 게임의 룰을 지키며 카드를 뽑아야 하고 룰은 다음과 같다.

  * 숫자가 쓰인 카드들이 N x M 형태로 놓여 있다. 이때 N은 행의 개수를 의미하며, M은 열의 개수를 의미한다
  * 먼저 뽑고자 하는 카드가 포함되어 있는 행을 선택한다.
  * 그 다음 선택된 행에 포함된 카드들 중 가장 숫자가 낮은 카드를 뽑아야 한다.
  * 따라서 처음에 카드를 골라낼 행을 선택할 때, 이후에 해당 행에서 가장 숫자가 낮은 카드를 뽑을 것을 고려하여 최종적으로 가장 높은 숫자의 카드를 뽑을 수 있도록 전략을 세워야 한다.

---

1. 입력조건
* 첫째 줄에 숫자 카드들이 놓인 행의 개수 N과 열의 개수 M이 공백을 기준으로 하여 각각 자연수로 주어진다.
* 둘째 줄 부터 N개의 줄에 걸쳐 각 카드에 적힌 숫자가 주어진다. 각 숫자는 1 이상 10,000 이하의 자연수이다.

2. 출력 조건
* 첫째 줄에 게임의 룰에 맞게 선택한 카드에 적힌 숫자를 출력한다.

---

1. 입력 예시 1

3 3

3 1 2

4 1 4

2 2 2

2. 출력 예시 1

2
