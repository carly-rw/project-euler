#!/usr/bin/python3

# If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
# Find the sum of all the multiples of 3 or 5 below 1000.

def main():
    input = int(input("Please enter a number!"))
    result = find_multiples(input)
    print("Result: ", result)

def find_multiples(k):
    return sum([x for x in range(k) if x%5 == 0 or x%3 == 0])

if __name__ == '__main__':
    main()