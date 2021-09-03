var $ = jQuery; 
$(document).ready(function(){
  // Mobile menu
	$("#mobileMenu").mmenu({
    extensions: {
      "all": ["theme-dark","pagedim-black"]
    },
    offCanvas: {
      zposition : "front"
    }
  });
    // Main Slider 
  $('#mainBanner').slick({
    infinite: true,
    dots: false,
    arrows: false,
	  autoplay: true,
	  speed: 1000,
	  autoplaySpeed:5000,
  	fade: true,
  	cssEase: 'linear'
  });
});

// Main menu sticky	 
var menu_height = $('.asHeader').innerHeight();
$(window).bind('scroll', function(){
if ($(window).scrollTop() >= 50) {		
        $('.asHeader').addClass('sticky');
    } else {
        $('.asHeader').removeClass('sticky');
    }		
});

jQuery(function($){
	$(".fieldBox").each(function(){
		$('form :input').focus(function() {
            $(this).closest('.fieldBox').addClass('active');
	    }).blur(function() {
            $(this).closest('.fieldBox').removeClass('active');
	    });
	});
});
$("a.instaimg").fancybox();

// Admin
$('#allEvents .removeItem').click(function(){
  $(this).closest(".col-md-4").hide();
});
