// function six() {
//   return 1;
// }
// const a = six(); // 데이터가 변한다
// console.log(a);

// function six(number) {
//   return number + 1;
// }
// // 나의 의도와 다르게 "문자"+ 1(숫자)형식으로 데이터가 출력 된다.
// // 에러는 아니고 나의 의도와 다르게 동작한 '버그'가 발생
// const a = six("ssss");
// console.log(a);

// function six(number, append) {
//   // "문자 + 숫자"를 하지 않기 위해 &&연산자 추가하여 '숫자 + 숫자'의 데이터를 얻기위한 조건들을 추가했다
//   // 하지만 if문을 남발하게 되니까 typescript로 넘어가게 됨
//   // if (typeof number == "number" && typeof append === "number") {
//   return number + append;
// }
// // 나는 숫자-숫자도 하고 싶어서 이렇게 만들었는데 만약 이런식의 함수가 수백개가 된다면...? 호출할 때만 커스터마이징 할 수는 없을까? '정적'으로 만드는게 아닌 '동적'으로 만들 수 없을까?
// function seven(number, append) {
//   return number - append;
// }
// 덧셈, 곱셈, 뺄셈을 모두 동적으로 추가 가능한 함수는 없을까?
// 지금까지는 실행구문을 먼저 만들어 놓고 필요할 때 '호출' 할 때 사용 했다 -> '정적'으로 제작, 필요할 때 '호출', 'callback'
// function eight(number, append, callback) {
//   // callback함수에 argument(인자)를 전달 받았다
//   // 매개변수도 변수(변할 수 있는 것)이기 때문에 꼭 숫자,문자,불린 값만 들어오진 않음 -> 함수도 매개변수가 될 수 있다.
//   let a = number + 1;
//   let b = append + 2;
//   return callback(a, b);
// }

// console.log(
//   eight(1, 2, function (a, b) {
//     return a + b;
//   })
// );
// 콜백 함수란 다른 함수의 '인자로 이용 되는 함수'
// 어떤 이벤트에 의해 호출 되어지는 함수(계산기에 사용 가능한 듯)
// 그러면 계산기를 만드려 하면 버튼 하나에 함수(onclick)하여 display에 숫자를 추가하는 방식으로 할 수 있겠네 그리고 +,- 등의 사칙연산은 display에 넣어진 값들을 핸들링 하는 이벤트로 만들면 되겠다.

// 1트 객체 안에 함수를 담아서 object.key()메서드를 활용해 key값을 [배열]로 저장하고 배열 값에 따라 결과값을 다르게 해보고 싶다 -> 이거는 객체에 담을게 아니라 함수안에 함수를 넣고 if돌렸어야지 멍청아
const allCalculator = {
  number: function (number, number2, callback) {
    let a = number;
    let b = number2;
    return callback(a, b);
  },
  // 덧셈을 해주는 함수
  plusCalculator: function (a, b) {
    return a + b;
  },
  // 곱셈을 해주는 함수
  multiplyCalculator: function (a, b) {
    return a * b;
  },
  // 뺄셈을 해주는 함수
  subtractionCalculator: function (a, b) {
    return a - b;
  },
  // 나누기를 해주는 함수
  divideCalculator: function (a, b) {
    return a / b;
  },
};
// 이런 식으로 가능은 함
console.log(allCalculator.number(1, 2, allCalculator.multiplyCalculator));
// 이 객체를 계산기에 집어넣으면 그게 계산기 아닌가? 버튼에 1,2를 입력한 숫자 값으로 넣고 버튼 클릭시 return으로 위처럼 함수를 호출하면 된다고 생각

// 예를 들어 이런느낌으로? 내 생각임
// let button = document.getElementById("btn");
// button.addEventListener("click", 함수);

// function calculator(number, number2, callback) {
//   let a = number;
//   let b = number2;
//   return callback(a, b);
//   function plusCalculator(a, b) {
//     return a + b;
//   }
// } 안되넹
// calculator(1, 2, plusCalculator());
// let calculatorKey = Object.keys(allCalculator);
// console.log(calculatorKey);

// function myFeeling(feel, play, dothis) {
//   let feel;
//   let play;
//   return dothis(feel, play);
// }

// function dothis(feel, play) {
//   "만약 내 기분이" + feel + "하다면, 나는" + play + "을 하며 놀 것이다";
// }
// console.dir(myFeeling("행복", "노래", dothis));

// 인자를 전달 받았기 때문에 매개변수를 담지 않아도 됨
// 이런식으로도 가능해짐
// console.log(eight(3, 4, seven));
// console.error("이 매개변수는 숫자여야 동작 함");

// }
// 나의 의도와 다르게 "문자"+ 1(숫자)형식으로 데이터가 출력 된다.
// const a = six(3, 4);
// console.log(a);
// falsy 하다 : 거짓에 무언가를 하고 있는 상태
// const display = document.querySelector(".container");
// console.log(display);
// const inputNumData = document.createElement("div");
// inputNumData.innerHTML = "gk";
// display.appendChild(inputNumData);
