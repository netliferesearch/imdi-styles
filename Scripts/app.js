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
	
	$('[data-behaviour="toggle"]').each(function() {
	    // Hide sections on load
	    var section = $(this).attr('data-controls');
	    //var state = $(this).attr('aria-expanded') === 'false' ? true : false; 
	    $(this).attr('aria-expanded','false');
	    $(this).attr('aria-controls',section);
	    $(this).attr('role','button');	    	    
	    $('#' + section).attr('aria-hidden','true');
	    $('#' + section).hide();
	});
	
	$('[data-behaviour="toggle"]').click(function() {
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
	    event.preventDefault();
	
	});  
  
});