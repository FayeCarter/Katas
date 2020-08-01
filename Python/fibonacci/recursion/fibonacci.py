def fibonacci(terms):
  if terms <= 1:
    return terms
  else:
    return fibonacci(terms - 1) + fibonacci(terms - 2)