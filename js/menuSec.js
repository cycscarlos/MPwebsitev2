$(document).ready(function () {
  var altura = $(".menu").offset().top;

  $(window).on("scroll", function () {
    if ($(window).scrollTop() > altura) {
      $(".menu").addClass("menu-fixed menu-fixed-link");
    } else {
      $(".menu").removeClass("menu-fixed menu-fixed-link");
    }
  });
});
