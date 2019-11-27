def digit_sum(n):
  num_string = str(n)
  array_string = []
  array_digits = []
  total = 0

  for index, digit_string in enumerate(num_string):
    array_string.append(digit_string)
    array_digits.append(int(array_string[index]))   
    total += array_digits[index]    
    
  return total