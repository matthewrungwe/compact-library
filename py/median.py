from math import ceil

def median(data_set):
  new_data_set = data_set
  new_data_set.sort()
  set_length = len(data_set)
  
  if(set_length == 1):
    return new_data_set[set_length - 1]
  elif(set_length % 2 != 0):
    return new_data_set[int(ceil(set_length / 2))]
  else:
    lower = int(set_length / 2)
    upper = int((set_length / 2) + 1)   
    average =(new_data_set[lower -1] + new_data_set[upper - 1]) / 2.0  
    
    return average

print median([5, 6, 7, 8, 9, 1, 2, 3])

