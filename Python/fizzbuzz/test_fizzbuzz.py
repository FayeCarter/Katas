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
  assert fizzbuzz(3) == "Fizz"
  assert fizzbuzz(6) == "Fizz"
  assert fizzbuzz(9) == "Fizz"

def test_should_return_Buzz():
  """
  For numbers not divisible by 5, fizzbuzz should return "Buzz"
  """
  assert fizzbuzz(5) == "Buzz"
  assert fizzbuzz(10) == "Buzz"
  assert fizzbuzz(20) == "Buzz"

def test_should_return_Buzz():
  """
  For numbers not divisible by 5, fizzbuzz should return "Buzz"
  """
  assert fizzbuzz(15) == "Fizzbuzz"
  assert fizzbuzz(30) == "Fizzbuzz"
  assert fizzbuzz(45) == "Fizzbuzz"
