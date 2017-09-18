$(document).ready(function() {
  $('.carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var scrollDistance = 0;
  $(window).scroll(function() {
    var currentDistance = $(this).scrollTop();
    if (currentDistance >= (scrollDistance + 50)) {
      var navbarHeight = $('.navbar').height();
      $('.navbar').animate({top: -1 * navbarHeight}, 150);
      scrollDistance = currentDistance;
    }else if (scrollDistance >= (currentDistance + 50)) {
      $('.navbar').animate({top: "0px"}, 150);
      scrollDistance = currentDistance;
    }
  });
});
