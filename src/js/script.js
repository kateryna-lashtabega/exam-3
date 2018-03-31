//=require jquery.min.js

// to inlude plugins add "=" sign below
//=require bootstrap.min.js
//=require slick.min.js 
//=require isotope.pkgd.min.js

;(function($){

	$(document).ready(function(){
		
	});

})(jQuery);


$(document).ready(function(){
	$($('.services-accordeon__head-link').attr("href")).show();

	$('.services-accordeon__head-link').on('click', function(event) {
		event.preventDefault();

		$('.services-accordeon__item').hide();

		$(this).addClass("services-accordeon__head-link");
		$($(this).attr("href")).show();
		
		if ($(this).siblings().has(".services-accordeon__head-link--active")){
			$(this).siblings().removeClass("services-accordeon__head-link--active");
		}
		
	});

});


$(window).on('load', function(){
  var $isotope = $('.gallery__item').isotope({
  // set itemSelector so .grid-sizer is not used in layout
  itemSelector: '.gallery__img-wrapper',
  percentPosition: true,
  masonry: {
    // use element for option
    columnWidth: '.gallery__item-sizer'
  }
});

$('.gallery-list__item > a').on('click', function(event){
	event.preventDefault();

	$('.gallery-list__item').removeClass('gallery-list__item--active');
	 $(this).parent().addClass('gallery-list__item--active');
	//$(this).addClass('active').siblings().removeClass('active');	 


	var filterValue = $(this).data('filter');
	$isotope.isotope({ filter: filterValue });
});

});

/*$(document).ready(function(){

  $('.clients-slider').slick({
  	infinite: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	variableWidth: true,
	dots: true
		
  });


});*/