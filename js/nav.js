const mobileBar = document.getElementById("mobile");
const navbar = document.getElementById("mobile-navbar");
const cancelBar = document.getElementById("mobile-cancel");
mobileBar.addEventListener("click", (e) => {

    navbar.style.marginRight = "1900px";
  });
  cancelBar.addEventListener("click", (e) => {
    navbar.style.marginRight = "-2000px";
  });