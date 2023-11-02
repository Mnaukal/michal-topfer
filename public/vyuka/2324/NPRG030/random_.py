import random

# když nastavíme seed, budou vygenerované náhodné hodnoty stejné při každém sputění programu
random.seed(42)

# "hod kostkou"
print(random.randrange(6))  # 0 až 5

print(random.randrange(1, 7))  # 1 až 6

print(random.randint(1, 6))  # 1 až 6

# "hod mincí"

print(random.choice(["panna", "orel"]))
print(random.choice([True, False]))

# více náhodných hodnot najednou (s opakováním)

print(random.choices(["panna", "orel"], k=10))

# nefér mince (panna má 10x větší pravděpodobnost)

print(random.choices(["panna", "orel"], weights=[10, 1], k=10))

# náhodné setřízení

numbers = list(range(10))
random.shuffle(numbers)  # in place
print(numbers)

# více náhodných hodnot najednou (bez opakování)

print(random.sample(numbers, 3))

random.shuffle(numbers)
print(numbers[:3])

# reálná čísla

print(random.random())

print(random.uniform(1, 10))  # 1 + (10 - 1) * random()
