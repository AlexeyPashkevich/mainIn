$(function () {

  $('.on-sale__inner').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"><img src="images/icons/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"><img src="images/icons/next.svg" alt=""></button>',
  });

  $('.header-bg__inner').slick({
    autoplay: true,
    fade: true,
    autoplaySpeed: 4000,
    appendArrows: $('.slick-arrows'),
    prevArrow: '<button type="button" class="arrows-left arrows-slider"><img src="images/icons/prev.svg" alt=""></button>',
    nextArrow: '<button type="button" class="arrows-right arrows-slider"><img src="images/icons/next.svg" alt=""></button>'
  });

});