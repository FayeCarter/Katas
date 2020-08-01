from .fibonacci import fibonacci

def test_returns_0():
  """
  When 0 terms
  Return 0
  """
  assert fibonacci(0) == 0

def test_returns_terms_for_first_two_terms():
  """
  When 1 term
  Return terms
  """
  assert fibonacci(1) == 1

def test_returns_sum_of_previous_two_terms():
  """
  When term > 2
  Return sum of previous two terms
  """
  assert fibonacci(2) == 1
  assert fibonacci(3) == 2
  assert fibonacci(4) == 3
  assert fibonacci(15) == 610
  