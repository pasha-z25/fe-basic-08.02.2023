const slickSlider = document.getElementById('slick');
const owlCarousel = document.getElementById('owl');

$(document).ready(function () {
  if (slickSlider) {
    $('#slick').slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      infinite: true,
      arrows: false,
      dots: true,
      responsive: [
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 1,
          },
        }
      ],
    });
  }

  if (owlCarousel) {
    $('#owl').owlCarousel({
      loop: true,
      nav: false,
      dots: true,
      margin: 40,
      items: 4,
      responsive: {
        0: {
          items: 1,
          margin: 20,
        },
        750: {
          items: 4,
          margin: 40,
        }
      },
    });
  }
});
