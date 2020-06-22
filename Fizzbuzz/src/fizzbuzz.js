const fizzbuzz = (number) => {
  if ( number % 15 === 0 ) {
    return "Fizzbuzz"
  } else if ( number % 3 === 0 ) {
    return "Fizz"
  } else if ( number % 5 === 0 ) {
    return "Buzz"
  }
  return number
}

module.exports = { fizzbuzz }