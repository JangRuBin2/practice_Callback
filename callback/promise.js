// state -> 기능 수행이 완료가 됐는지(성공 유무)
// 우리가 원하는 데이터를 제공하는사람, 필요한 사람
// state : pending -> fulfilled or rejected

// const { resolve } = require("path");

// producer 제공하는 사람(서버)

const promise = new Promise((resolve, reject) => {
  // 보통은 무거운 일을 함 -> 네트워크에서 데이터를 받아오는데 시간이 꽤 걸림(비동기 처리가 필요)
  // 프로미스가 호출 되는 순간 executor:resolve가 자동적으로 실행 되는 것을 인지해야 함 따라서 변수 선언과 동시에 콘솔의 doingSomething이 바로 호출 됨 -> 우리는 이거말고 비동기 통신이 하고싶엉!
  console.log("doing something");
  setTimeout(() => {
    // 성공한 값을 전달하는 메서드
    resolve(
      "성공적으로 네트워크, 파일에서 받아온 데이터를 resolve라는 콜백 함수를 통해 전달하면 됨"
    );
    // 실패한 값을 전달 메서드
    reject(
      new Error(
        "에러가 나타났을 때 reject에 값을 담아 준다 Error()메서드는 그냥 에러만드는 메서드인 듯?"
      )
    );
  }, 2000);
});

// consumer 제공 받는 사람(클라이언트) -> then, catch, finally 를 통해 데이터를 받아올 수 있음
// promise가 성공적으로 실행되면(then) -> value(값)을 받아옴
promise
  // 잘 실행 됐을 때 사용하는 메서드
  .then((value) => {
    console.log(value);
  })
  // 무언가가 발생했을 때 사용하는 메서드
  .catch((error) => {
    console.log(error);
  })
  // 윗의 명령이 성공하든 실패하든 마지막으로 수행하고 싶을 때 사용
  .finally(() => {
    console.log("finally");
  });

const fetchNumber = new Promise((resolve, reject) => {
  // 성공했다 치고 1이란 데이터를 담아서 보내보자
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  // 성공했으니까 '1'데이터를 요로케 요로케 가공 해줘
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    // 이런식으로 하면 어떻게 될 거 같아?
    return new Promise((resolve, reject) => {
      setTimeout(() => resolve(num - 1), 1000);
    });
  })
  // 어떻게 될 거 같은 값을 콘솔에 담았어
  .then((num) => console.log(num))
  // 혹시라도 에러 뜨면 잡아줘
  .catch((error) => new Error(console.log("연결 안된 듯?")))
  // 그냥 넣어 봄
  .finally(() => console.log("난 그냥 관종"));
