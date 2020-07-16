from .greed import greed

def test_roll_5():
  """
  Player must roll 5 dice
  """
  assert greed([1,2,3]) == "You didn't roll renough dice"