def greed(numbers):
  if 1 in numbers:
    if numbers.count(1) == 3:
      return 1000
    else:
      return 100