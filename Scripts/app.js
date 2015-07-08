$( document ).ready(function() {
  
	/*------------------------------------*\
	    MAIN MENU TOGGLE
	\*------------------------------------*/	

	$('body').on('click', '#main-menu-toggle', function() {
		
		// Toggle menu button
		if($(this).attr('aria-expanded') === "false"){
			$(this).attr('aria-expanded', "true");
			$(this).find('span').text('Lukk');
		} else {
			$(this).attr('aria-expanded', "false");		
			$(this).find('span').text('Meny');			
		}
		
		// Toggle menu overlay
		$('#page-content').toggle();
		$('#footer').toggleClass($('#footer').attr('data-toggle'));	
		$('#header').toggleClass($('#header').attr('data-toggle'));	
		
		// Prevent the fallback #anchor tag to move focus
		 event.preventDefault();			
	});  
  
  
  
});