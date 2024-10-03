"""Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing
the last 3 (instead of 2) numbers of the sequence to generate the next. 
And, worse part of it, regrettably I won't get to hear non-native Italian 
speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting 
input (AKA signature), we have this sequence:

[1, 1 ,1, 3, 5, 9, 17, 31, ...]
But what if we started with [0, 0, 1] as a signature? 
As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci 
sequence by once place, you may be tempted to think that we would get the same 
sequence shifted by 2 places, but that is not the case and we would get:

[0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
Well, you may have guessed it by now, but to be clear: you need to create a 
fibonacci function that given a signature array/list, returns the first n 
elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number;
if n == 0, then return an empty array (except in C return NULL) and be ready for
anything else which is not clearly specified ;)

If you enjoyed this kata more advanced and generalized version of it can be 
found in the Xbonacci kata

[Personal thanks to Professor Jim Fowler on Coursera for his awesome classes 
that I really recommend to any math enthusiast and for showing me this 
mathematical curiosity too with his usual contagious passion :)]"""

# Questions:
# Siganture always have 3 positions?
#

# Smaller steps:
# 1- Get the sum of the 3 numbers;
# 2- Add it to a new array;
# 3- Repeat it for n times;
# 4- Check if n is a number;
# 5- Check if n is > 0;
# 6- check len of signature

# MY SOLUTION
# def tribonacci(signature, n):
#     output = []
#     i = 2
#     if len(signature) != 3 or n < 0 or not isinstance(n, (int, float)):
#         print('Arguments are not valid!')
#     elif n == 0:
#         return output
#     elif n < 3:
#         while (3-n) > 0:
#             n += 1
#             signature.pop()
#         return signature
#     else:
#         while len(signature) < n:
#             new_element = signature[i-2] + signature[i-1] + signature[i]
#             signature.append(new_element)
#             i += 1
#         return signature


# BEST SOLUTION AFTER RESEARCH
def tribonacci(signature, n):
    while len(signature) < n:
        signature.append(sum(signature[-3:]))
    return signature[:n]


print(tribonacci([1, 1, 1], 10))
print(tribonacci([0, 0, 1], 10))
print(tribonacci([0, 1, 1], 10))
print(tribonacci([1, 0, 0], 10))
print(tribonacci([0, 0, 0], 10))
print(tribonacci([1, 2, 3], 10))
print(tribonacci([3, 2, 1], 10))
print(tribonacci([1, 1, 1], 1))
print(tribonacci([300, 200, 100], 0))
print(tribonacci([0.5, 0.5, 0.5], 30))
