module.exports = function (array, name) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      console.log(i + 1);
    } else {
      console.log(`${name}아님`)
    }
  }
}