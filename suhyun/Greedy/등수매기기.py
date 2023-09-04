n = int(input())

data = []
count = 0

for a in range(n):
    data.append(int(input()))

data.sort()

for i in range(1, n+1):
    count = count + abs(i - data[i-1])

print(count)