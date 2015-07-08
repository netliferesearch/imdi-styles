$( document ).ready(function() {
  
	/*------------------------------------*\
	    MAIN MENU TOGGLE
	    Open the main menu if the menu button in the header is pressed
	\*------------------------------------*/	

	$('body').on('click', '#main-menu-toggle', function() {
		
		// Toggle menu button
		if($(this).attr('aria-expanded') === "false"){
			$(this).attr('aria-expanded', "true");
		} else {
			$(this).attr('aria-expanded', "false");		
		}
		
		// Toggle menu overlay
		$('#page-content').toggle();
		$('#footer').toggleClass($('#footer').attr('data-toggle-menu'));	
		$('#header').toggleClass($('#header').attr('data-toggle-menu'));	
		
		// Prevent the fallback #anchor tag to move focus
		 event.preventDefault();			
	});  
  
	/*------------------------------------*\
	    MAIN SEARCH TOGGLE
	    Open a searchfield in the header when the search button is pressed. 
	    Is removed if the focus moves away from the search input field, or search button.
	\*------------------------------------*/	

	$('body').on('click', '#main-search-toggle', function() {
		
		$('#header').toggleClass($('#header').attr('data-toggle-search'));	
		
		// Set focus in 
		$('#header-search').focus();
		
		// Prevent the fallback #anchor tag to move focus
		 event.preventDefault();			
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
	
	$('.js-toggle').each(function() {
	    // Hide sections on load
	    var section = '#' + $(this).attr('aria-controls');
	    //var state = $(this).attr('aria-expanded') === 'false' ? true : false; 
	    $(this).attr('aria-expanded','false');
	    $(section).attr('aria-hidden','true');
	    $(section).attr('tabindex','-1');
	    $(section).hide();
	});
	
	$('.js-toggle').click(function() {
	    // Set duration of animation
	    var transition_duration = 250;
	    
	    // Get classes and relationships
	    var toggle_class_open = $(this).data('open');
	    var section = '#' + $(this).attr('aria-controls');    
	    var section_class_open = $(section).data('open');
	    var section_caption_open = $(this).data('open_caption');
	    var section_caption_close = $(this).data('close_caption');    
	    
	    // Get current state
	    var state = $(this).attr('aria-expanded') === 'false' ? true : false;    
	    
	    if(section_caption_close){
		    if($(this).hasClass(toggle_class_open)){
			    $(this).html(section_caption_close);
		    } else {
			    $(this).html(section_caption_open);		    
		    }
	    }    
	    
	    // Toggle attributes
	    $(this).attr('aria-expanded', state);    
	    $(section).attr('aria-hidden', !state);  
	    $(this).toggleClass(toggle_class_open);
	    if(state){ 
	        // On opening
	        $(section).toggle(0,function(){
	            // Delay to be able to use css transitions and hide from screenreaders
	            $(section).toggleClass(section_class_open); 
	           // $(section).focus();
	        });
	        if(section_caption_close){
			    $(this).html(section_caption_close);
		    }
	    } else { 
	        // On closing
	        $(section).toggleClass(section_class_open);
	        setTimeout(function() { $(section).toggle(); }, transition_duration);
	        if(section_caption_close){
			    $(this).html(section_caption_open);
		    }
	    }
	    event.preventDefault();
	
	});  
  
});