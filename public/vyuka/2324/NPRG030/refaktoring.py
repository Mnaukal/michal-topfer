def g(a):
    b = c = d = a[0]
    if a[1] < b: b = a[1]
    if a[2] < b: b = a[2]
    if a[3] < b: b = a[3]
    if a[4] < b: b = a[4]

    if a[1] > c: c = a[1]
    if a[2] > c: c = a[2]
    if a[3] > c: c = a[3]
    if a[4] > c: c = a[4]

    d += a[1]; d += a[2]; d += a[3]; d += a[4]
    
    e = d // len(a)
    return [b,c,e]


a = [928, 123, 837, 242, 382]
f = g(a)

print(f"Prvni hodnota: {f[0]}")
print(f"Druha hodnota: {f[1]}")
print(f"Treti hodnota: {f[2]}")
