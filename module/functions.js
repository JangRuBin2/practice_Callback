function one() {
  // 숫자를 리턴
  return 1;
}
// function two() {
//   // 문자를 리턴
//   return "1";
// }
// // 함수 내부를 들여다 보기전에는 문자 1이라는 것이 확인이 절대 불가능
// two() === "1";
// 함수에 이름으로 문자를 리턴함을 명시하던가
function twoReturnString() {
  return "1";
}

// return값이 bolean 이면 함수 이름에 'is'를 붙이는게 암묵적인 룰
function isThree() {
  return true;
}

// 호출 전에는 함수인데 호출 후에는 객체가 되는 경우
function four() {
  return {
    // 이 함수는 객체이다.
    a: 1,
    b: "2",
    c: true,
  };
}
// 까보기 전에는, debuging 하기 전에는 안의 내용을 알 수 없다. -> return값을 봐야한다. -> return만 알아내면 쓸 수 있다. 굳이 함수의 내부를 들여다보지 않아도 됨

// return을 안쓰는 경우
function five() {
  let a = 1 + 1;
}
