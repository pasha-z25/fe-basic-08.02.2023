$(document).ready(function(){
  $('#slick').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true,
    arrows: false,
    dots: true,
  });
  $('#owl').owlCarousel({
    loop: true,
    nav: false,
    margin: 40,
    items: 4,
  });
});
	