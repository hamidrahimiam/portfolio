var mi = {
    search:{
        show: function () {
            $('nav .info .info_i').removeClass('active');
            $('.mi-search').addClass('show');
        },
        close: function () {
            $('.mi-search').removeClass('show');
        }
    },
    nav:{
        less: function(){
            $('body').toggleClass('less');
            $('.controlLess').toggleClass('active');
        },
        notific: function(i){
            if(i.parent().hasClass('active')){
                i.parent().removeClass('active');
            }else{
                $('nav .info .info_i').removeClass('active');
                i.parent().addClass('active');
            }
        }
    },
    aside:{
        link: function(i,e){
            if(i.parent().hasClass('have_child'))
                e.preventDefault();
            if(i.parent().hasClass('open'))
                i.parent().removeClass('open');
            else{
                $('aside li').removeClass('open');
                i.parent().addClass('open');
            }
        }
    },
    responsive: function(){
        var win = $(window);
        if (win.width() < 800) {
            $('body').addClass('less');
        }else{
            $('body').removeClass('less');
        }

        if(win.width() < 515 && $('body').hasClass('less')) {
            $('body').addClass('mores');
        }else{
            $('body').removeClass('mores');
        }
    }
};
mi.responsive();
$('aside li a').click(function(e){mi.aside.link($(this),e)});
$('.controlLess').click(function(){mi.nav.less()});
$('.controlSearch').click(function(){mi.search.show()});
$('.controlSearchClose').click(function(){mi.search.close()});
$('nav .info .info_i .info_i_btn').click(function(){mi.nav.notific($(this))});
$(window).on('resize', function(){mi.responsive()});