#the is_prime checks is a number passed in is prime 
# is_prime returns True or False 

#A prime number is a positive integer, greater that 1,
#only has two factors (one and itself)

from math import ceil

def is_prime(num):
  counter = 0
  if((num > 1)and (ceil(num) == num)):
      #condition checks if num is positive and an integer
    for index in range(num):
      if(num % (index + 1) == 0):
        counter += 1
        
  if(counter == 2):
    return True
  else:
    return False

    

