#!/usr/bin/python3

# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

def main():
    user_input = int(input("Please enter a number: "))
    primes = get_primes(user_input)
    print(primes)
    prime_factors = get_prime_factors(primes, user_input)
    print("Result: ", max(prime_factors))

def get_prime_factors(primes, number):
    quotient = number
    prime_factors = []
    for prime in primes: 
        while quotient % prime == 0: 
            quotient = int(quotient/prime)
            if is_prime(primes, quotient):
                prime_factors.append(quotient)
                return prime_factors
            prime_factors.append(prime)
    return prime_factors 

def is_prime(primes, value):
    if value not in primes: 
        return False
    return True

# implement a generator 
# for OO, create an object with the primes and then store 
def get_primes(x): 
    prime_bools = [False]*2 + [True for y in range(2, x+1)]
    for i in range(x+1): 
        if prime_bools[i]: 
            for j in range(i*i, x+1, i): 
                prime_bools[j] = False
    return [index for index, value in enumerate(prime_bools) if value]
    
if __name__ == '__main__':
    main()