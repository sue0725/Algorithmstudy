#!/usr/bin/env python
# coding: utf-8

# In[ ]:


answer = []
for _ in range(int(input())) :
    n = int(input())
    nums = list(map(int,input().split())) # [ 10, 7 ,6]
    maxNum = nums[-1] #마지막이 max라는 가정
    profit = 0
    for i in reversed(range(len(nums))): #큰 것부터 1까지
        if nums[i] < maxNum :
            profit+= maxNum - nums[i]
        elif nums[i] > maxNum:
            maxNum = nums[i]
    answer.append(profit)
for a in answer :
    print(a)

