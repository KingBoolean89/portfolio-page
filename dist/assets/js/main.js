

(function($) {

	skel.breakpoints({
		xlarge: '(max-width: 1680px)',
		large: '(max-width: 1280px)',
		medium: '(max-width: 980px)',
		small: '(max-width: 736px)',
		xsmall: '(max-width: 480px)'
	});

	$(function() {

		var	$window 	= $(window),
			$body 		= $('body'),
			$header 	= $('#header');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				window.setTimeout(function() {
					$body.removeClass('is-loading');
				}, 100);
			});

		// Prioritize "important" elements on medium.
			skel.on('+medium -medium', function() {
				$.prioritize(
					'.important\\28 medium\\29',
					skel.breakpoint('medium').active
				);
			});

		// Gallery.
			$('.gallery').poptrox();

	});

})(jQuery);

document.addEventListener('DOMContentLoaded', function(){
	let wrapper = document.getElementById('wrapper');
	let topLayer = wrapper.querySelector('.top');
	let handle = wrapper.querySelector('.handle');
	let skew = 0;
	let delta = 0;
  
	if(wrapper.className.indexOf('skewed') != -1){
	  skew = 1000;
	}
	
	wrapper.addEventListener('mousemove', function(e){
	  delta = (e.clientX - window.innerWidth / 2) * 0.5;
	
	  handle.style.left = e.clientX + delta + 'px';
  
	  topLayer.style.width= e.clientX + skew + delta + 'px';
	});
  });

  $(function(){  // $(document).ready shorthand
	$('.monster').fadeIn('slow');
  });
  
  $(document).ready(function() {
	  
	  /* Every time the window is scrolled ... */
	  $(window).scroll( function(){
	  
		  /* Check the location of each desired element */
		  $('.hideme').each( function(i){
			  
			  var bottom_of_object = $(this).position().top + $(this).outerHeight();
			  var bottom_of_window = $(window).scrollTop() + $(window).height();
			  
			  /* If the object is completely visible in the window, fade it it */
			  if( bottom_of_window > bottom_of_object ){
				  
				  $(this).animate({'opacity':'1'},1500);
					  
			  }
			  
		  }); 
	  
	  });
	  
  });
  var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }


}