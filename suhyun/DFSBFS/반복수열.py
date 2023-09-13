n, m = map(int, input().split())
check = [0] * 236197  # 9 ** 5 + 9 ** 5 + 9 ** 5 + 9 ** 5 최대 인덱스의 값이기 때문
iteration = 1


def cal(a, b):
    result = 0
    for i in str(a):
        result += pow(int(i), b)
    return result


def dfs(n, m, iteration, check):
    if check[n] != 0:
        return check[n] - 1

    check[n] = iteration
    iteration += 1
    result = cal(n, m)
    return dfs(result, m, iteration, check)


print(dfs(n, m, iteration, check))