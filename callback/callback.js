class UserStorage {
  //원래는 로그인을 하면 사용자에 관련된 자료를 한번에 받아 오는게 맞다 -> 콜백지옥을 직접 만들어 보는 실험

  // 로그인
  loginUser(id, password, onSuccess, onError) {
    // 서버에서 뭔가 통신하는 척 하려고 setTimeout사용 ㅋㅋ
    setTimeout(() => {
      if (
        // 대충 회원정보들 -> 유효성 검사
        (id === "ellie" && password === "dream") ||
        (id === "coder" && password === "academy")
      ) {
        // 성공시에 결과값을 전달하는 메서드
        onSuccess(id);
      } else {
        // 실패시에 결과값을 전달하는 메서드
        onError(new Error("존재하지 않는 계정입니다"));
      }
    }, 2000);
  }
  // 사용자 권한 확인
  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === "ellie") {
        onSuccess({ name: "ellie", role: "admin" });
      } else {
        // 관리자가 아니면
        onError(new Error("관리자가 아닙니다ㄴ"));
      }
    }, 1000);
  }
}

// 호출과 동시에 백엔드와 통신을 해봅시다
// 클래스(백엔드)와 통신하기 위한 변수 선언
const userStorage = new UserStorage();
// 회원 정보 입력
const id = prompt("enter your id");
const password = prompt("enter your password");
// 유저 스토리지에서 로그인을 해야함
// id, pw 데이터를 받아오고 success,error도 받아와야 함
userStorage.loginUser(
  id,
  password,
  // 로그인이 됐으면 권한 확인 해야지
  (user) => {
    // 권한이 확인 됐으면 로그인 데이터랑 성공 실패 받아와야지
    userStorage.getRoles(
      user,
      (userwithRole) => {
        alert(
          `Hello ${userwithRole.name}, you have a ${userwithRole.role}role`
        );
      },
      (error) => {
        console.log(error);
      }
    );
  },
  (error) => {
    console.log(error);
  }
);
