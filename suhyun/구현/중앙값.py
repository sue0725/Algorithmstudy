list = []

for i in range(5):
    n = int(input())
    list.append(n)

list.sort()
average = sum(list) / len(list)


print(int(average))
print(int(sum(list)/5))
