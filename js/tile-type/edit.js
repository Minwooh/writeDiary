//js 코드
const main = document.querySelector("#contain");
const editBtn = document.querySelector("#reset");

function setEditBtn(e) {
  const urlParams = new URLSearchParams(window.location.search);
  const clickedId = urlParams.get("id");
  console.log(clickedId);

  let memos = JSON.parse(localStorage.getItem("memos")) || [];

  for (let i = 0; i < memos.length; i++) {
    const memo = memos[i];

    if (String(memo.id) === clickedId) {
      memo.content = main.querySelector("#content").value;
      // 변경된 memos 배열을 로컬 스토리지에 저장
      localStorage.setItem("memos", JSON.stringify(memos));

      // 반복문 종료
      window.location.href = "main.html";
    }
  }
}

editBtn.addEventListener("click", setEditBtn);
