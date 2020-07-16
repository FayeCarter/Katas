def greed(numbers):
  if len(numbers) < 5:
    return "You didn't roll renough dice"
  elif len(numbers) > 5:
    return "You rolled too many dice"