// function data() {
//   let a = 1;
//   return a;
// }

// function plus(first, second) {
//   let plus = first + second;
//   return plus;
// }

// function number(first, second, callback) {
//   let a = first;
//   let b = second;
//   return callback(a, b);
// }
// function plusNumber(a, b) {
//   return a + b;
// }

// console.log(number(1, 2, plusNumber));

// 최소 값을 구해주는 함수
const exampleArray = [33, 2, 3, 4, 5, 6, 67, 2];
function minValue(array, callback) {
  let min = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i];
    }
  }
  return callback(min);
}
// 호출
const minValueExample = minValue(exampleArray, function (result) {
  return result;
});
console.log(minValueExample);
