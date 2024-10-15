'''Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit,
continue reducing in this way until a single-digit number is produced. The input 
will be a non-negative integer.

Examples
    16  -->  1 + 6 = 7
   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2'''

########## MY SOLUTION ##########


def digital_root(n):

    def sum_numbers(n):
        sum = 0
        for number in str(n):
            sum += int(number)
        return sum

    sum = sum_numbers(n)
    while len(str(sum)) != 1:
        sum = sum_numbers(sum)
    return sum

########## BEST SOLUTION ##########


def digital_root2(n):
    return n if n < 10 else digital_root(sum(map(int, str(n))))


print(digital_root(16))
print(digital_root2(16))
print(digital_root(942))
print(digital_root2(942))
print(digital_root(132189))
print(digital_root2(132189))
print(digital_root(493193))
print(digital_root2(493193))
