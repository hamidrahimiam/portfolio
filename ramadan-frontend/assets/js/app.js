$(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if(scroll > 50){
        $('#rNav').addClass('fixed');
    }else{
        $('#rNav').removeClass('fixed');
    }
});
$('#rNav .responsive .toggle').click(function(){
    if($('#rNav').hasClass('open_responsive_menu')){
        $('#rNav').removeClass('open_responsive_menu');
    }else{
        $('#rNav').addClass('open_responsive_menu');
    }
});
$('.selectized').selectize();



