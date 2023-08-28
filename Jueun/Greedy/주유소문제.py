#!/usr/bin/env python
# coding: utf-8

# In[ ]:


#1차시도 58점
n = int(input())
road = list(map(int,input().split()))
city = list(map(int,input().split()))
new_city = [0 for _ in range(n)]

for i in sorted(set(city)) :
    min_idx = city.index(i)
    for c in range(min_idx, len(city)) :
        if new_city[c] == 0 :
            new_city[c] = i
answer = 0
for r in range(len(road)) :
    answer += ( road[r] * new_city[r])
print(answer)

#2차시도
n = int(input())
road = list(map(int,input().split()))
city = list(map(int,input().split()))

min_price = city[0]
answer = city[0] * road[0]

for i in range(1,n-1) :
    if city[i] < min_price : #전에 더 싼게 있었으면 그걸루 하자
        min_price= city[i]

    answer += min_price * road[i]
    
print(answer)

