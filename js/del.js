function delBtn() {
  console.log("del");
  document.getElementById("date").innerHTML = "";
  document.getElementById("content").value = "";

  window.localStorage.removeItem("id");
  window.location.href = "main.html";
}
