// state -> 기능 수행이 완료가 됐는지(성공 유무)
// 우리가 원하는 데이터를 제공하는사람, 필요한 사람
// state(상대) : pending(대기) -> fulfilled(이행) or rejected(거부)

// producer 제공하는 사람(서버)
// 선언과 동시에 pending(대기)상태가 되고 인자로 resolve,reject를 받는다
const promise = new Promise((resolve, reject) => {
  // 보통은 무거운 일을 함 -> 네트워크에서 데이터를 받아오는데 시간이 꽤 걸림(비동기 처리가 필요)
  // 프로미스가 호출 되는 순간 executor(new Promise에 전달되는 함수)가 자동적으로 실행 됨.
  // 따라서 변수 선언과 동시에 콘솔의 doingSomething이 바로 실행 -> 우리는 이거말고 비동기 통신이 하고싶다.
  console.log("doing something");
  setTimeout(() => {
    // 성공한 값을 전달하는 메서드
    resolve(
      "성공적으로 네트워크, 파일에서 받아온 데이터를 resolve()를 통해 전달 됨 -> 비동기 통신의 상태가 성공이 됨"
    );
    // 실패한 값을 전달 메서드
    reject(
      new Error(
        "에러가 나타났을 때 reject에 값을 담아 준다. Error()메서드는 그냥 에러만드는 메서드인 듯? -> 비동기 통신의 상태가 실패가 됨"
      )
    );
  }, 2000);
});

// consumer 제공 받는 사람(클라이언트) 측에선 -> then, catch, finally 를 통해 데이터를 받아올 수 있음
// promise가 성공적으로 실행되면(then) -> value(값)을 받아옴 : 이행(fulfilled) 상태
promise
  // 잘 실행 됐을 때(resolve) 사용하는 메서드
  .then((value) => {
    console.log(value);
  })
  // 무언가가 발생했을 때(reject) 사용하는 메서드
  .catch((error) => {
    console.log(error);
  })
  // 위 명령이 성공하든 실패하든 마지막으로 수행하고 싶을 때 사용
  .finally(() => {
    console.log("finally");
  });

// 프로미스 안에도 프로미스를 담을 수 있다
const fetchNumber = new Promise((resolve, reject) => {
  // 성공했다 치고 1이란 숫자 데이터를 담아서 보내보자
  setTimeout(() => resolve(1), 1000);
});
// then이 많아지겠지만 콜백지옥보다 직관적이라서 유지보수에 편할 것 같다. -> 복잡해 보이지만 이건 자바스크립트의 특성이라 생각함
fetchNumber
  // resolve를 통해 받은 num('1'데이터)을 요로케 요로케 가공 해줘
  .then((num) => num * 2)
  .then((num) => num * 3)
  .then((num) => {
    // 가공 한 값을 다시 promise를 통해 핸들링
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

// 암탉이 최초로 promise 생성
const getHen = () =>
  new Promise((resolve, reject) => {
    // 정상 실행 되면 settimeout(치킨이란 문자데이터를 저장)
    setTimeout(() => {
      resolve("chicken");
    }, 1000);
  });
// 계란은 닭으로 부터 데이터를 받아서 새 프로미스를 생성
const getEgg = (hen) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${hen}=>egg`);
    }, 1000);
  });

const eggCook = (egg) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(`${egg}=>
      Fried egg`);
    }, 1000);
  });
// 호출
getHen()
  .then((hen) => getEgg(hen))
  .then((egg) => eggCook(egg))
  .then((meal) => console.log(meal));
