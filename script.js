const hamburger = document.querySelector(".hamburger");
const contact = document.querySelector(".contact");
const hire = document.querySelector(".hire_me");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});
hire.addEventListener("click", () => {
  $(".cf_box").addClass("active");
});
contact.addEventListener("click", () => {
  $(".cf_box").addClass("active");
  navMenu.classList.toggle("active");
});

$(".cf_trigger").click(function (event) {
  $(".cf_box").addClass("active");
});
$(".cf_close").click(function (event) {
  $(".cf_box").removeClass("active");
});

//project 2
$(".another_box").click(function (event) {
  $(".project_info2").addClass("project_active2");
});
$(".project_close2").click(function (event) {
  console.log("close me");
  $(".project_info2").removeClass("project_active2");
});
//project

$(".box").click(function (event) {
  console.log("hello");
  $(".project_info").addClass("project_active");
});
$(".project_close").click(function (event) {
  console.log("close me");
  $(".project_info").removeClass("project_active");
});
