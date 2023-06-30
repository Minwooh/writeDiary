function delBtn(e) {
  console.log("del");
  document.getElementById("date").innerHTML = "";
  document.getElementById("content").value = "";

  const memoIdToDelete = e.target.parentNode.dataset.id;

  // memos 배열에서 id가 memoIdToDelete인 항목을 찾기
  const indexToDelete = memos.findIndex((memo) => memo.id === memoIdToDelete);

  // indexToDelete가 유효한 값인 경우에만 삭제 수행
  if (indexToDelete !== -1) {
    // memos 배열에서 해당 항목 삭제
    memos.splice(indexToDelete, 1);

    // 로컬 스토리지에 변경된 memos 배열 저장
    localStorage.setItem("memos", JSON.stringify(memos));

    // 변경된 메모 목록 다시 표시
    //setMemo();
  }

  window.location.href = "main.html";
}
