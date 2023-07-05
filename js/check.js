//js 코드
document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const memoId = urlParams.get("id");
  //요소확인하기 console.log 삭제 가능
  console.log("memoId: ", memoId);

  const memoDate = urlParams.get("date");
  //요소확인하기 console.log 삭제 가능
  console.log(date);
  const memoContent = urlParams.get("content");

  //화면에 출력하시
  document.getElementById("date").innerHTML = memoDate;
  document.getElementById("content").innerHTML = memoContent;
});
