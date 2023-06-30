const main = document.querySelector("#contain");
const editBtn = document.querySelector("#reset");

let memos = JSON.parse(localStorage.getItem("memo"));
memos = memos ?? [];

function setEditBtn(e) {
  const memoId = e.target.parentNode.dataset.id;

  const memo = memos.find((a) => a.id == memoId);
  if (memo) {
    // 클릭된 메모의 제목, 내용 메모장 쓰는 곳에 나타냄
    main.querySelector(".white-date").value = memo.date;
    main.querySelector(".white-content").value = memo.content;

    // 클릭된 메모 배열에서 자르기
    const memoIndex = memos.findIndex((a) => a.id == memoId);
    memos.splice(memoIndex, 1);

    // 자른 메모 배열 로컬스토리지에 저장
    localStorage.setItem("memos", JSON.stringify(memos));

    // 화면에 보여주기
    setMemo();
  }
}

editBtn.addEventListener("click", setEditBtn);
