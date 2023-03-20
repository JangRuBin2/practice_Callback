// function one(first, second, callback) {
//   let addResult = first + second;
//   return callback(addResult);
// }

// const oneCallback = one(1, 2, function (result) {
//   let callbackResult = result * 2;
//   return callbackResult;
// });
// console.log(oneCallback);

const exampleArray = [5, 2, 7, 3, 9, 324, 66, 43];
function minValue(array, callback) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return callback(min);
}
const minValueExample = minValue(exampleArray, function (result) {
  return result * 2;
});
console.log(minValueExample);
