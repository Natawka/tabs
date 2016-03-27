

//alert('ji');
$(function () {
    var tabContainers = $('div.tabs > div'); 
    tabContainers.hide().filter(':first').show(); // пр€чем все, кроме первого
   
    $('div.tabs ul.navigation a').click(function () {
        tabContainers.hide(); 
        tabContainers.filter(this.hash).show(); 
        $('div.tabs ul.navigation a').removeClass('selected'); 
        $(this).addClass('selected'); 
        return false;
    }).filter(':first').click();
});