// function six() {
//   return 1;
// }
// const a = six(); // 데이터가 변한다
// console.log(a);

// function six(number) {
//   return number + 1;
// }
// // 나의 의도와 다르게 "문자"+ 1(숫자)형식으로 데이터가 출력 된다.
// 에러는 아니고 나의 의도와 다르게 동작한 '버그'가 발생
// const a = six("ssss");
// console.log(a);

function six(number, append) {
  // "문자 + 숫자"를 하지 않기 위해 &&연산자 추가하여 '숫자 + 숫자'의 데이터를 얻기위한 조건들을 추가했다
  // 하지만 if문을 남발하게 되니까 typescript로 넘어가게 됨
  // if (typeof number == "number" && typeof append === "number") {
  return number + append;
}
// 나는 숫자-숫자도 하고 싶어서 이렇게 만들었는데 만약 이런식의 함수가 수백개가 된다면...? 호출할 때만 커스터마이징 할 수는 없을까? '정적'으로 만드는게 아닌 '동적'으로 만들 수 없을까?
function seven(number, append) {
  return number - append;
}
// 덧셈, 곱셈, 뺄셈을 모두 동적으로 추가 가능한 함수는 없을까?
// 지금까지는 실행구문을 먼저 만들어 놓고 필요할 때 '호출' 할 때 사용 했다 -> '정적'으로 제작, 필요할 때 '호출', 'callback'
function eight(number, append, callback) {
  // callback함수에 argument(인자)를 전달 받았다
  // 매개변수도 변수(변할 수 있는 것)이기 때문에 꼭 숫자,문자,불린 값만 들어오진 않음 -> 함수도 매개변수가 될 수 있다.
  let a = number + 1;
  let b = append + 2;
  return callback(a, b);
}

console.log(
  eight(1, 2, function (a, b) {
    return a + b;
  })
);

// 인자를 전달 받았기 때문에 매개변수를 담지 않아도 됨
// 이런식으로도 가능해짐
// console.log(eight(3, 4, seven));
// console.error("이 매개변수는 숫자여야 동작 함");

// }
// 나의 의도와 다르게 "문자"+ 1(숫자)형식으로 데이터가 출력 된다.
// const a = six(3, 4);
// console.log(a);
// falsy 하다 : 거짓에 무언가를 하고 있는 상태
