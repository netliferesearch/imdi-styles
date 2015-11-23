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
	

	$('[data-behaviour~="toggle"]').click(function( event ) {
		
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
	        $(section).show(0,function(){
	           // Delay to be able to use css transitions and hide from screenreaders
	           $(section).css( "display", "block"); // Fix for allready visible sections by hover
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
	        setTimeout(function() { $(section).hide(); }, transition_duration);
	        if(section_caption_contracted){
			    $(this).html(section_caption_expanded);
		    }
	    }
	
	});  
    
	$('[data-behaviour~="toggle"]').each(function() {
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
	    CAROUSEL HOVER
	\*------------------------------------*/	
	
	  $('[data-behaviour~="hover-toggle"]').each(function(){
  	  var toggle_class_expanded = $(this).data('class-expanded');
  	  var children = $(this).data('hover-children');
  	  var hover_parent = this;
  	  // Trigger the class on the parent element when children elements receive hover
  	  $(children, this).hover(function () { 
          $(hover_parent).addClass(toggle_class_expanded);
      }, function () {
          $(hover_parent).removeClass(toggle_class_expanded);
      });
  	  
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
          	slidesToScroll: 1,
            adaptiveHeight: true,
            infinite: false,
            focusOnSelect: true,
            prevArrow: '[data-behaviour="carousel-prev"]',
            nextArrow: '[data-behaviour="carousel-next"]'
          });
      } else {
        target.slick('unslick');
      }
  }

  $(window).resize(toggleSlick);
  toggleSlick();
  
 	/*------------------------------------*\
	    WIZARD MODULE BASED ON A JSON VARIABLE
	\*------------------------------------*/
	
  $('[data-behaviour="wizard"]').each( function() {
    if(window[$(this).data('source')] !== 'undefined' ) {

      // Load question tree
  		var dataTree = window[$(this).data('source')];
      var dataHistory = [];
      var startId = dataTree[0].Id;
      var wrapper = this;

      var captionLeadtext = $(this).data('caption-leadtext') ? $(this).data('caption-leadtext') : '';
      var captionStartWizard = $(this).data('caption-start-wizard') ? $(this).data('caption-start-wizard') : 'Start veiviser';      
      var captionHistoryTitle = $(this).data('caption-history-title') ? $(this).data('caption-history-title') : 'Tidligere svar';
      var captionStartOver = $(this).data('caption-start-over') ? $(this).data('caption-start-over') : 'Start på nytt';      
      var captionError = $(this).data('caption-error') ? $(this).data('caption-error') : 'Det skjedde en feil. Vennligst prøv å last siden på nytt.';      

      //
      // Function that reset the interaction
      //

      var resetWizard = function() {

        // Reset history and markup
        dataHistory = [];
        $(wrapper).html('');

        // Construct markup
        var htmlleadtext = $("<p>", {
          html: captionLeadtext
        });
        
        var htmlbutton = $("<button>", {
          type: 'button',
          class: "button button--large", 
          html: captionStartWizard, 
          click: $.proxy(updateWizard, null, -1, -1, startId)
          });

        $(wrapper).append(htmlleadtext);
        $(wrapper).append(htmlbutton);
      }
      
      
      //
      // Function redraws each step
      //
      
  		var updateWizard = function( currentId, selectedOption, targetId ) {

        var dataRow = function (rows, id) {
            var i = null;
            for (i = 0; rows.length > i; i += 1) {
                if (rows[i].Id === id) {
                    return rows[i];
                }
            }
            return null;
        };

        if(currentId != -1){
          dataHistory.push({
            'Id' : currentId, 
            'Question': dataRow(dataTree, currentId).Question,
            'Answer': selectedOption
            });
        }
     		$(wrapper).html('<hr class="line line--light t-margin-bottom"/>');
    		
    		// QUESTION
    		
    		if(dataRow(dataTree, targetId).Type == 'step'){
    		
      		// Get data
      		var _question = dataRow(dataTree, targetId).Question;
      		var _instruction = dataRow(dataTree, targetId).Instruction;
      		var _alternatives = dataRow(dataTree, targetId).Alternatives;    		
  
          // Construct markup
          $(wrapper).append(getQuestion(_question, _instruction, _alternatives, targetId));
          $(wrapper).append(getHistory());
          $(wrapper).find('legend').focus();
        
    		// CONCLUSION
          
        } else if(dataRow(dataTree, targetId).Type == 'conclusion'){

      		// Get data
          var _title = dataRow(dataTree, targetId).Title;
          var _content = dataRow(dataTree, targetId).Content;
          _content = decodeURIComponent(_content.replace(/\+/g, ' ') );
          // Construct markup
          $(wrapper).append(getConclusion(_title, _content));
          $(wrapper).append(getHistory());
          $(wrapper).find('h3').focus();
        
        // ERROR
        
        } else {
          $(wrapper).append('<p><em>' + captionError + '</em></p>');
          $(wrapper).focus(); 
        }
        
  		}
  		
      //
      // Function fornavigating back in history
      //  		
  		
  		var goBackInHistory = function(targetId, index) {
    		// Go back to index and remove the following children in the history
    		dataHistory.splice(index, dataHistory.length - index)

        // Load target question
    		updateWizard(-1, -1, targetId);

    		return false;
  		}

      //
      // Function for constructing HTML for question
      //  		

  		var getQuestion = function(_question, _instruction, _alternatives, targetId) {
          var html = $('<fieldset>', {
            class: 't-margin-bottom--large animations__fade-in-left'
          });
          $('<legend/>', {
            class: 'h2  t-no-focus',
            tabindex: '-1',
            html: _question
            }).appendTo($(html));
            
          if(_instruction.length > 0)
            $('<p/>',{
              class: 'text--small'
              }).append(_instruction).appendTo($(html));

          var htmllist = $('<ul>',{
              class: 't-no-list-styles'
              })
          $.each(_alternatives, function() {
              $('<button/>',{
                type: 'button', 
                class: 'button button--option',
                html: this.Caption + ' <i class="icon__arrow-right"></i>',
                click: $.proxy(updateWizard, null, targetId, this.Caption, this.Target)
                })
                .appendTo($('<li>').appendTo($(htmllist))); 
          });
  
          $(html).append(htmllist);
          
          return html;
      }

      //
      // Function for constructing HTML for a conclusion
      //  		

  		var getConclusion = function(_title, _content) {

    		  var html = $('<section/>', {
            class: 't-margin-bottom--large animations__fade-in-left'
          });

          $('<h3/>',{
            class: 'h2 t-no-focus',
            tabindex: '-1',
            html: _title
            }).appendTo($(html));
            
          $(html).append(_content);
          
          $('<button/>',{
            type: 'button', 
            class: 'button',
            html: captionStartOver,
            click: $.proxy(resetWizard, null)
            })
            .appendTo($(html));

          return html;
      }

      //
      // Function for constructing HTML for the history
      //  		

  		var getHistory = function() {
    		  if (dataHistory.length < 1) return null;
    		 // Construct markup
          var html = $('<section>');
          $('<h3/>',{
            class: 'h4',
            html: captionHistoryTitle
            }).appendTo($(html));
          var htmllist = $('<ol/>');
          $.each(dataHistory, function(index, value) {
              var htmlli = $('<li/>');
              var htmldiv = $('<div/>',{
                class: 'info t-margin-bottom'
              });
              var htmlh4 = $('<h4/>',{
                class: 'info__title'
              });
              $('<a/>',{
                href: '#',
                html: value.Question,
                click: $.proxy(goBackInHistory, null, value.Id, index)
              }).appendTo($(htmlh4));
              $(htmlh4).appendTo($(htmldiv));
              $('<p/>',{
                html: value.Answer
              }).appendTo($(htmldiv));
              $(htmllist).append($(htmlli).append($(htmldiv)));
          });
          $(html).append(htmllist);
          return html;
  		}

      // Trigger on load
  		resetWizard();
  		
		} else {
  	  $(this).innerHTML('<p><em>' + captionError + '</em></p>');	
		}
	});

});