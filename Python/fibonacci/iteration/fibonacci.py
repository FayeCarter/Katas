def fibonacci(terms):
  first = 0
  second = 1
  for n in range(0, terms):
    temp = first
    first = second
    second = temp + second
  return first