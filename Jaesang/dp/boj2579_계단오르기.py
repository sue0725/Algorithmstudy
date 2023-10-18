import sys
n = int(sys.stdin.readline())
arr = [0]
for _ in range(n):
    arr.append(int(sys.stdin.readline()))

memo = [0] * len(arr)

memo[1] = arr[1]; # 첫 계단

if n == 1:
   print(memo[1])
   sys.exit(0)

memo[2] = arr[1] + arr[2]

for i in range(3,len(arr)):
  memo[i] = max(memo[i - 3] + arr[i - 1], memo[i - 2]) + arr[i]

print(memo[len(memo)-1])


