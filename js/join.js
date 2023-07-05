const joinBtn = document.getElementById("btn-save");

function goLogin() {
  window.location.href = "login.html";
}

joinBtn.addEventListener("click", goLogin);
