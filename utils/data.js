export const getRandomNumbers = (items, max, min) => {
  let _numbers = []
  for (let i = 0; i < items; i = i + 1) {
    const random = Math.floor(Math.random() * max) + min
    if (!_numbers.includes(random)) {
      _numbers = [..._numbers, random]
    } else {
      i = i - 1
    }
  }
  return _numbers
}
