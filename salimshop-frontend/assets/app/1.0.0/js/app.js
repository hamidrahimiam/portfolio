/* Dragable Caurosel Handler */
$(".carousel").swipe({
    swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
        if (direction == 'left') $(this).carousel('next');
        if (direction == 'right') $(this).carousel('prev');
    },
    allowPageScroll: "vertical"
});

/* Header Search Handler */
$('#tgSearch').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('active');
    if ($(this).hasClass('active')) {
        $('#bxSearch').show();
        $('#bxSearch').find('input').focus();
    } else {
        $('#bxSearch').hide();
    }
});
$('#closeSearch').click(function() {
    $('#tgSearch').removeClass('active');
    $('#bxSearch').hide();
});
$('.app-header .header-search .search-field input').keyup(function() {
    if($(this).val() != ''){
        $('.app-header .header-search .search-results').show();
    }else{
        $('.app-header .header-search .search-results').hide();
    }
});

/* Header Basket Control */
$('.header-control-basket').click(function(e){
    e.preventDefault();
    $('.header-basket').toggle();
});

/* Filter Handler */
$('.refine-box .refine-head').click(function() {
    if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
    } else {
        $(this).parent().addClass('active');
    }
});

/* Filter Check Handler */
$('.refine-check').click(function(e) {
    e.preventDefault();
    $(this).toggleClass('checked');
});

/* Product Quick View Handler */
$('.product-quick-toggle').click(function(e){
    e.preventDefault();
    var quick = $(this).attr('data-quick');
    if( $(this).hasClass('show') ){
        $('.product-quick-modal[data-quick='+quick+']').hide();
        $("html,body").css('overflow','auto');

    }else{
        $('.product-quick-modal[data-quick='+quick+']').show();
        $("html,body").css('overflow','hidden');
    }
});
$('.product-quick-modal-close').click(function(){
    var quick = $(this).parent().parent().parent().attr('data-quick');
    $(this).parent().parent().parent().hide();
    $('.product-quick-toggle[data-quick='+quick+']').removeClass('show');
    $("html,body").css('overflow','auto');
});

/* Product View Tab Handler */
$('.productview-tabs-header li').click(function(){
    $(this).parent().parent().find('li').removeClass('active');
    $(this).parent().parent().parent().find('.productview-tabs-i').removeClass('active');
    $(this).addClass('active');
    $(this).parent().parent().parent().find('.productview-tabs-i[data-tab='+$(this).attr('data-tab')+']').addClass('active');
});

/* Product View Gallery Handler */
$('.productview-slider-images .carousel-item').dblclick(function(){
    $(this).parent().parent().parent().parent().parent().find('.productview-slider-gallery-carousel').carousel(parseInt($(this).attr('data-loc')));
    $(this).parent().parent().parent().parent().parent().find('.productview-slider-gallery').show();
    $("html,body").css('overflow','hidden');
});
$('.productview-slider-gallery-close').click(function(){
    $(this).parent().hide();
    $("html,body").css('overflow','auto');
});
$('.productview-slider-gallery .carousel-item img').click(function(){
    if($(this).css('max-height') != '100%'){
        $(this).css('max-height','100%');
        $(this).css('cursor','zoom-out');
    }else{
        $(this).css('max-height','80vh');
        $(this).css('cursor','zoom-in');
    }
});
$('.productview-slider-carousel').on('slide.bs.carousel', function () {
 $(this).parent().parent().find('.productview-slider-gallery .carousel-item img').css('max-height','80vh').css('cursor','zoom-in');
})

/* Product review star handler */
$('.productview-reviews-new .productview-review-summary-stars i').click(function(){
    var starts = parseInt($(this).attr('data-star'));
    $('.productview-reviews-new .productview-review-summary-stars i').removeClass('fas');
    $('.productview-reviews-new .productview-review-summary-stars i').addClass('far');
    for(var i = 0; i < starts + 1 ; i++){
        $('.productview-reviews-new .productview-review-summary-stars i:nth-of-type('+i+')').addClass('fas');
    }
    $('#reviewInpStar').val(starts);
});

/* Cart handler */
$('.app-cart .cart-count .cart-count-plus').click(function() {
    var current = parseInt($(this).parent().find('input').val());
    $(this).parent().find('input').val(current + 1);
});
$('.app-cart .cart-count .cart-count-minus').click(function() {
    var current = parseInt($(this).parent().find('input').val());
    if(current - 1 > 0){
        $(this).parent().find('input').val(current - 1);
    }
});
$('.app-cart .cart-remove').click(function(){
    $(this).parent().parent().remove();
});
