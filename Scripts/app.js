var imdi = imdi || {};

$(document).ready(function () {
    imdi.tableOfContents.init();
    imdi.facet.init();
    imdi.scroll.init();
    imdi.main_menu_toggle.init();
    imdi.main_search_toggle.init();
    imdi.toggle.init(getUrlParameter('toggle'));
    imdi.trigger.init();
    imdi.selectall.init();
    imdi.hover_toggle.init();
    imdi.smooth_scrolling.init();
    imdi.slick_carousel.init();
    imdi.wizard.init();
    imdi.table_collapsable.init();
    imdi.to_top_button.init();

});

imdi.facet = (function ($) {
    return {
        init: function () {
            $('._jsExtendedFacet').on('change', "input:checkbox", function () {
                window.location = $(this).data('filterurl');
            });
        }
    }
})(jQuery);

imdi.scroll = (function ($) {
    return {
        init: function () {
            var anchorid = getUrlParameter("aid");
            if (anchorid) {
                var anchor = '#' + anchorid;
                $('html,body').animate({ scrollTop: jQuery(anchor).offset().top - 110 }, 700);
                $(anchor).focus();
             }
        }
    }
})(jQuery);

/*------------------------------------*\
    TAG MANAGER CUSTOM TRACKING
    To track javascript events into Google Analytics by Google Tag Manager (GTM). Correct setup in GTM is needed.
\*------------------------------------*/

imdi.gtm_tracking = (function ($) {
    return {

        customEvent: function (eventCategory, eventAction, eventLabel, eventValue) {

          // Default to undefined
          eventCategory = typeof eventCategory !== 'undefined' ? eventCategory : undefined;
          eventAction = typeof eventAction !== 'undefined' ? eventAction : undefined;
          eventLabel = typeof eventLabel !== 'undefined' ? eventLabel : undefined;
          eventValue = typeof eventValue !== 'undefined' ? eventValue : undefined;

          // Google Tag Manager call
          if(typeof dataLayer != 'undefined') {
             dataLayer.push({
                'event': 'customEvent',
                'eventCategory': eventCategory,
                'eventAction': eventAction,
                'eventLabel': eventLabel,
                'eventValue': eventValue
              });
          }
        },

        customPageView: function (virtualPageUrl, virtualPageTitle) {

          // Default to undefined
          virtualPageUrl = typeof virtualPageUrl !== 'undefined' ? virtualPageUrl : undefined;
          virtualPageTitle = typeof virtualPageTitle !== 'undefined' ? virtualPageTitle : undefined;

          // Google Tag Manager call
          if(typeof dataLayer != 'undefined') {
             dataLayer.push({
                'event': 'customPageView',
                'virtualPageUrl': virtualPageUrl,
                'virtualPageTitle': virtualPageTitle
              });
          }
        }
    }
})(jQuery);

/*------------------------------------*\
    MAIN MENU TOGGLE
    Open the main menu if the menu button in the header is pressed
\*------------------------------------*/

imdi.main_menu_toggle = (function ($) {
    return {
        init: function () {
          	$('[data-behaviour="main-menu-toggle"]').on('click', function( event ) {

          		// Prevent the fallback #anchor tag to move focus
          		event.preventDefault();

              // Get targets
              var _footer = $('#footer');
              var _footer__bg = $('#footer__bg');
              var _footer__bg = $('#footer__bg');
              var _page_content = $('#page-content');
              var _header = $('#header')

          		// Toggle menu button
          		if($(this).attr('aria-expanded') === "false"){
          			$(this).attr('aria-expanded', "true");
          			// Set min height to 100% of window on desktop
      	        var a = $(window).height();
      	        var b = _footer.height();
      	        if (a > b) {
      	            _footer.css('height', a);
      	            _footer__bg.css('height', a);
      	        }

                // Google Tag Manager call
                var currentUrl = window.location.pathname;
                imdi.gtm_tracking.customEvent('Menu', 'Main-menu open', undefined, currentUrl);

          		} else {
          			$(this).attr('aria-expanded', "false");
          			// Reset height
                _footer.css('height', 'auto');
                _footer__bg.css('height', 'auto');
          		}

          		// Toggle menu overlay
          		_page_content.toggle();
          		_footer.toggleClass($('#footer').attr('data-toggle-menu'));
          		_header.toggleClass($('#header').attr('data-toggle-menu'));

          	});
        }
    }
})(jQuery);



/*------------------------------------*\
    MAIN SEARCH TOGGLE
    Open a searchfield in the header when the search button is pressed.
    Is removed if the focus moves away from the search input field, or search button.
\*------------------------------------*/

imdi.main_search_toggle = (function ($) {
    return {
        init: function () {
          	$('[data-behaviour="main-search-toggle"]').on('click', function( event) {

          		// Prevent the fallback #anchor tag to move focus
          		event.preventDefault();

              // Get targets
              var _header = $('#header');
              var _header_search = $('#header-search');

          		_header.toggleClass(_header.attr('data-toggle-search'));

          		// Set focus in
          		_header_search.focus();

          	});

          	$('body').on('blur', '#header-search', function() {
          		setTimeout(function(){
          			if(!$('#header-search-button').is(":focus")){
          				$('#header').removeClass($('#header')
          				  .attr('data-toggle-search'));
          			}
          		}, 500);
          	});

          	$('body').on('blur', '#header-search-button', function() {
          		setTimeout(function(){
          			if(!$('#header-search').is(":focus")){
          				$('#header').removeClass($('#header')
          				  .attr('data-toggle-search'));
          			}
          		}, 500);
          	});
        }
    }
})(jQuery);



/*------------------------------------*\
    TOGGLE - ACCESSIBLE
\*------------------------------------*/

imdi.toggle = (function ($) {
    return {
        init: function ( openSectionOnLoad ) {
          	$('[data-behaviour~="toggle"]').on('click',function( event ) {

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
             	         $(section).removeClass(section_class_contracted)
             	            .addClass(section_class_expanded);
          	           // $(section).focus();
          	        });
          	        if(section_caption_contracted){
          			    $(this).html(section_caption_contracted);
          		    }
          	    } else {
          	        // On closing
          	        $(section).removeClass(section_class_expanded)
          	            .addClass(section_class_contracted);
          	        setTimeout(function() { $(section).hide(); }, transition_duration);
          	        if(section_caption_contracted){
          			    $(this).html(section_caption_expanded);
          		    }
          	    }

          	});

          	$('[data-behaviour~="toggle"]').each(function() {
          	    // Hide sections on load
          	    var section = $(this).attr('data-controls');

          	    $(this).attr('aria-expanded','false')
          	        .attr('aria-controls',section)
          	        .attr('role','button');
          	    $('#' + section).attr('aria-hidden','true')
          	        .hide();

          	    // If the url has an open section parameter
          	    if (openSectionOnLoad && openSectionOnLoad === section){
          		    $(this).trigger("click");
          	    }

          	    // If the section is marked to expand
          	    if ( $(this).attr('data-state') === 'expanded'){
          		    $(this).trigger("click");
          	    }
          	});
        }
    }
})(jQuery);



/*------------------------------------*\
    TRIGGER
\*------------------------------------*/

imdi.trigger = (function ($) {
    return {
        init: function () {
          	$('[data-behaviour="trigger"]').on('click', function( event ) {
          		// Prevent the fallback #anchor tag to move focus
          		event.preventDefault();

          		var target = '#' + $(this).attr('data-controls');

          		$(target).focus();
          		$(target).trigger("click");

          	});
        }
    }
})(jQuery);



/*------------------------------------*\
    SELECT ALL
\*------------------------------------*/

imdi.selectall = (function ($) {
    return {
        init: function () {
          	$('[data-behaviour="selectall"]').on('click', function( event ) {
          		$(this).select();

          	});
        }
    }
})(jQuery);



/*------------------------------------*\
    ADVENCED HOVER TOGGLE
\*------------------------------------*/

imdi.hover_toggle = (function ($) {
    return {
        init: function () {
      	  $('[data-behaviour~="hover-toggle"]').each(function(){

        	  var toggle_class_expanded = $(this).data('class-expanded');
        	  var children = $(this).data('hover-children');
        	  var hover_parent = this;

        	  // Trigger the class on the parent element when children elements receive hover
        	  $(children, this).hover(function () {
                $(hover_parent).addClass(toggle_class_expanded);
          	    $(hover_parent).show(0); // Hack to force redraw on Safari browser to get the hoverbox to show correctly. Ref JIRA: IMDI-186
            }, function () {
                $(hover_parent).removeClass(toggle_class_expanded);
            });

      	  });
        }
    }
})(jQuery);



/*------------------------------------*\
    SMOOTH SCROLLING
\*------------------------------------*/

/* Basics lifted from a CSS Tricks demo (http://css-tricks.com/snippets/jquery/smooth-scrolling/), with focus() and URL hash updating added where commented */

imdi.smooth_scrolling = (function ($) {
    return {
        init: function () {
        	  $('a[href^="#"]').not('[href="#"]').not('[data-behaviour="main-search-toggle"]').not('[data-behaviour="main-menu-toggle"]').not('[data-behaviour="toggle"]').on('click', function() {
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
        }
    }
})(jQuery);



/*------------------------------------*\
    SLICK CARSOUSEL ON MOBILE
\*------------------------------------*/

imdi.slick_carousel = (function ($) {
    return {
        init: function () {
          	var target = $('[data-behaviour="carousel"]');
            var toggleSlick = function () {
                if ($(window).width() < 720) {
                  if(!slickLoaded){
                    target.slick({
                      	slidesToShow: 1,
                      	slidesToScroll: 1,
                        adaptiveHeight: true,
                        infinite: false,
                        focusOnSelect: true,
                        prevArrow: '[data-behaviour="carousel-prev"]',
                        nextArrow: '[data-behaviour="carousel-next"]'
                      });
                  }
                  slickLoaded = true;
                } else {
                  if(slickLoaded){
                    target.slick('unslick');
                    slickLoaded = false;
                  }
                }
            }

            var slickLoaded = false;

            // Init on load
            toggleSlick();

            // Init on resize
            $(window).resize(toggleSlick);

        }
    }
})(jQuery);



/*------------------------------------*\
    RESPONSIVE TABLE
\*------------------------------------*/

imdi.table_collapsable = (function ($) {
    return {
        init: function () {
            var toggleAccordion = function(e) {
              var trigger = e.target;
              var parent = trigger.parentNode;
              var isHidden = parent.getAttribute('aria-hidden') === 'true';
              if (isHidden) {
                $(trigger).removeClass('expanded');
                parent.setAttribute('aria-hidden', false);
              } else {
                $(trigger).addClass('expanded');
                parent.setAttribute('aria-hidden', true);
              }
            };

            $('[data-table-collapsable]').each(function() {

              var tableRows = $(this).find('tr');

              $(tableRows).each(function (){
                var columns = $(this).children();
                var trigger = columns[0];
                trigger.addEventListener('click', toggleAccordion);
              });

            });

        }
    }
})(jQuery);



/*------------------------------------*\
    TO THE TOP BUTTON
\*------------------------------------*/

imdi.to_top_button = (function ($) {
    return {
        init: function () {

            $('#to-top-button').on('click', function () {
              $("html, body").animate({ scrollTop: 0 }, "fast");
            });

            var hideAndShowButton = function () {
              var scrollPosition = $(document).scrollTop();
              if (scrollPosition < 10) {
                $('#to-top-button').hide();
              } else {
                $('#to-top-button').show();
              }
            }

            $(window).scroll(function(){
                 requestAnimationFrame(hideAndShowButton);
            })

        }
    }
})(jQuery);



/*------------------------------------*\
    WIZARD MODULE BASED ON A JSON VARIABLE
\*------------------------------------*/

imdi.wizard = (function ($) {
    return {
        init: function () {
            $('[data-behaviour="wizard"]').each( function() {
                if (window[$(this).data('source')] !== 'undefined' && window[$(this).data('source')].length && window[$(this).data('source')][0]!=null) {

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
                    $(wrapper).append(getQuestion(_question, _instruction, _alternatives, targetId))
                      .append(getHistory())
                      .find('legend').focus();

                    // Google Tag Manager call
                    var virtualUrl = window.location.pathname + '?wizard/question/' + targetId;
                    var virtualTitle = _question + ' | Veiviserspørsmål';
                    imdi.gtm_tracking.customPageView(virtualUrl, virtualTitle);

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

                    // Google Tag Manager call
                    var virtualUrl = window.location.pathname + '?wizard/conclusion/' + targetId;
                    var virtualTitle = _title  + ' | Veiviserkonklusjon';
                    imdi.gtm_tracking.customPageView(virtualUrl, virtualTitle);

                  // ERROR

                  } else {
                    $(wrapper).append('<p><em>' + captionError + '</em></p>');
                    $(wrapper).focus();
                  }

            		}


                //
                // Function that reset the interaction
                //

                var resetWizard = function() {

                  // Reset history and markup
                  dataHistory = [];
                  $(wrapper).html('');

                  // Construct markup
                  var htmlleadtext = $("<p>", {
                    'html': captionLeadtext
                  });

                  var htmlbutton = $("<button>", {
                    'type': 'button',
                    'class': "button button--large",
                    'html': captionStartWizard,
                    'click': $.proxy(updateWizard, null, -1, -1, startId)
                    });

                  $(wrapper).append(htmlleadtext);
                  $(wrapper).append(htmlbutton);
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
                      'class': 't-margin-bottom--large animations__fade-in-left'
                    });
                    $('<legend/>', {
                      'class': 'h2  t-no-focus',
                      'tabindex': '-1',
                      'html': _question
                      }).appendTo($(html));

                    if(_instruction.length > 0)
                      $('<p/>',{
                        'class': 'text--small'
                        }).append(_instruction).appendTo($(html));

                    var htmllist = $('<ul>',{
                        class: 't-no-list-styles'
                        })
                    $.each(_alternatives, function() {
                        $('<button/>',{
                          'type': 'button',
                          'class': 'button button--option',
                          'html': this.Caption + ' <i class="icon__arrow-right"></i>',
                          'click': $.proxy(updateWizard, null, targetId, this.Caption, this.Target)
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
                      'class': 't-margin-bottom--large animations__fade-in-left'
                    });

                    $('<h3/>',{
                      'class': 'h2 t-no-focus',
                      'tabindex': '-1',
                      'html': _title
                      }).appendTo($(html));

                    $(html).append(_content);

                    $('<button/>',{
                      'type': 'button',
                      'class': 'button',
                      'html': captionStartOver,
                      'click': $.proxy(resetWizard, null)
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
                      'class': 'h4',
                      'html': captionHistoryTitle
                      }).appendTo($(html));
                    var htmllist = $('<ol/>');
                    $.each(dataHistory, function(index, value) {
                        var htmlli = $('<li/>');
                        var htmldiv = $('<div/>',{
                          'class': 'info t-margin-bottom'
                        });
                        var htmlh4 = $('<h4/>',{
                          'class': 'info__title'
                        });
                        $('<a/>',{
                          'href': '#',
                          'html': value.Question,
                          'click': $.proxy(goBackInHistory, null, value.Id, index)
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
        }
    }
})(jQuery);

function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};


// Client side table of contents
imdi.tableOfContents = (function ($) {
    return {
        init: function () {

            if ($('#toc-enabled').length)
            {
                var toc_index = 1;

                $("#toc-enabled h2:not([class])").each(function () {

                    var anchorLink = 'title_' + toc_index;

                    $(this).attr('id', anchorLink);
                    $(this).attr('tabindex', "-1");
                    $(this).addClass('toc__heading');

                    $('#toc').append('<li><a href="#' + anchorLink + '" class="navigation__link navigation__link--anchor">' + $(this).text() + '</a></li>');

                    toc_index++;
                });

                if (toc_index == 1)
                {
                    $('#toc-navigation').remove();
                }

            }
        }
    }
})(jQuery);
