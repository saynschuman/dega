(function ($) {

$('.slider').slick({
	arrows: false,
	fade: true,
  	cssEase: 'linear',
  	autoplay: true,
  	autoplaySpeed: 2500
})

$('.specialists').slick({
	prevArrow: '<div class="prev"></div>',
	nextArrow: '<div class="next"></div>'
});

}(jQuery));