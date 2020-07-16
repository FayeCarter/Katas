def greed(numbers):
  if 1 in numbers:
    count = numbers.count(1) 
    if count >= 3:
      return 1000 + (count - 3) * 100
    else:
      return (count * 100)
