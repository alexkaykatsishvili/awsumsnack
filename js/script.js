;(function($){
	"use strict";

	$('.ingredients__photo-slider').slick({

});
	$('.social').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
  	 responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
	$('.main-top-product-slider').slick({
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 2,
  	 responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
      }
    },
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 320,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

  $('.hov').hover(function() {
        $('.table').fadeIn('fast');
    },function() {
        $('.table').fadeOut('fast');
    }
);
})(jQuery);