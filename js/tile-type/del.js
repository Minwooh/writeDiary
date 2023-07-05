//js 코드
const buttonElement = document.getElementById("trash-img");

function delBtn() {
  const urlParams = new URLSearchParams(window.location.search);
  const clickedId = urlParams.get("id");
  //id 확인, 문자열로 가져옴
  console.log(clickedId);
  let memos = JSON.parse(localStorage.getItem("memos")) || [];
  // memos 배열 순회
  for (let i = 0; i < memos.length; i++) {
    const memo = memos[i];

    console.log(memo);
    if (String(memo.id) === clickedId) {
      // 클릭된 메모를 배열에서 제거
      memos.splice(i, 1);
      // 변경된 memos 배열을 로컬 스토리지에 저장
      localStorage.setItem("memos", JSON.stringify(memos));

      // 반복문 종료
      window.location.href = "main.html";
    }
  }
}

buttonElement.addEventListener("click", delBtn);
