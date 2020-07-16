from .greed import greed

def test_include_1():
  """
  When player rolls contains a 1
  Return score of 100
  """
  assert greed([1,2,3,4,3]) == 100

