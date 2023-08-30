#!/usr/bin/env python
# coding: utf-8

# In[ ]:


n = int(input())
dic = {}

for _ in range(n) :
    ext = input().split('.')[1]
    if ext in dic.keys() :
        dic[ext] += 1
    else : 
        dic[ext] = 1
    
for d in sorted(list(dic.keys())):
    print(d, str(dic[d]))

