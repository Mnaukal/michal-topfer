"""Count the number of primes smaller or equal to `n`."""

def Eratosthenes(n):
    """Returns the primes smaller or equal to `n`."""
    # initially, we think all numbers in range [0, n] are primes
    is_prime = [True] * (n + 1)
    # 0 and 1 are not primes
    is_prime[0], is_prime[1] = False, False

    primes = []  # found primes

    for number in range(2, n + 1):
        if is_prime[number]:
            primes.append(number)
            # mark all multiples of number as non-prime
            # we can start at `number ** 2` because all the smaller multiples were already marked as non-prime (they have another factor smaller than `number`)
            for multiple in range(number ** 2, n + 1, number):
                is_prime[multiple] = False

    return primes


n = int(input())
primes = Eratosthenes(n)
print(len(primes))
