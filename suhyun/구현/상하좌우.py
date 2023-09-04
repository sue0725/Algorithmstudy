n = int(input())
plan = list(input().split())

# 행,열 = 1,1
row,column = 1,1

for move in plan:
    if move == "L":
        if column != 1:
            column = column -1

    elif move == "R":
        if column != n:
            column = column + 1

    elif move == "U":
        if row != 1:
            row = row -1

    elif move == "D":
        if row != n:
            row = row + 1

print(row,column)