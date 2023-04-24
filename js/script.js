$('.popup').click(function () {
  // console.log($('.popup-wrapper'));

  $('.popup-wrapper').addClass('active');

  if ($('body').css('overflow') === 'hidden') {
    $('body').css('overflow', '');
  } else {
    $('body').css('overflow', 'hidden');
  }
});
