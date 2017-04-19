//jQuery begin
$(document).ready(function() {
  //main-nav
  $(".main-nav__item:has('.main-nav__list-lvl2')").on("mouseenter", function() {
    var timer = setTimeout(function() {
      
    }, 200);
    $(this).children(".main-nav__list-lvl2").slideDown();
  });




});
//jQuery end
