def fibonacci(terms):
  first = 0
  second = 1
  result = 0
  for n in range(0, terms):
    result = first + second
  return result