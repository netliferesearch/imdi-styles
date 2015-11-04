/*------------------------------------*\
    SNIPPETS
    Generic functions to use
\*------------------------------------*/	

function getQueryParams(qs) {
    qs = qs.split("+").join(" ");
    var params = {},
        tokens,
        re = /[?&]?([^=]+)=([^&]*)/g;

    while (tokens = re.exec(qs)) {
        params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
    }

    return params;
}

var $_GET = getQueryParams(document.location.search);

$( document ).ready(function() {
  
	/*------------------------------------*\
	    MAIN MENU TOGGLE
	    Open the main menu if the menu button in the header is pressed
	\*------------------------------------*/	

	$('[data-behaviour="main-menu-toggle"]').click(function( event ) {
		
		// Prevent the fallback #anchor tag to move focus
		event.preventDefault(); 
		
		// Toggle menu button
		if($(this).attr('aria-expanded') === "false"){
			$(this).attr('aria-expanded', "true");

			// Set min height to 100% of window on desktop
	        var a = $(window).height();
	        var b = $('#footer').height();
	        if (a > b) {
	            $('#footer').css('height', a);
	            $('#footer__bg').css('height', a);
	        }			
			
		} else {
			$(this).attr('aria-expanded', "false");		

			// Reset height
            $('#footer').css('height', 'auto');
            $('#footer__bg').css('height', 'auto');     
		}
		
		// Toggle menu overlay
		$('#page-content').toggle();
		$('#footer').toggleClass($('#footer').attr('data-toggle-menu'));	
		$('#header').toggleClass($('#header').attr('data-toggle-menu'));	
					
	});  
  
	/*------------------------------------*\
	    MAIN SEARCH TOGGLE
	    Open a searchfield in the header when the search button is pressed. 
	    Is removed if the focus moves away from the search input field, or search button.
	\*------------------------------------*/	

	$('[data-behaviour="main-search-toggle"]').click(function( event) {
		
		// Prevent the fallback #anchor tag to move focus
		event.preventDefault();	
		
		$('#header').toggleClass($('#header').attr('data-toggle-search'));	
		
		// Set focus in 
		$('#header-search').focus();
				
	});  
	
	$('body').on('blur', '#header-search', function() {  
		setTimeout(function(){
			if(!$('#header-search-button').is(":focus")){
				$('#header').removeClass($('#header').attr('data-toggle-search'));
			}
		}, 500);		
	}); 		

	$('body').on('blur', '#header-search-button', function() {  
		setTimeout(function(){
			if(!$('#header-search').is(":focus")){
				$('#header').removeClass($('#header').attr('data-toggle-search'));
			}		
		}, 500);		
	}); 
  
	/*------------------------------------*\
	    TOGGLE - ACCESSIBLE
	\*------------------------------------*/	
	

	$('[data-behaviour="toggle"]').click(function( event ) {
		
		// Prevent the fallback #anchor tag to move focus
		event.preventDefault();			
		
	    // Set duration of animation in miliseconds
	    var transition_duration = 200;
	    
	    // Get classes and relationships
	    var toggle_class_expanded = $(this).data('class-expanded');
	    var section = '#' + $(this).attr('aria-controls');    
	    var section_class_expanded = $(section).data('class-expanded');
	    var section_class_contracted = $(section).data('class-contracted');	    
	    var section_caption_expanded = $(this).data('caption-expanded');
	    var section_caption_contracted = $(this).data('caption-contracted');    
	    
	    // Get current state
	    var state = $(this).attr('aria-expanded') === 'false' ? true : false;    
	    
	    if(section_caption_contracted){
		    if($(this).hasClass(toggle_class_expanded)){
			    $(this).html(section_caption_contracted);
		    } else {
			    $(this).html(section_caption_expanded);		    
		    }
	    }    
	    
	    // Toggle attributes
	    $(this).attr('aria-expanded', state);    
	    $(section).attr('aria-hidden', !state);  
	    $(this).toggleClass(toggle_class_expanded);
	    if(state){ 
	        // On opening
	        $(section).toggle(0,function(){
	            // Delay to be able to use css transitions and hide from screenreaders
   	            $(section).removeClass(section_class_contracted);
	            $(section).addClass(section_class_expanded); 
	           // $(section).focus();
	        });
	        if(section_caption_contracted){
			    $(this).html(section_caption_contracted);
		    }
	    } else { 
	        // On closing
	        $(section).removeClass(section_class_expanded);
	        $(section).addClass(section_class_contracted);	        
	        setTimeout(function() { $(section).toggle(); }, transition_duration);
	        if(section_caption_contracted){
			    $(this).html(section_caption_expanded);
		    }
	    }
	
	});  
    
	$('[data-behaviour="toggle"]').each(function() {
	    // Hide sections on load
	    var section = $(this).attr('data-controls');
	    //var state = $(this).attr('aria-expanded') === 'false' ? true : false; 
	    $(this).attr('aria-expanded','false');
	    $(this).attr('aria-controls',section);
	    $(this).attr('role','button');	    	    
	    $('#' + section).attr('aria-hidden','true');
	    $('#' + section).hide();
	    // If the url has an open section parameter
	    if ($_GET['toggle'] && $_GET['toggle'] === section){
		    $(this).trigger("click");
	    }
	    // If the section is marked to expand
	    if ( $(this).attr('data-state') === 'expanded'){
		    $(this).trigger("click");
	    }
	});
	
  
	/*------------------------------------*\
	    TRIGGER
	\*------------------------------------*/	
	

	$('[data-behaviour="trigger"]').click(function( event ) {
		// Prevent the fallback #anchor tag to move focus
		event.preventDefault();			
		
		var target = '#' + $(this).attr('data-controls');  
		
		$(target).focus();		
		$(target).trigger("click");		
		
	});	
	
	
	/*------------------------------------*\
	    SLECT ALL
	\*------------------------------------*/	
	

	$('[data-behaviour="selectall"]').click(function( event ) {
		$(this).select();		
		
	});		
	
	/*------------------------------------*\
	    SMOOTH SCROLLING
	\*------------------------------------*/		
	
	/* Basics lifted from a CSS Tricks demo (http://css-tricks.com/snippets/jquery/smooth-scrolling/), with focus() and URL hash updating added where commented */
	  $('a[href*=#]:not([href=#]):not([data-behaviour="main-search-toggle"]):not([data-behaviour="main-menu-toggle"]):not([data-behaviour="toggle"])').click(function() {
	    var $linkElem = $(this);
	    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	      if (target.length) {
	        $('html,body').animate({
	          scrollTop: (target.offset().top - 30)
	        }, 1000, function() {
	          /* ADDED: focus the target */
	          target.focus();
	          /* end ADDED */
	          /* ADDED: update the URL */
	          window.location.hash = $linkElem.attr('href').substring(1);
	         // window.location.hash = $(this).attr('href').substring(1, $(this).attr('href').length);
	          /* end ADDED */
	        });
	        return false;
	      }
	    }
	  });	

	/*------------------------------------*\
	    CARSOUSEL ON MOBILE
	\*------------------------------------*/	
	var target = $('[data-behaviour="carousel"]');
    var toggleSlick = function () {
        if ($(window).width() < 546) {
          target.slick({
            	slidesToShow: 1,
                adaptiveHeight: true
            });
        } else {
          target.slick('unslick');
        }
    }

    $(window).resize(toggleSlick);
    toggleSlick();

});