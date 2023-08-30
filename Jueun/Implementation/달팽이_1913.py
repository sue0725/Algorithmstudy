#!/usr/bin/env python
# coding: utf-8

# In[26]:


n = int(input())
z = int(input())
a,b = (n//2,n//2) #시작점
num = 1

x = [-1,0,1,0]
y = [0,1,0,-1]
move = []

for i in range(1,n):
    move.append(i)
    move.append(i)
move.append(i)

data = [[0 for _ in range(n)] for _ in range(n)]
data[a][b] = 1

i = 0

resX = 0
resY = 0
for m in move : 
    i = i % 4
    for mm in range(m): # 1,1,2,2,...
        a+=x[i]
        b+=y[i]
        num+=1
        data[a][b] = num
        if int(num) == z :
            resX = a
            resY = b
        
    i+=1

for d in data:
    for j in d :
        print(j, end=' ')
    print()
    
if z == 1 :
    print(n//2+1,n//2+1)
else : 
    print(resX+1, resY+1)


# In[ ]:




