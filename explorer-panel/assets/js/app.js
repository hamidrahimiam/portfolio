/**
 * Toggle Theme Color
 */
$('#act_change_light').click(function(e){
    e.preventDefault();
    $('body').toggleClass('app_mode_night');
});

/**
 * Auto Element Select Maker
 */
if($('.element_select').length > 0){
    $('.element_select').each(function(){
        var label = $(this).find('span');
        var target = $(this).attr('data-target');
        var options_box = $('.element_options[data-target="'+target+'"]');
        var selected = null;
        $(this).click(function(){
            options_box.toggleClass('show');
        });
        var selected_val = ($(target).find('option:selected').length > 0)?$(target).find('option:selected').val():false;
        $(target).find('option').each(function(i){
            var title = $(this).html();
            var val = $(this).val();
            if(i == 0){
                selected = title;
            }
            if($(this).is(':selected')){
                selected = title;
            }
            options_box.append('<div class="option '+((selected_val == val || (selected_val == false && i == 0))?'selected':'')+'" data-value="'+val+'">'+title+'</div>');
        });
        label.html(selected);
        $(target).change(function(){
            label.html($(target).find('option:selected').html());
        });
        $('.element_options[data-target="'+target+'"]').on('click','.option',function(){
            var clicked_val = $(this).attr('data-value');
            var clicked_title = $(this).html();
            $(target).find('option').attr('selected',false);
            $('.element_options[data-target="'+target+'"] .option').removeClass('selected');
            $(this).addClass('selected');
            $(target).find('option[value="'+clicked_val+'"]').attr('selected',true);
            label.html(clicked_title);
            options_box.removeClass('show');
        });
    });
}

/**
 * Tab
 */
$('.app_tab_item').click(function(){
    var item = $(this).attr('data-item');
    var target = $(this).attr('data-target');
    $(target).find('.app_tab_item').removeClass('active');
    $(this).addClass('active');
    $(target).find('.app_tab_body').removeClass('active');
    $(target).find('.app_tab_body[data-item="'+item+'"]').addClass('active');
});

/**
 * Toggle Aside
 */
$('#AppToggleAside').click(function(e){
    e.preventDefault();
    $('body').toggleClass('app_mode_miniaside');
});

/**
 * Window Size Responsive
 */
function app_responsive(){
    var viewportWidth = $(window).width();
    if(viewportWidth > 960){
        $('body').removeClass('app_mode_miniaside');
    }else{
        $('body').addClass('app_mode_miniaside');
    }
}
function app_aside_controller_handler(){
    var viewportWidth = $(window).width();
    if(viewportWidth > 960){
        $('.app_aside_control').show();
    }else{
        $('.app_aside_control').hide();
    }
}
$(window).resize(function() {
    app_responsive();
    app_aside_controller_handler();
});
app_responsive();
app_aside_controller_handler();


/**
 * table-responsive-stack
 */
$(document).ready(function() {

    $('.table-responsive-stack').each(function (i) {
        if($(this).find("th").length > 0){
            var id = $(this).attr('id');
            //alert(id);
            $(this).find("th").each(function(i) {
               $('#'+id + ' td:nth-child(' + (i + 1) + ')').prepend('<span class="table-responsive-stack-thead">'+             $(this).text() + '</span> ');
               $('.table-responsive-stack-thead').hide();
               
            });
        }
    });
 
    
    $( '.table-responsive-stack' ).each(function() {
    var thCount = $(this).find("th").length; 
        var rowGrow = 100 / thCount + '%';
        //console.log(rowGrow);
        $(this).find("th, td").css('flex-basis', rowGrow);   
    });
    
    
    
    
    function flexTable(){
        if ($(window).width() < 768) {
        
        $(".table-responsive-stack").each(function (i) {
        $(this).find(".table-responsive-stack-thead").show();
        $(this).find('thead').hide();
        });
        
        
        // window is less than 768px   
        } else {
        
        
        $(".table-responsive-stack").each(function (i) {
        $(this).find(".table-responsive-stack-thead").hide();
        $(this).find('thead').show();
        });
        
        
    
        }
    // flextable   
    }      
    
    flexTable();
    
    window.onresize = function(event) {
        flexTable();
    };
   
 // document ready  
 });


 /**
  * Chart
  */
  const colors = {
    purple: {
      default: "rgba(76, 111, 254, 1)",
      half: "rgba(76, 111, 254, 0.5)",
      quarter: "rgba(76, 111, 254, 0.25)",
      zero: "rgba(76, 111, 254, 0)"
    },
    indigo: {
      default: "rgba(137, 142, 166, 1)",
      quarter: "rgba(137, 142, 166, 0.25)"
    }
  };
  
  const weight = [60.0, 60.2, 59.1, 61.4, 59.9, 60.2, 59.8, 58.6, 59.6, 59.2];
  
  const labels = [
    "Week 1",
    "Week 2",
    "Week 3",
    "Week 4",
    "Week 5",
    "Week 6",
    "Week 7",
    "Week 8",
    "Week 9",
    "Week 10"
  ];
  
  const ctx = document.getElementById("AppChartCanvas").getContext("2d");
  ctx.canvas.height = 350;
  
  gradient = ctx.createLinearGradient(0, 25, 0, 300);
  gradient.addColorStop(0, colors.purple.half);
  gradient.addColorStop(0.35, colors.purple.quarter);
  gradient.addColorStop(1, colors.purple.zero);
  
  const options = {
    type: "line",
    data: {
      labels: labels,
      datasets: [
        {
          fill: true,
          backgroundColor: gradient,
          pointBackgroundColor: colors.purple.default,
          borderColor: colors.purple.default,
          data: weight,
          lineTension: 0,
          borderWidth: 3,
          pointRadius: 3
        }
      ]
    },
    options: {
      layout: {
        padding: 0
      },
      responsive: true,
      legend: {
        display: false
      },
  
      scales: {
        xAxes: [
          {
            gridLines: {
              display: false
            },
            ticks: {
              padding: 10,
              autoSkip: false,
              maxRotation: 15,
              minRotation: 15
            }
          }
        ]
        //,
        // yAxes: [
        //   {
        //     scaleLabel: {
        //       display: true,
        //       labelString: "Weight in KG",
        //       padding: 10
        //     },
        //     gridLines: {
        //       display: true,
        //       color: colors.indigo.quarter
        //     },
        //     ticks: {
        //       beginAtZero: false,
        //       max: 63,
        //       min: 57,
        //       padding: 10
        //     }
        //   }
        // ]
      }
    }
  };
  
  window.onload = function () {
    window.myLine = new Chart(ctx, options);
    Chart.defaults.global.defaultFontColor = colors.indigo.default;
    if($('body').hasClass('app_mode_en')){
      Chart.defaults.global.defaultFontFamily = "'Manrope'";
    }else{
      Chart.defaults.global.defaultFontFamily = "IRANYekan";
    }
    
  };
  