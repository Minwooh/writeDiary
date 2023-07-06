//js 코드-- 저장하는 코드
const saveBtn = document.getElementById("save");
const all = document.getElementById("white");

let memos = JSON.parse(localStorage.getItem("memos"));
memos = memos ?? [];

saveBtn.addEventListener("click", saveContent);

function saveContent() {
  console.log("save");

  let newMemo = {};

  let memoDate =
    year + "년 " + month + "월 " + day + "일 " + dayOfWeek + "요일";

  let memoContent = all.querySelector("#content").value;

  let id = JSON.parse(localStorage.getItem("id"));
  id = id ?? 0;

  //댓글 배열 추가하기
  let comentarr = [];

  newMemo.id = id;
  newMemo.date = memoDate;
  newMemo.content = memoContent;
  //댓글
  newMemo.comentarr = comentarr;

  memos.push(newMemo);

  localStorage.setItem("memos", JSON.stringify(memos));
  localStorage.setItem("id", JSON.stringify(++id));
  localStorage.setItem("comentarr", JSON.stringify(comentarr));

  window.location.href = `/pages/tile-pages/main.html?memo=${encodeURIComponent(
    JSON.stringify(newMemo)
  )}`;
}

var input = document.getElementById("content");
var logo = document.getElementById("change-img");

input.addEventListener("input", function () {
  var text = input.value;
  //console.log("in!");

  logo.src = "/images/ic_round-image.png";
});
