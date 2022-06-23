const pw1 = document.querySelector(".pw1");
const pw2 = document.querySelector(".pw2");
const spans = document.querySelectorAll(".password-span");

pw2.addEventListener("input", () => {
  if (pw2.value != pw1.value && pw1.value != "") {
    spans.forEach((span) => {
      span.textContent = "* Passwords do not match";
    });
  }
  pw2.classList.toggle("error");
  pw1.classList.toggle("error");
});
