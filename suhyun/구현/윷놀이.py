for i in range(3):
    yoot = list(map(int, input().split()))
    if yoot.count(0) == 1:
        print("A")
    elif yoot.count(0) == 2:
        print("B")
    elif yoot.count(0) == 3:
        print("C")
    elif yoot.count(0) == 4:
        print("D")
    else:
        print("E")