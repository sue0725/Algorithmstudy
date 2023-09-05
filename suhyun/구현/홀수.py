add = 0
list = []
for i in range(7):
    n = int(input())
    if n % 2 != 0:
        add = add + n
        list.append(n)

if list == []:
        print(-1)

else:
    print(add)
    print(min(list))