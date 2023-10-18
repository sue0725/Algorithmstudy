import sys
n = int(sys.stdin.readline())
arr = [0]

for i in range(n):
    arr.append(int(sys.stdin.readline()))

if n==1:
    print(arr[1])
    sys.exit(0)

if(n==2):
    print(arr[1]+arr[2])    
    sys.exit(0)

if(n==3):
    res = max(arr[1]+arr[2] , arr[2]+arr[3], arr[1]+arr[3])
    print(res)
    sys.exit(0)


memo =[0]*(n+1)
memo[1] = arr[1]
memo[2] = arr[1]+arr[2]
memo[3]= max(arr[1]+arr[2] , arr[2]+arr[3], arr[1]+arr[3])

for i in range(4,len(memo)): 
    memo[i] = max(memo[i-4] + arr[i-1]+ arr[i-2], max(memo[i-3]+arr[i-1],memo[i-2])+arr[i])

print(memo[len(memo)-1])