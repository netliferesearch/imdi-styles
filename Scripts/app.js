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
	    SELECT ALL
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
  
 	/*------------------------------------*\
	    WIZARD
	\*------------------------------------*/
  $('[data-behaviour="wizard"]').each( function() {
    if(window[$(this).data('source')] !== 'undefined' ) {

      // Load question tree
  		var dataTree = window[$(this).data('source')];
      var dataHistory = [];
      var startId = dataTree[0].Id;
      
      // Define function that is used in every change
  		var updateWizard = function( wrapper, currentId, selectedOption, targetId ) {
    		console.log(currentId + "," + selectedOption + ", " + targetId );

        var dataRow = function (rows, id) {
            var i = null;
            for (i = 0; rows.length > i; i += 1) {
                if (rows[i].Id === id) {
                    return rows[i];
                }
            }
            return null;
        };
    		
    		//if(dataRow(dataTree, targetId).Type == 'step'){
    		
    		// Get data
    		var _question = dataRow(dataTree, targetId).Question;
    		var _instruction = dataRow(dataTree, targetId).Instruction;
    		var _alternatives = dataRow(dataTree, targetId).Alternatives;    		

        // Construct question
        var html = $('<fieldset>');
        $('<legend>').attr({class: 'h3'}).text(_question).appendTo($(html));
        if(_instruction.length > 0)
          $('<p>').attr({class: 'text--small'}).append(_instruction).appendTo($(html));
          
        $.each(_alternatives, function() {
            $('<button>').attr({type: 'button', class: 'button button--secondary'})
              .text(this.Caption)
              .click($.proxy(updateWizard, null, wrapper,  targetId, this.Caption, this.Target))
              .appendTo($(html)); 
        });

    		$(wrapper).html('');
        $(wrapper).append(html);
    		console.log('Ble trykket');
    		// Empty wrapper
    		// Load question
    		// Make html
    		// Update history
  		}
      
      // Define function that reset the interaction
      var resetWizard = function(wrapper, updateWizard) {
        $(wrapper).html('');
        var html = $("<a>", {class: "button button--large"})
          .text('Start veiviser')
          .click($.proxy(updateWizard, null, wrapper,  -1, -1, startId));

        $(wrapper).append(html);
      }
      
  		resetWizard(this, updateWizard, dataTree, dataHistory);
  		
  		
		} else {
  	  $(this).innerHTML("<em>Det skjedde en feil. Vennligst prøv å last siden på nytt.</em>");	
		}
	});

});