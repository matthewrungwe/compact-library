#the reverse function accepts a string and returns a 
#reversed string
#

def reverse(text):
  reversed_array = []
  text_length = len(text)
  
  for index in range(len(text)):
    reversed_array.append(text[text_length - (index + 1)])
    
  return "".join(reversed_array)
