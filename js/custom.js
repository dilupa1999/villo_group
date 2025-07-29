 jQuery(document).ready(function () {
    'use strict';
    /** =====================================
    *   Search Box
    * =====================================**/
   	$('.search-box a').on('click', function(e) {
        e.preventDefault();
        $('.top-search-input-wrap').addClass('show');
   	});
   	$(".top-search-input-wrap .top-search-overlay, .top-search-input-wrap .close-icon").on('click', function(){
        $('.top-search-input-wrap').removeClass('show');
   	});
    /*** =====================================
    * Preloder
    * ==================================== ***/
	$(window).on('load', function(){
        /** ===== Preloder ========**/
	    $('.preloader').fadeOut();
	});
    /*** =====================================
    * Award hover
    * ==================================== ***/
	$('.award').on('mouseenter', function(){
	    $('.award').removeClass('active');
        $(this).addClass('active');
	});
    /**
    * =====================================
    * MixItUp
    * =====================================
    */
    $('#grid').mixItUp();
    $('.filter-options ul li:first-child a').addClass("active");
    /** =====================================
    *  Back to top
    * ===================================== **/
    $(window).scroll(function(){
        if ($(this).scrollTop()>10) {
            $('#toTop').addClass('backtop-top-show');
        } else {
            $('#toTop').removeClass('backtop-top-show');
        }
    })
    $("#toTop").on('click',function (e) {
        e.preventDefault();
       $("html, body").animate({scrollTop: 0}, 1000);
    });

    /**=====================================
    *  carousel
    * =====================================*/
	var owlSlider = $('.owl');
	owlSlider.each( function() {
		var $carousel = $(this);
		$carousel.owlCarousel({
			nav :JSON.parse($carousel.attr('data-navigation')),
			dots: JSON.parse($carousel.attr('data-pagination')),
			autoplay: JSON.parse($carousel.attr('data-autoplay')),
            loop:true,
            margin:JSON.parse($carousel.attr('data-margin')),
            navText: [
        		"<i class='icon-icomoon-arrow-right'></i>",
        		"<i class='icon-icomoon-arrow-right'></i>"
        	],
            responsive:{
               0:{
                   items:$carousel.attr('data-itemsMobile'),
               },
               480:{
                   items:$carousel.attr('data-itemsTablet'),
               },
               768:{
                   items:$carousel.attr('data-itemsDesktopSmall'),
               },
               1200:{
                   items:$carousel.attr('data-itemsDesktop'),
               }
           }
		});
	});
    /*** =====================================
    * Preloder
    * ==================================== ***/
	$(window).on('load', function(){
	    $('.preloader').fadeOut(100);
	});
    /** =====================================
	*  Popup Video
	* ===================================== **/

	var popup = $('.popup-active');
	popup.each( function() {
		var $popup = $(this);
		$popup.magnificPopup({
            items: {
		 		src: $popup.attr('data-link')
			},
			type: 'iframe', // this is default type
            mainClass: 'mfp-fade',
            zoom: {
            enabled: true, // By default it's false, so don't forget to enable it

            duration: 300, // duration of the effect, in milliseconds
            //easing: 'ease-in-out', // CSS transition easing function

          }
		});
	});
    $('.match-height-active > div').matchHeight();
    /** =====================================
    *  Wow JS
    * ===================================== **/
    if($('.wow').length){
        var wow=new WOW( {
            boxClass: 'wow', // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset: -20, // distance to the element when triggering the animation (default is 0)
            mobile: false, // trigger animations on mobile devices (default is true)
            live: true, // act on asynchronously loaded content (default is true)
            callback: function(box) {}
            , scrollContainer: true // optional scroll container selector, otherwise use window
        }
        );
       wow.init();
    }
});
