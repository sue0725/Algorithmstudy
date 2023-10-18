import sys
n = int(sys.stdin.readline())
arr = []
for i in range(n):
    arr.append(list(map(int,sys.stdin.readline().split())))
# print(arr)

memo = [[0] * 3 for _ in range(n)]

memo[0][0], memo[0][1], memo[0][2] = arr[0][0],arr[0][1],arr[0][2]

for i in range(1,n):
    for j in range(3):
        if j==0:
            memo[i][0] = min(memo[i-1][1],memo[i-1][2])+arr[i][0]
        elif j==1:
            memo[i][1] = min(memo[i-1][0],memo[i-1][2])+arr[i][1]
        else:
            memo[i][2] = min(memo[i-1][0],memo[i-1][1])+arr[i][2]

print(min(memo[n-1][0],memo[n-1][1],memo[n-1][2]))
