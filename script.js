const hamburger = document.querySelector(".hamburger");
const contact = document.querySelector(".contact");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
contact.addEventListener("click", () => {
  $(".cf_box").addClass("active");
});

$(".cf_trigger").click(function (event) {
  $(".cf_box").addClass("active");
});
$(".cf_close").click(function (event) {
  $(".cf_box").removeClass("active");
});
$(".box").click(function (event) {
  console.log("hello");
  $(".project_info").addClass("project_active");
});
$(".project_close").click(function (event) {
  console.log("close me");
  $(".project_info").removeClass("project_active");
});
