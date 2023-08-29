# test case 횟수 입력
t = int(input())

# test case가 반복될 동안
for a in range(t):
    # 주기 수와 배열 입력 받음
    n = int(input())
    data = list(map(int,input().split()))
    # 배열을 뒤집음
    data.reverse()

    max = data[0]
    sum = 0

    # 1부터 까지 반복되는 동안
    for i in range(1,n):
        # 최대값 보다 크다면 max 값 갱신
        if max < data[i]:
            max = data[i]
            continue

        sum = sum + max - data[i]

    print(sum)