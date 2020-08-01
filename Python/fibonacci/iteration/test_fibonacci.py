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
