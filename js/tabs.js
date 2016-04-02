


$(function () {
		
    var tabContainers = $('div.tabs > div'); 
    tabContainers.hide().filter(':first').show(); // прячем все, кроме первого
   
    $('div.tabs ul.navigation a').click(function () {
        tabContainers.hide(); 
        tabContainers.filter(this.hash).show(); 
        $('div.tabs ul.navigation a').removeClass('selected'); 
        $(this).addClass('selected'); 
        return false;
    }).filter(':first').click();
	
		var $element = $('.crib');   
	    var $field = $element.find('input');
  console.log($field);	
  
  
		//CRIB
	  
		  $(':text').hover(function(){
           				 
		  $(this).next().show().animate({
			 opacity: '0.7',
			 marginLeft: "0.3in",
			 paddingRight: "0.1in",
			 paddingLeft: "0.1in"
		  },1000);
		 
		 }, function(){
			  $(this).next().hide();
		  });
	
		var $click = $(':submit');
	
		$click.on('click', function(){
			
		$(':text').next().show().animate({
			 opacity: '1',
			 marginLeft: "0.2in",
			 paddingRight: "-0.1in",
			 paddingLeft: "-0.1in"
		  },1000);;
		
		});	
  
});