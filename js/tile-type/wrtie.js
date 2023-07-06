//js 코드
const circleBtn = document.getElementById("write-form");

function onClickBtn() {
  window.location.href = "/pages/tile-pages/write.html?${circle}";
}

circleBtn.addEventListener("click", onClickBtn);
