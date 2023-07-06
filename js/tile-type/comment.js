const comentSave = document.getElementById("send-btn");
const commentsResult = document.getElementById("comment-result");

function saveComent() {
  //console.log("click save btn!");
  const urlParams = new URLSearchParams(window.location.search);
  const clickedId = urlParams.get("id");

  let memos = JSON.parse(localStorage.getItem("memos")) || [];

  for (let i = 0; i < memos.length; i++) {
    const memo = memos[i];
    //console.log(memo.comentarr);
    if (String(memo.id) === clickedId) {
      //댓글 입력받은 것을 memo의 coment배열에 추가하는 과정
      let comentAdd = document.getElementById("coment").value;

      memo.comentarr.push(comentAdd);
      // 변경된 memos 배열을 로컬 스토리지에 저장
      localStorage.setItem("memos", JSON.stringify(memos));

      //새로운 댓글 요소 생성 및 삽입
      const commentContainer = document.createElement("div");
      commentContainer.classList.add("comment-container");

      const avatarImage = document.createElement("img");
      avatarImage.src = "/images/Ellipse 3.png";
      avatarImage.alt = "Avatar";
      avatarImage.classList.add("comment-img");

      const commentText = document.createElement("p");
      commentText.textContent = comentAdd;
      commentText.classList.add("comment-write");

      const commentName = document.createElement("p");
      commentName.textContent = "미영";
      commentName.classList.add("comment-name");

      commentContainer.append(avatarImage, commentText, commentName);
      commentsResult.append(commentContainer);

      document.getElementById("coment").value = "";

      // 댓글 개수 업데이트
      let commentCount = 0;
      commentCount += memo.comentarr.length;

      const commentCountElement = document.getElementById("comment-count");
      commentCountElement.textContent = `(${commentCount})`;
    }
  }
}

comentSave.addEventListener("click", saveComent);

//안됨
window.onload = function () {
  const urlParams = new URLSearchParams(window.location.search);
  const clickedId = urlParams.get("id");

  // 이전에 저장된 댓글 데이터 가져오기
  const memos = JSON.parse(localStorage.getItem("memos")) || [];
  let commentCount = 0;
  // 이전에 저장된 댓글 데이터를 화면에 출력
  for (let i = 0; i < memos.length; i++) {
    const memo = memos[i];

    if (String(memo.id) === clickedId) {
      const commentArr = memo.comentarr;

      commentCount += commentArr.length;

      for (let j = 0; j < commentArr.length; j++) {
        const comment = commentArr[j];
        const commentContainer = document.createElement("div");
        commentContainer.classList.add("comment-container");

        const avatarImage = document.createElement("img");
        avatarImage.src = "/images/Ellipse 3.png";
        avatarImage.alt = "Avatar";
        avatarImage.style = "width: 37px; height: 37px";
        avatarImage.classList.add("comment-img");

        const commentText = document.createElement("p");
        commentText.textContent = comment;
        commentText.classList.add("comment-write");

        const commentName = document.createElement("p");
        commentName.textContent = "미영";
        commentName.classList.add("comment-name");

        commentContainer.append(avatarImage, commentText, commentName);
        commentsResult.append(commentContainer);
      }
    }
  }

  const commentCountElement = document.getElementById("comment-count");
  commentCountElement.textContent = `(${commentCount.toString()})`;
};
