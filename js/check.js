document.addEventListener("DOMContentLoaded", function () {
  const urlParams = new URLSearchParams(window.location.search);
  const memoId = urlParams.get("whiteBoxId");

  const memos = JSON.parse(localStorage.getItem("memos"));

  if (!memos || memos.length === 0) {
    console.log("No memos found");
    return;
  }

  const memo = memos.find((memo) => memo.id === memoId);

  if (memo) {
    document.getElementById("date").innerHTML = memo.date;
    document.getElementById("content").innerHTML = memo.content;
  }
});
