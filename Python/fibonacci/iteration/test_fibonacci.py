from .fibonacci import fibonacci

def test_returns_0():
  """
  When 0 terms
  Return 0
  """
  assert fibonacci(0) == 0