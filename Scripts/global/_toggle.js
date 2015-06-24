// Accessible toggle

$('.js-toggle').each(function() {
    // Hide sections on load
    var section = '#' + $(this).attr('aria-controls');
    var state = $(this).attr('aria-expanded') === 'false' ? true : false; 
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