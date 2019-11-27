def factorial(x):
    number = x
    factorial = number

    if(number == 0):
        return 1
    else:
        for index in range(x):
            if(number - 1 > 1):
                factorial *= number - 1
                number -= 1
                
        return factorial
