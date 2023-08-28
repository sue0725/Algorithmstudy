# 거슬러 줘야 하는 돈 입력
n = 1260
# 동전 종류 배열로 입력
coin_types = [500, 100, 50, 10]

# 거스름돈의 개수 초기화
count = 0

# coin_types 배열 순회하는 동안 몫과 나머지를 구하면서 count에 저장
for coin in coin_types:
    count = count + n // coin
    n = n % coin

print(count)

