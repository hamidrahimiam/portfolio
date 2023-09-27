/* swiper */

var AppHeaderSliderSwiper = new Swiper('.app-header-slider-swiper', {
	loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  loopedSlides: parseInt($('.app-header-slider-swiper').attr('data-total')),
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
for (var i = 0; i < parseInt($('.app-header-slider-swiper').attr('data-total')); i++) { // AppHeaderSliderSwiper.slides.length
	$('.app-header .header-slider .slider-content .slider-pagination').append('<li class="'+((i == 0)?'active':'')+'"></li> ');
}
$('.app-header .header-slider .slider-content .slider-pagination').on('click','li',function(){
	AppHeaderSliderSwiper.slideTo( $(this).index() );
	$('.app-header .header-slider .slider-content .slider-pagination li').removeClass('active');
	$(this).addClass('active');
});
AppHeaderSliderSwiper.on('slideChange', function () {
	$('.app-header .header-slider .slider-content .slider-pagination li').removeClass('active');
	$('.app-header .header-slider .slider-content .slider-pagination li:eq('+AppHeaderSliderSwiper.realIndex+')').addClass('active');
	$('.app-header .header-slider .slider-content .slider-captions .slider-caption').removeClass('active');
	$('.app-header .header-slider .slider-content .slider-captions .slider-caption:eq('+AppHeaderSliderSwiper.realIndex+')').addClass('active');
});
    
    
var AppNewToShopSwiper = new Swiper('.app-newtopshop-swiper', {
	  loop: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        progressbarOpposite: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        990: {
          slidesPerView: 5,
          slidesPerGroup: 5,
          spaceBetween: 30,
        },
      }
    });
    
    
var AppFromShopSwiper = new Swiper('.app-fromshop-swiper', {
	  loop: true,
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        progressbarOpposite: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        990: {
          slidesPerView: 3,
          slidesPerGroup: 3,
          spaceBetween: 30,
        },
      }
    });
    
var AppArticleCoverSliderSwiper = new Swiper('.articleheader-cover-swiper', {
	loop: true,
  slidesPerView: 1,
  slidesPerGroup: 1,
  centeredSlides: true,
  loopedSlides: parseInt($('.articleheader-cover-swiper').attr('data-total')),
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
	pagination: {
        el: '.swiper-pagination',
        clickable: true,
        progressbarOpposite: true
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});
    
    
    
/* Line Tab */
$('.line-tab li').click(function(){
	$(this).parent().find('li').removeClass('active');
	$(this).addClass('active');
	$($(this).attr('data-dest')+' .tab-item').removeClass('active');
	$($(this).attr('data-dest')+' .tab-item[data-tab="'+$(this).attr('data-tab')+'"]').addClass('active');
});

/* scroll */
// $(window).scroll(function() {
//   /* fixed share */
//   if($('.articlecontent-share').length > 0){
//   	   var articlecontentOffsetTop = $('.app-articlecontent').offset().top;
// 	   if(articlecontentOffsetTop < $(this).scrollTop() + 150){
// 			$('.articlecontent-share').addClass('fixed').css('width',$('.articlecontent-share-container').width()+'px');	
// 	   }else{
// 	   		$('.articlecontent-share').removeClass('fixed').css('width','100%');	
// 	   }
//   }
// });

$(document).ready(function() {
  var $window = $(window);  
  var $nav = $(".app-nav").innerHeight(); 
  var $sidebar = $(".articleside-box-sticky"); 
  var $sidebarHeight = $sidebar.innerHeight();   
  var $footerOffsetTop = $(".app-footer").offset().top; 
  var $sidebarOffset = $sidebar.offset();
  
  $window.scroll(function() {
    if($window.scrollTop() > $sidebarOffset.top) {
      $sidebar.addClass("fixed").css('width',$('.app-articleside').width()+'px');
    } else {
      $sidebar.removeClass("fixed").css('width','100%'); 
    }    
    if($window.scrollTop() + $sidebarHeight > $footerOffsetTop) {
      $sidebar.css({"top" : -($window.scrollTop() + $sidebarHeight - $footerOffsetTop)});     
      
    } else {
      $sidebar.css({"top": "0"});  
      
    }    
  });   

  
});

/* nonclickable */
$('.nonclickable').click(function(e){
	e.preventDefault();
});

/* hasub toggle */
$('.app-nav').on('click','.menu.responsive-menu li.has-sub > a',function(e){
	$(this).parent().toggleClass('open');
});
$('.app-nav').on('click','.menu.responsive-menu ul li .menu-sub ul li.menu-sub-title b',function(e){
	$(this).parent().toggleClass('open');
});

/* togllge menu */
$('.responsive-toggle-btn').click(function(e){
	e.preventDefault();
	$(this).parent().toggleClass('active');
	$('.app-nav .menu').toggleClass('responsive-menu');
	$('.search-toggle-btn').parent().removeClass('active');
});
$('.search-toggle-btn').click(function(e){
	e.preventDefault();
	$(this).parent().toggleClass('active');
	$('.responsive-toggle-btn').parent().removeClass('active');
	$('.app-nav .menu').removeClass('responsive-menu');
});