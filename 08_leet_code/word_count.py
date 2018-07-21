# import re

# def count_words(x, y):
#     counts_x = gen_counts(x)
#     counts_y = gen_counts(y)
#     return compare_counts(counts_x, counts_y)

# def gen_counts(s):
#     s = str(s)
#     s = re.sub('[^a-z]+', ' ', s)
#     s = s.split(" ")
#     s = s[1:len(s) - 1]
    
#     counts = {}
    
#     for word in s:
#       if word in counts:
#         counts[word] += 1
#       else: 
#         counts[word] = 1
#     return counts

# def compare_counts(counts_x, counts_y):
#   for key in counts_x:
#     if key in counts_y:
#       if counts_x[key] != counts_y[key]:
#         return False
#     else:
#       return False


#   for key in counts_y:
#       if key in counts_x:
#         if counts_y[key]  != counts_x[key]:
#           return False
#       else: 
#           return False
#   return True

# x = [{'apple': {'avocado': ['olive', 'pear', 'orange', 'apple'], 'olive': 'pear'},
#      'apricot': [{'apple': 'coconut'}, {'orange': 'apple'}],
#      'pear': 'orange'
#      }]

# y = [{'avocado': {'apple': 'pear', 'olive': ['olive', 'pear', 'orange', 'apple']},
#      'apricot': [[{'apple': 'coconut'}], [{'orange': 'apple'}]],
#      'pear': ['orange']
#      }]

# z = [{'orange': 'pear'}, 'lemon']


# print(count_words(x, y))

def longest_subsequence(s):
  magic_length = 0
  vowels = "a e i o u"
  vowels_set = set(vowels.split(" "))
  nextVowel = 0
  findStart = True
  lastSeen = 0

  i = 0;
  j = 0;
  while i < len(s) and j < len(s):
    print("i")
    print(i)
    print("j")
    print(j)
    if (findStart == True):
      if (str[i] == nextVowel):
        findStart = False
        j = i + 1
        nextVowel += 1
        nextVowel = nextVowel % (len(s) - 1)
        continue
    else:
      i += 1
      continue
    
    if str[j] in vowels_set:
      if str[j] == vowels[nextVowel] and nextVowel == len(vowels) - 1:
        magic_length = max(magic_length, j - i + 1)
        lastSeen = nextVowel
      elif str[j] == vowels[nextVowel + 1] and nextVowel == len(vowels) - 1 and lastSeen == nextVowel:
        nextVowel += 1
        nextVowel = nextVowel % (len(s) - 1)
        magic_length = max(magic_length, j - i + 1)
      elif str[j] != nextVowel and str[j] != nextVowel + 1:
        i = j
        findStart = True
        nextVowel = 0
        continue
    j += 1

      
  return magic_length

print(longest_subsequence("aeiou"))