const circleBtn = document.getElementById("write-form");

function onClickBtn() {
  window.location.href = "/pages/write.html?${circle}";
}

circleBtn.addEventListener("click", onClickBtn);
