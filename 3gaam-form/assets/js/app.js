/**
 * Toggle Plans More Detail
 */
$('.app_more_details .see_more b').click(function(){
    $($(this).attr('data-target')).toggleClass('show');
});

/**
 * Fix App Prog progress bar on responsive mode
 */
function app_prog_fix(){
    var all = $('.app_prog li').length;
    var done = $('.app_prog li.done').length;
    var active = $('.app_prog li.active').length;
    $('.app_prog .prog').css('width',(((done+active)/all)*100)+'%');
}

/**
 * When Change App Prog Items Run This Method
 */
app_prog_fix();


/**
 * Window Size Responsive
 */
function app_responsive(){
    var viewportWidth = $(window).width();
    if(viewportWidth > 1000){
        $('body').removeClass('app_mode_mobile');
    }else{
        $('body').addClass('app_mode_mobile');
    }
}
$(window).resize(function() {
    app_responsive();
});
app_responsive();


//



///scscsc/scscsc

//










/// as asd /asd sd s