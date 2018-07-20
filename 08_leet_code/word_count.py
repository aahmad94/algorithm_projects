import re

def count_words(x, y):
    counts_x = gen_counts(x)
    counts_y = gen_counts(y)
    return compare_counts(counts_x, counts_y)

def gen_counts(s):
    s = str(s)
    s = re.sub('[^a-z]+', ' ', s)
    s = s.split(" ")
    s = s[1:len(s) - 1]
    
    counts = {}
    
    for word in s:
      if word in counts:
        counts[word] += 1
      else: 
        counts[word] = 1
    return counts

def compare_counts(counts_x, counts_y):
  for key in counts_x:
    if key in counts_y:
      if counts_x[key] != counts_y[key]:
        return False
    else:
      return False


  for key in counts_y:
      if key in counts_x:
        if counts_y[key]  != counts_x[key]:
          return False
      else: 
          return False
  return True

x = [{'apple': {'avocado': ['olive', 'pear', 'orange', 'apple'], 'olive': 'pear'},
     'apricot': [{'apple': 'coconut'}, {'orange': 'apple'}],
     'pear': 'orange'
     }]

y = [{'avocado': {'apple': 'pear', 'olive': ['olive', 'pear', 'orange', 'apple']},
     'apricot': [[{'apple': 'coconut'}], [{'orange': 'apple'}]],
     'pear': ['orange']
     }]

z = [{'orange': 'pear'}, 'lemon']


print(count_words(x, y))