//js 코드
const circleBtn = document.getElementById("write-form");

function onClickBtn() {
  window.location.href =
    "/mungTeam/minwoo/pages/list-pages/write-list.html?${circle}";
}

circleBtn.addEventListener("click", onClickBtn);
