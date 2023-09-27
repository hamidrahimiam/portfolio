// Elements
var logo = $('.logo');
var asideToggle = $('.asideToggle');
var aside = $('aside.refad');
var main = $('main.refad');
var droper = $('li.droper');
var droperLink = $('li.droper a.droper');
var navProfile = $('.navProfile');
var navNotefic = $('.navNotefic');
var navProfileBox = $('.navProfileBox');
var navNoteficBox = $('.navNoteficBox');
var navNoteficBoxBody = $('.navNoteficBox main');
var navNoteficBoxBodySeen = $('.NoteficItem i');
var CleanAllNotification = $('.CleanAllNotification');
var asideResponsive = $('.asideResponsive');
var moreControl = $('.moreControl'); // for widgets
var miniControl = $('.miniControl'); // for widgets
var moreControlbox = $('.moreControlbox'); // for widgets
var refadminChart = $('.refadminChart'); // Charts Box

// Aside
asideToggle.click(function(){
    if( !$(this).hasClass('active') ){
        aside.addClass('minimize');
        aside.children().fadeOut(300).delay(100).fadeIn(200);
        main.addClass('minimize');
        $(this).addClass('active');
        logo.addClass('minimize');
        logo.children().fadeOut(100);
        $.cookie('side', 'minimize', { expires: 365, path: '/' });
    }else{
        aside.removeClass('minimize');
        aside.children().hide();
        main.removeClass('minimize');
        aside.children().fadeIn(800);
        $(this).removeClass('active');
        logo.removeClass('minimize');
        logo.children().fadeIn(600);
        $.removeCookie('side');
    }
    // @TODO : FIX CHART ON RESIZE ASIDE AND MAIN
});
asideResponsive.click(function(){
    if( !$(this).hasClass('active') ){
        aside.addClass('responsivize');
        $(this).addClass('active');    
    }else{
        aside.removeClass('responsivize');
        $(this).removeClass('active');         
    }
});

droperLink.click(function(e){
    e.preventDefault();
    if( !$(this).parent('li').hasClass('open') ){
        droper.removeClass('open');
        $(this).parent('li').addClass('open');
        aside.getNiceScroll().resize();
    }else{
        $(this).parent('li').removeClass('open');
        aside.getNiceScroll().resize();
    }
});


// Nav Dropper
navProfile.click(function(){
    if( !$(this).hasClass('active') ){
        
        navNotefic.removeClass('active');
        navNoteficBox.fadeOut();
        
        $(this).addClass('active'); 
        navProfileBox.fadeIn();
    }else{
        $(this).removeClass('active');
        navProfileBox.fadeOut();    
    }
});
navNotefic.click(function(){
    if( !$(this).hasClass('active') ){
        
        navNotefic.removeClass('active');
        navNoteficBox.fadeOut();
        navProfile.removeClass('active');
        navProfileBox.fadeOut();
        
        $(this).addClass('active');
        navNoteficBox.fadeIn();
        
    }else{
        $(this).removeClass('active');
        navNoteficBox.fadeOut();    
    }
});

// Seen Notifications Items
navNoteficBoxBodySeen.click(function(){
    $(this).toggleClass('seen');
    $(this).parent().toggleClass('seen');
});
CleanAllNotification.click(function(e){
    e.preventDefault();
    navNoteficBoxBody.children().fadeOut(200);
});

// Widgets 
moreControl.click(function(){
    var ControlboxSelected = $(this).attr('data-control');
    $('.moreControlbox[data-controlbox='+ControlboxSelected+']').toggle();
    $(this).toggleClass('active');
});
miniControl.click(function(){
    var widgetName = $(this).attr('data-widget');
    var WidgetSelected = $('.widget[data-widget='+widgetName+']');
    WidgetSelected.toggleClass('minimize');
    $(this).toggleClass('minimize');
    if( $(this).hasClass('minimize') ){
        $.cookie('widget_'+widgetName, 'minimize', { expires: 365, path: '/' });
    }else{
        $.removeCookie('widget_'+widgetName);
    }
    // @TODO : FIX CHARTS ON MINIMIZE
});

$(document).ready(function(){
    // Auto Change Side with cookie saved
    if( $.cookie('side') !== undefined && $.cookie('side') == 'minimize' ){
       asideToggle.trigger( "click" );
    }
    // Auto Minimize Widgets with cookie
    var CurrentsCookie = $.cookie();
    for (var key in CurrentsCookie) {
        if( key.startsWith('widget_') && CurrentsCookie[key] == 'minimize' ){
            var widgetRemember = key.replace(/^(widget_)/,'');
            $('.widget[data-widget='+widgetRemember+']').addClass('minimize');        
            $('.miniControl[data-widget='+widgetRemember+']').addClass('minimize');        
        }
    }

    
    
    // Nice Scroll Controll
    aside.niceScroll({
        touchbehavior:true,
        cursorcolor:"#111111",
        cursorwidth:"8px",
        background:"rgba(20,20,20,0.1)",
        cursorborder:"0",
        cursorborderradius:2,
        disableoutline: true
    });
    navNoteficBoxBody.niceScroll({
        touchbehavior:true,
        cursorcolor:"#111111",
        cursorwidth:"5px",
        background:"rgba(20,20,20,0.1)",
        cursorborder:"0",
        cursorborderradius:2
    });
    navNoteficBoxBody.mouseover(function() {
        navNoteficBoxBody.getNiceScroll().resize();
    });
    
    
    
    /* Load Charts */

    // Chart1
    var Chart1 = new Chartist.Line('.ct-chart', {
      labels: ['شنبه', 'دوشنبه', 'سه شنبه', 'پنح شنبه', 'جمعه'],
      series: [
        [12, 9, 7, 8, 5],
        [2, 1, 3.5, 7, 3],
        [1, 3, 4, 5, 6]
      ]
    }, {
      fullWidth: true,
      chartPadding: {
        right: 40
      }
    });
    
    // Chart2
    var data2 = {
      labels: ['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7', 'W8', 'W9', 'W10'],
      series: [
        [1, 2, 4, 8, 6, -2, -1, -4, -6, -2]
      ]
    };

    var options = {
      high: 10,
      low: -10,
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      }
    };

    var Chart2 = new Chartist.Bar('.ct-chart2', data2, options);
    
    // Chart3
    var data3 = {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      series: [
        [5, 4, 3, 7, 5, 10, 3, 4, 8, 10, 6, 8],
        [3, 2, 9, 5, 4, 6, 4, 6, 7, 8, 7, 4]
      ]
    };

    var options3 = {
      seriesBarDistance: 10
    };

    var responsiveOptions3 = [
      ['screen and (max-width: 640px)', {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function (value) {
            return value[0];
          }
        }
      }]
    ];

    var Chart3 = new Chartist.Bar('.ct-chart3', data3, options3, responsiveOptions3);
    
    
    
    // Chart4
    var Chart4 = new Chartist.Bar('.ct-chart4', {
          labels: ['Quarter 1', 'Quarter 2', 'Quarter 3', 'Quarter 4'],
          series: [
            [5, 4, 3, 7],
            [3, 2, 9, 5],
            [1, 5, 8, 4],
            [2, 3, 4, 6],
            [4, 1, 2, 1]
          ]
        }, {
          // Default mobile configuration
          stackBars: true,
          axisX: {
            labelInterpolationFnc: function(value) {
              return value.split(/\s+/).map(function(word) {
                return word[0];
              }).join('');
            }
          },
          axisY: {
            offset: 20
          }
        }, [
          // Options override for media > 400px
          ['screen and (min-width: 400px)', {
            reverseData: true,
            horizontalBars: true,
            axisX: {
              labelInterpolationFnc: Chartist.noop
            },
            axisY: {
              offset: 60
            }
          }],
          // Options override for media > 800px
          ['screen and (min-width: 800px)', {
            stackBars: false,
            seriesBarDistance: 10
          }],
          // Options override for media > 1000px
          ['screen and (min-width: 1000px)', {
            reverseData: false,
            horizontalBars: false,
            seriesBarDistance: 15
          }]
    ]);
    
    
});

// Responsive Events
$(window).on('resize', function(){
    
    if( $(this).width() <= 780 && !aside.hasClass('minimize') ) { 
        aside.addClass('minimize');
        aside.children().fadeOut(300).delay(100).fadeIn(200);
        main.addClass('minimize');
        asideToggle.addClass('active');
        logo.addClass('minimize');
        logo.children().fadeOut(100);
    }
    if( $(this).width() > 680 && aside.hasClass('responsivize') ) { 
        asideResponsive.removeClass('active');
        aside.removeClass('responsivize');
    }
});