N = int(input())

arr = []
dict = {}

for i in range(N):
    file = input().split('.')
    # arr.append(file[1])

for i in arr:
    if dict.get(i):
        dict[i] += 1
    else:
        dict[i] = 1

dict = sorted(dict.items())

for i, j in dict:
    print(i, j)