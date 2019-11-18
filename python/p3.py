#!/usr/bin/python3

# The prime factors of 13195 are 5, 7, 13 and 29.
# What is the largest prime factor of the number 600851475143 ?

def main():
    input = int(input("Please enter a number!"))
    result = find_largest_prime_factor(input)
    print("Result: ", result)

def find_largest_prime_factor(k):
    prime_factors = [x for x in k if is_prime_factor(x)]
    return prime_factors

def is_prime_factor(x): 
    prime_numbers = range(2, x+1)
    for i in prime_numbers: 
        next_value = prime_numbers[i]
        prime_numbers = prime_numbers.reduce

        prime_numbers = prime_numbers.remove()


print(find_largest_prime_factor(600851475143))