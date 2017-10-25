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


var width = document.body.clientWidth;

document.getElementById("screen_size").innerHTML = width;

  if (width < 834) 
  {
    $(detalles).css("position", "fixed");
    $(detalles).css("top", "100px");
    
  }
  //if (width > 834) 
  //  {
    //  $(detalles).css("position", "absolute");
    //}
      
    };



$(document).ready(main);


