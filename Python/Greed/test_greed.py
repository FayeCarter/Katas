from .greed import greed

def test_include_1():
  """
  When players roll contains a 1
  Return score of 100
  """
  assert greed([1,2,3,4,3]) == 100

def test_include_three_1s():
  """
  When players roll contains three 1s
  Return score of 1000
  """
  assert greed([1,2,1,1,3]) == 1000

def test_include_four_1s():
  """
  When players roll contains four 1s
  Return score of 1100
  """
  assert greed([1,1,1,1,3]) == 1100

