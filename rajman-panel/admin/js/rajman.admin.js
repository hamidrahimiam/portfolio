/* Toggle Right Side*/
$('#RajmanToggleRightSide').click(function(){
    $('#RajmanRightSide').toggleClass('hide');
    if( $(window).width() < 1100 ){
        $('#RajmanFadeAll').toggle();
    }
});
/* Toggle Left Side */
$('#RajmanToggleLeftSide').click(function(){
    $('#RajmanLeftSide').toggleClass('show');
    $('#RajmanFadeAll').show();
});
/* Fade All */
$('#RajmanFadeAll').click(function(){
    $('#RajmanLeftSide').removeClass('show');
    if( $(window).width() < 1100 ){
        $('#RajmanRightSide').addClass('hide');
    }
    $('#RajmanFadeAll').hide();
});
/* Toggle Night Mode */
$('#RajmanToggleNightMode').click(function(){
    $('body').toggleClass('nightmode');
});
/* Toggle Profile Box In Nav */
$('#RajmanToggleProfile').click(function(){
    $('.notification').removeClass('show');
    $(this).parent().toggleClass('show');
});
/* Toggle Notification Box In Nav */
$('.notificationToggle').click(function(){
    $('.profile').removeClass('show');
    if(!$(this).parent().hasClass('show')){
        $('.notification').removeClass('show');
        $(this).parent().addClass('show');
    }else{
        $('.notification').removeClass('show');
    }   
});
/* Tab */
$('li.RajmanTabHeader_i').click(function(){
    var reqTab = $(this).attr('data-tab');
    $(this).parent().children('li.RajmanTabHeader_i').removeClass('show');
    $(this).addClass('show');
    $(this).parent().parent().parent().find('section.RajmanTabBody_i').removeClass('show');
    $(this).parent().parent().parent().find('section.RajmanTabBody_i[data-tab='+reqTab+']').addClass('show');
});



/* Responsive */
function responsive(){
    $('#RajmanFadeAll').hide();
    if( $(window).width() < 1100 ){
      $('#RajmanRightSide').addClass('hide');
    }else{
      $('#RajmanRightSide').removeClass('hide');
    } 
}
responsive();
$(window).resize(function() {
    responsive();
});
