//js 코드
const loginForm = document.getElementById("login-form");
const loginId = loginForm.querySelector("#input-id");
const loginPwd = loginForm.querySelector("#input-psw");
const loginButton = loginForm.querySelector("#btn-doLogin");

//회원가입페이지로 가기 버튼
const goJoinButton = document.getElementById("btn-join");

//로그인 버튼
function onLoginBtnClick() {
  const val_id = loginId.value;
  const val_pwd = loginPwd.value;

  if (val_id === "" || val_pwd === "") {
    alert("아이디/비번을 모두 입력해주세요~~!");
  } else {
    window.location.href = "../pages/tile-pages/main.html";
  }
}

function goJoinClick() {
  window.location.href = "join.html";
}

goJoinButton.addEventListener("click", goJoinClick);

loginButton.addEventListener("click", onLoginBtnClick);
