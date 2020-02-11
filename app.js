window.addEventListener("DOMContentLoaded", (e) => {
  let clickHandler = document.getElementById("hit-me");
  clickHandler.addEventListener("click", (e) => {
    alert("Hey!");
  });
});