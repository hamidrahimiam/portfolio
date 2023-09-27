$(function(){
    $(document).scroll(function(){
        if( $(this).scrollTop() >= $('section.Kservices').offset().top - 400 ) {
            $("section.Kservices").addClass('on');
        } else {
            $("section.Kservices").removeClass('on');
        }
        
        if( $(this).scrollTop() >= $('section.KtextBlock').offset().top - 400 ) {
            $("section.KtextBlock").addClass('on');
        } else {
            $("section.KtextBlock").removeClass('on');
        }
        
        if( $(this).scrollTop() >= $('section.Kaccord').offset().top - 600 ) {
            $("section.Kaccord").addClass('on');
        } else {
            $("section.Kaccord").removeClass('on');
        }
        
        if( $(this).scrollTop() >= $('section.Kporto').offset().top - 400 ) {
            $("section.Kporto").addClass('on');
        } else {
            $("section.Kporto").removeClass('on');
        }
    });
});


$('.accord_item_header').click(function(){
    $('.accord_item').removeClass('show');
    $(this).parent().addClass('show');
    $('.Kaccord .monitor').attr('style',"background-image: url('"+$(this).parent().attr('data-image')+"')");
});

//$('.sticky_contact_btn').click(function(e){
//    e.preventDefault();
//    $('body').addClass('stiky_contact_active');
//    $('.sticky_contact_box').focus();
//    $('.sticky_contact_btn i').hide();
//});
$('.sticky_contact_close').click(function(e){
    e.preventDefault();
    $('body').removeClass('stiky_contact_active');
    setTimeout(function() { 
        $('.sticky_contact_btn i').show();
    }, 500);
});

$('.KnavSocialContact_btn').click(function(e){
    e.preventDefault();
    $('body').addClass('KnavSocialContact_active');
    $('.sticky_contact_box').focus();
});
$('.sticky_contact_close').click(function(e){
    e.preventDefault();
    $('body').removeClass('KnavSocialContact_active');
});

$('.portoFilter i').click(function(){
    $('.portoFilter i').removeClass('filter');
    $(this).addClass('filter');
    var tag = $(this).attr('data-filter');
    if(tag != 'all'){
        $('.Kporto .protoBox').fadeOut(300,function(){
             $('.Kporto .porto').hide();
             $('.Kporto .porto[data-filter='+tag+']').show();
             $('.Kporto .protoBox').fadeIn();
        });
    }else{
        $('.Kporto .protoBox').fadeOut(300,function(){
             $('.Kporto .porto').show();
             $('.Kporto .protoBox').fadeIn();
        });
    }
});

$('.KvideoBox .control_play').click(function(){
    $('#KvideoPlayer').get(0).play();
    $('.KvideoBox .player').addClass('play');
});
$('.KvideoBox .control_pause').click(function(){
    $('#KvideoPlayer').get(0).pause();
    $('.KvideoBox .player').removeClass('play');
});

$('.Kmega_btn').click(function(e){
    e.preventDefault();
    $('body').addClass('Kmega_active');
    $('.Kmega_box').focus();
});
$('.Kmega_box_close').click(function(e){
    e.preventDefault();
    $('body').removeClass('Kmega_active');
});


var iScrollPos = 0;
$(window).scroll(function () {
    var iCurScrollPos = $(this).scrollTop();
    if (iCurScrollPos > iScrollPos || iCurScrollPos < 1) {
        $('body').removeClass('stickyNav');
    } else {
       $('body').addClass('stickyNav');
    }
    iScrollPos = iCurScrollPos;
});



$('.sticky_contact_go').click(function(){
    var box = $(this).attr('data-box');
    $('.sticky_contact_go').removeClass('active');
    $('.sticky_contact_tab').removeClass('active');
    $(this).addClass('active');
    $('.sticky_contact_tab[data-box='+box+']').addClass('active');
});


var servMovesLocation = 0;
var servCountInSlide = 2;
var servCountInMove = 1;
$('.servSlideMoveRight').click(function(){
    $('.servSlide .slides').animate({
        scrollLeft: servSlideMoveLocation('right')
    }, 500);
});

$('.servSlideMoveLeft').click(function(){
    $('.servSlide .slides').animate({
        scrollLeft: servSlideMoveLocation('left')
    }, 500);
});
function servSlideMoveLocation(where){
    if(where == 'right'){
        servMovesLocation++;
        if(servMovesLocation > servCountInSlide - 2){
            servMovesLocation = 0;
            return 0;
        }
    }
    if(where == 'left'){
        servMovesLocation--;
        if(servMovesLocation < 0){
            servMovesLocation = servCountInSlide - 2;
        }     
    }
    
    return servMovesLocation * servSlideSlideWidth();
}
function servSlideSlideWidth(){
    return ( (parseInt($('.servSlide .slides ul li').css('width')) + parseInt($('.servSlide .slides ul li').css('margin-right')) ) * servCountInMove);
}
function servSlideBoxWidthFixer(){
    $('.servSlide .slides ul').css('width',servSlideSlideWidth() * $('.servSlide .slides ul li').not('.hide').length + ( parseInt($('.servSlide .slides ul li').css('margin-right')) * 9 ));
    
    servCountInSlide = $('.servSlide .slides ul li').not('.hide').length / servCountInMove - 1;
    
}
servSlideBoxWidthFixer();

$('.servSlideSortBtn').click(function(){
    if($('.servSlide .sort .sortBox').hasClass('active')){
        $('.servSlide .sort .sortBox').removeClass('active');
    }else{
        $('.servSlide .sort .sortBox').addClass('active');
    }
});
$('.servSlide .sort .sortBox button').click(function(){
    var cats = $(this).attr('data-cat');
    var cats = cats.split(',');
    $('.servSlide .sort .sortBox button').removeClass('active');
    $('.servSlide .sort .sortBox').removeClass('active');
    $(this).addClass('active');
    $('.servSlideSortBtn').children('b').html($(this).children('b').html());
    if(cats.length > 0 && cats[0] != ''){
        $('.servSlide .slides ul li').addClass('hide');
        $.each( cats, function( key, value ) {
            $('.servSlide .slides ul li[data-cat='+value+']').removeClass('hide');
        });
        $('.servSlideSortBtn').addClass('other');
    }else{
        $('.servSlide .slides ul li').removeClass('hide');
        $('.servSlideSortBtn').removeClass('other');
    }
    servSlideBoxWidthFixer();
    $('.servSlide .slides').animate({
        scrollLeft: 0
    }, 500);
});

//Count Down
function countdown(endDate) {
  let days, hours, minutes, seconds;
  
  endDate = new Date(endDate).getTime();
  
  if (isNaN(endDate)) {
	return;
  }
  
  setInterval(calculate, 1000);
  
  function calculate() {
    let startDate = new Date();
    startDate = startDate.getTime();
    
    let timeRemaining = parseInt((endDate - startDate) / 1000);
    
    if (timeRemaining >= 0) {
      days = parseInt(timeRemaining / 86400);
      timeRemaining = (timeRemaining % 86400);
      
      hours = parseInt(timeRemaining / 3600);
      timeRemaining = (timeRemaining % 3600);
      
      minutes = parseInt(timeRemaining / 60);
      timeRemaining = (timeRemaining % 60);
      
      seconds = parseInt(timeRemaining);
      
      document.getElementById("js-days").innerHTML = parseInt(days, 10);
      document.getElementById("js-hours").innerHTML = ("0" + hours).slice(-2);
      document.getElementById("js-minutes").innerHTML = ("0" + minutes).slice(-2);
      document.getElementById("js-seconds").innerHTML = ("0" + seconds).slice(-2);
    } else {
      return;
    }
  }
}

(function () { 
  countdown('2019-01-15'); 
}());
