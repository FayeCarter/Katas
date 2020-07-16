def greed(numbers):
  if 1 in numbers:
    if numbers.count(1) == 4:
      return 1100
    elif numbers.count(1) == 3:
      return 1000
    else:
      return 100