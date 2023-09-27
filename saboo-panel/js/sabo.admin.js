/* Controller */
$('.sabo_nav_noticToggle').click(function(){
    var noticWidth = $('.sabo_notific').css('width');
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.sabo_notific').transition({ x: 0 }); 
        $('.sabo_content .sabo_content_box').css({marginLeft: 0});
    }else{
         $(this).addClass('active');
        $('.sabo_notific').transition({ x: noticWidth });
        $('.sabo_content .sabo_content_box').css({marginLeft: noticWidth});
    }
});
$('.sabo_nav_sideToggle').click(function(){
    var sideWidth = parseInt($('.sabo_side').css('width'));
    if($(this).hasClass('active')){
        $(this).removeClass('active');
        $('.sabo_side').transition({ x: 0 }); 
        $('.sabo_nav .sabo_nav_sideToggle').css({ marginRight: sideWidth });
        $('.sabo_content .sabo_content_box').css({ marginRight: sideWidth });
    }else{
        $(this).addClass('active');
        $('.sabo_side').transition({ x: sideWidth });
        $('.sabo_nav .sabo_nav_sideToggle').css({ marginRight: 0 });
        $('.sabo_content .sabo_content_box').css({ marginRight: 0 });
    }
});
$('.sabo_nav_userToggle').click(function(){
    if($(this).parents('div.sabo_nav_user').hasClass('active')){
        $(this).parents('div.sabo_nav_user').removeClass('active');
    }else{
        $(this).parents('div.sabo_nav_user').addClass('active');
    }
});

/* Side */
$('.sabo_side_menu ul li a').click(function(e){
    if($(this).parents('li').hasClass('have_child')){
        e.preventDefault();
       if($(this).parents('li').hasClass('open_child')){
           $(this).parents('li').removeClass('open_child');
       }else{
           $('.sabo_side_menu ul li').removeClass('open_child');
         $(this).parents('li').addClass('open_child');
       }
    }
});

/* Menu */
$('.prince_admin_menu li ul').mouseover(function(){
    $(this).parents().addClass('focus');
});
$('.prince_admin_menu ul li ul').mouseleave(function(){
    $(this).parents().removeClass('focus');
});

/* Responsive */
function responsive(){
    var sideWidth = parseInt($('.sabo_side').css('width'));
    if($(window).width() <= 900 && !$('.sabo_nav_sideToggle').hasClass('active') ){
        $('.sabo_nav_sideToggle').addClass('active');
        $('.sabo_side').transition({ x: sideWidth });
        $('.sabo_nav .sabo_nav_sideToggle').css({ marginRight: 0 });
        $('.sabo_content .sabo_content_box').css({ marginRight: 0 });
    }
    if($(window).width() <= 960  ){
        $('.sabo_nav_search').hide();
    }else{
        $('.sabo_nav_search').show();
    }
}
responsive();
$(window).resize(function(){
    responsive();
});

/* Material Css Use */
$(document).ready(function(){
    $('.collapsible').collapsible();
     $('.dropdown-trigger').dropdown();
    $('.modal').modal();
    $('.tabs').tabs();
    $('.tooltipped').tooltip();
});