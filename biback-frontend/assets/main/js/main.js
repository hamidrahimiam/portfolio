/* Sync Upload Image Buttons */
$('#BoxImageUpload,#BtnImageUploadb').click(function(){ $('#InpImageUpload').click(); });

/* Upload File Image Buttons */
$('#InpImageUpload').change(function(){ $('.main_loading').addClass('show');$('#FrmImageUpload').submit(); });

/* Submit Ticket */
$('#createTicketForm').submit(function(){ $('.main_loading').find('b').html('تیکت در حال ارسال می‌باشد. لطفا کمی صبر کنید');$('.main_loading').addClass('show'); });

/* Submit Ticket Reply */
$('#createReplyTicketForm').submit(function(){ $('.main_loading').find('b').html('پاسخ در حال ارسال می‌باشد. لطفا کمی صبر کنید');$('.main_loading').addClass('show'); });

/* Remove Image Queue */
$('.removed_images .image').each(function(){
    if($(this).attr('data-export').length < 1){
        var image = $(this);
        var url = window.location.origin+'/remove/'+image.attr('data-type')+'/'+image.attr('data-owner');
        console.log(url);
        axios.get(url)
        .then(function (response) {
            if(typeof response.data.export != "undefined" && response.data.export){
                image.find('.export').html('<img src="'+response.data.export+'">');
                image.find('.download').removeClass('d-none');
            }else{
                Swal.fire({
                    title: 'انجام نشد',
                    text: "متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                    icon: 'error',
                    confirmButtonText: 'باشه'
                });
            }
        })
        .catch(function (error) {
            Swal.fire({
                title: 'انجام نشد',
                text: (typeof error.response.data.error.message != "undefined")?error.response.data.error.message:"متاسفانه عملیات مورد نظر انجام نشد. دوباره تلاش کنید",
                icon: 'error',
                confirmButtonText: 'باشه'
            });
        });
    }
});

/**
 * Window Size Responsive
 */
 function app_responsive(){
    var viewportWidth = $(window).width();
    if(viewportWidth > 1280){
        $('body').removeClass('app_mobile_mode');
        $('body').removeClass('app_active_nav_mode');
    }else{
        $('body').addClass('app_mobile_mode');
    }
}
$(window).resize(function() {
    app_responsive();
});
app_responsive();

/**
 * Toggle Responsive
 */
 $('.main_nav .toggle button').click(function(){
    if($('body').hasClass('app_active_nav_mode')){
        $('body').removeClass('app_active_nav_mode');
    }else{
        $('body').addClass('app_active_nav_mode');
    }
});

/**
 * Toggle Upload Type
 */
$('.upload-type-item').click(function(){
    if(!$(this).parent().hasClass('disable')){
        $('.upload-type-item').removeClass('selected');
        $(this).addClass('selected');
        $('input[name=type]').val($(this).attr('data-type'));
    }
});

/**
 * Hide Responsive Box
 */
$('body.app_mobile_mode .main_nav .menu a').click(function(){
    $('body').removeClass('app_active_nav_mode');
});

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
        if ($(window).width() < 1280) {
        
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