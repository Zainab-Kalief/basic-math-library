module.exports = () => {
  return {
    add: (x, y) => {
      return x + y
    },
    multiply: (x, y) => {
      return x * y
    },
    square: (x) => {
      return x * x
    },
    random: (x, y) => {
      return Math.trunc(Math.random() * y) + x
    },
  }
}
