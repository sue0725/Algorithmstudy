n, m = map(int, input().split())
s1 = input()
s2 = input()

# dp[i][j] 배열을 생성하여 초기화
dp = [[0] * (m + 1) for _ in range(n + 1)]

# 다이나믹 프로그래밍으로 최장 공통 부분 문자열 길이 계산
for i in range(1, n + 1):
    for j in range(1, m + 1):
        if s1[i - 1] == s2[j - 1]:
            dp[i][j] = dp[i - 1][j - 1] + 1
        else:
            dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

# 최장 공통 부분 문자열의 길이 출력
print(dp[n][m])

# 최장 공통 부분 문자열 찾아서 출력
result = []
i, j = n, m
while i > 0 and j > 0:
    if s1[i - 1] == s2[j - 1]:
        result.append(s1[i - 1])
        i -= 1
        j -= 1
    elif dp[i - 1][j] > dp[i][j - 1]:
        i -= 1
    else:
        j -= 1

print(''.join(result))

# result.reverse()