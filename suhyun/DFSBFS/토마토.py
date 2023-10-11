from collections import deque
# 토마토가 들어갈 nxm 정수 입력
m, n = map(int, input().split())

# 토마토 배열 생성
tomato = []
for _ in range(n):
    tomato.append(list(map(int, input().split())))
queue = deque()
for i in range(n):
    for j in range(m):
        if tomato[i][j] == 1:
            queue.append((i, j))
#상 하 좌 우 배열 생성
dx = [-1, 0, 1, 0]
dy = [0, -1, 0, 1]

while queue:
    x, y = queue.popleft()
    for i in range(4):
        nx = x + dx[i]
        ny = y + dy[i]
        if 0 <= nx < n and 0 <= ny < m:
            if tomato[nx][ny] == 0:
                queue.append((nx, ny))
                tomato[nx][ny] = tomato[x][y] + 1

flag = False
for i in range(n):
    for j in range(m):
        if tomato[i][j] == 0:
            flag = True
            break
if flag:
    print(-1)
else:
    print(max(map(max, tomato)) - 1)