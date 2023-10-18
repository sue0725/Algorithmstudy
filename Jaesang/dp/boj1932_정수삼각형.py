import sys
n = int(sys.stdin.readline())
arr=[]
for _ in range(n):
    innerArr = list(map(int,sys.stdin.readline().split()))
    if len(innerArr)<n :
        arr.append(innerArr + [0]*(n-len(innerArr)))
    else:
        arr.append(innerArr)

memo = [[0] * n for _ in range(n)] #이차원 배열 생성하기

for i in range(0,n):
    memo[n-1][i] = arr[n-1][i]

for i in range(n-2,-1,-1):
    for j in range(0,i+1):
        memo[i][j] = max(memo[i+1][j], memo[i+1][j+1]) + arr[i][j]

print(memo[0][0])



















