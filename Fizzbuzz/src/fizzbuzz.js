const fizzbuzz = (number) => {
  if ( number % 3 === 0 ) {
    return "Fizz"
  }
  return number
}

module.exports = { fizzbuzz }