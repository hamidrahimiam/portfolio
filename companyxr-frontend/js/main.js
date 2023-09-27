$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 80 ) { //&& $('body').height() > 2500
        $('.cwNav').addClass('sticky');
    } else {
        $('.cwNav').removeClass('sticky');
    }
    
    $('.change_lang').click(function(e){
        e.preventDefault();
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active');
        }else{
            $(this).parent().addClass('active');
        }
    });
    $('.lang .box_lang button').click(function(){
        $('.change_lang').parent().removeClass('active');
        $('.change_lang').html($(this).html());
        change_language($(this).attr('lang-name'));
    });
});