arrs=[1,2,3,4,5]
tar_sum=9
def two_sum(arrs,tar_sum):
    store={}
    for i,arr in enumerate(arrs):
        difference=tar_sum-arr
        if difference in store:
            return [store[difference], i]
        store[arr]=i
res= two_sum(arrs,tar_sum)
print(res)
