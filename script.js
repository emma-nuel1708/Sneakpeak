document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navlinks = document.getElementById("navlinks");
  const closeBtn = document.getElementById("closeBtn");

  hamburger.addEventListener("click", function () {
    navlinks.classList.add("show");
  });

  closeBtn.addEventListener("click", function () {
    navlinks.classList.remove("show");
  });
});
