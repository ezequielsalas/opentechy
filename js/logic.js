  $(document).ready(function(){
      $('.slider').slider({full_width: true});
 
 	$('a[rel="relativeanchor"]').click(function(){
	    $('html, body').animate({
	        scrollTop: $( $.attr(this, 'href') ).offset().top
	    }, 500);
	    return false;
	}); 

 });
