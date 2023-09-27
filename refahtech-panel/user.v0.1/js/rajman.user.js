$('#RajmanToggleAppSide').click(function(){
    $('aside#RajmanAppsSide').toggleClass('hide');
});
$('#RajmanAppsSideHide').click(function(){
    $('aside#RajmanAppsSide').addClass('hide');
});

$('#RajmanToggleNightMode').click(function(e){
    e.preventDefault();
    if( !$(this).hasClass('night') ){
        $(this).addClass('night');
        $('body').addClass('nightmode');
    }else{
        $(this).removeClass('night');
        $('body').removeClass('nightmode');
    }
});

function responsive(){
    if($(window).width() < 1300 ){
        $('aside#RajmanAppsSide').addClass('hide');
        $('aside#RajmanAppsSide').addClass('resaponsive');
    }else{
        $('aside#RajmanAppsSide').removeClass('hide');
        $('aside#RajmanAppsSide').removeClass('resaponsive');
    }
}
responsive();
$(window).resize(function() {
    responsive();
});

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});