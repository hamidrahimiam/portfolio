/**
 * Elements
 */
 var elements = {
    loader: {
        item: $('#loader'),
        show: function (){
            this.item.addClass('show');
        },
        hide: function (){
            this.item.removeClass('show');
        },
    },
};
/**
 * helper
 */
var helper = {
    redirect: function (url,finder = null,id = null){
        url = url.replace(finder,id);
        window.location.href = url;
    }
};

/**
 * Automate
 */
if( $('select[data-autoselectedoption]').length > 0 ){
    $('select[data-autoselectedoption]').each(function(index){
        var val = $(this).attr('data-autoselectedoption');
        if(val != '')
            $(this).val(val);
    });
}

/**
 * Select2
 */
 $(document).ready(function() {
    $('.select2').select2();
});


/**
 * btnDo %Any%
 */
$('.btnDo').click(function(e){
    e.preventDefault();
    var btn = $(this);
    var warning_message = 'آیا از انجام این کار اطمینان دارید؟';
    if($(this).attr('data-warning') !== undefined)
        warning_message = $(this).attr('data-warning');
    Swal.fire({
        title: 'آیا اطمینان دارید؟',
        text: warning_message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'بله انجامش بده',
        cancelButtonText: 'بیخیال',
    }).then((result) => {
        if(result.value){
            var request = null;
            if(btn.attr('data-request').toLowerCase() == 'delete')
                request = axios.delete(btn.attr('data-url'));
            else if(btn.attr('data-request').toLowerCase() == 'get')
                request = axios.get(btn.attr('data-url'));
            else if(btn.attr('data-request').toLowerCase() == 'post')
                request = axios.post(btn.attr('data-url'));
            else if(btn.attr('data-request').toLowerCase() == 'patch')
                request = axios.patch(btn.attr('data-url'));
            else if(btn.attr('data-request').toLowerCase() == 'put')
                request = axios.put(btn.attr('data-url'));
            elements.loader.show();
            request.then(function (response) {
                Swal.fire({
                    title: 'موفقیت آمیز',
                    text: 'عملیات مورد نظر با موفقیت انجام شد',
                    icon: 'success',
                    confirmButtonText: 'باشه'
                }).then((result) => {
                    elements.loader.show();

                    if(btn.attr('data-redirect') === undefined || btn.attr('data-redirect') == '')
                        window.location.reload();
                    else
                        window.location.href = btn.attr('data-redirect');
                });
            })
            .catch(function (error) {
                if(error.response){
                    Swal.fire({
                        title: 'خطا',
                        text: error.response.data.error.message,
                        icon: 'error',
                        confirmButtonText: 'باشه'
                    });
                }else{
                    Swal.fire({
                        title: 'خطا',
                        text: 'خطایی در اتصال به سیستم رخ داده است، لطفا دوباره تلاش کنید',
                        icon: 'error',
                        confirmButtonText: 'باشه'
                    });
                }
            }).then(function(){
                elements.loader.hide();
            });
        }
    });
});

/**
 * Valid Url
 */
function validURL(str) {
    var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
    '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(str);
}



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