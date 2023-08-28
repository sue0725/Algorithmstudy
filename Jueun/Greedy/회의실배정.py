#!/usr/bin/env python
# coding: utf-8

# In[ ]:


n = int(input())
rsv = []
cnt = 1
for _ in range(n) : #일찍 끝날 수록 뒤에 회의 채울 수 있음
    s,f = map(int,input().split())
    rsv.append([s,f])
    
rsv.sort(key=lambda x:(x[1], x[0]), reverse=False)

endtime = rsv[0][1]

for i in range(1,n) :
    if endtime <= rsv[i][0] : # 예약되면?
        endtime = rsv[i][1] 
        cnt += 1 
        
print(cnt)

