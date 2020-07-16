from .fizzbuzz import fizzbuzz

def test_should_return_number():
  """
  For numbers not divisible by 3 or 5, fizzbuzz should return the passed number
  """
  assert fizzbuzz(1) == 1
  assert fizzbuzz(2) == 2
  assert fizzbuzz(4) == 4

def test_should_return_Fizz():
  """
  For numbers not divisible by 3, fizzbuzz should return "Fizz"
  """
  assert fizzbuzz(1) == 1
  assert fizzbuzz(2) == 2
  assert fizzbuzz(4) == 4
