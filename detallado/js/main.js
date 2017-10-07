var main = function() {
  $('#carrusel').slick({
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 2000
  });



  $('.opc').slick({
    slidesToScroll: 1,
    autoplay: false,
    arrows: false,
    autoplaySpeed: 2000
  });
};


$(document).ready(main);


