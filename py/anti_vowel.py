#the anti_vowel function accepts a string and removes all vowels 
# in the string

def anti_vowel(text):
  vowels = [['A', 'a'], ['E','e'], ['I', 'i'], ['O','o'], ['U', 'u']]
  
  final_array = []
  
  for index in range(len(text)):
    checked = False
    for set in vowels:
      if((text[index] == set[0]) or (text[index] == set[1])):
        final_array.append('') 
        checked  = True
        
    if(not(checked)):
      final_array.append(text[index])
 
  return ''.join(final_array)
