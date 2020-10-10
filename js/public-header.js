$(function(){
    // 顶部的广告
    $('.bm_close').click(function(){
        $('.top_banner').fadeOut();
    })

    //走到一定距离显示的搜索框
    $(window).scroll(function(){
        if($(document).scrollTop() > $('.nav_page').offset().top){
           $('.attached-search-container').slideDown();
        }else{
            $('.attached-search-container').slideUp();
        }
    })

    // 购物车的显示与隐藏
    $('.rb_cart').hover(function(){
        $(this).css({'border-bottom':'none'});
        $('.cart_hover').show();
    },function(){
        $('.cart_hover').hide();
        $(this).css({'height':'30px','border-bottom':'1px solid #ccc'});
    })
    
    // 头部滑出的导航栏————商品分类的下拉菜单
    $('.hb_package').mouseover(function(){
        $(this).find('.hb_goods_nav').show();
        // 获取到商品列表
        var goodsLis = $('.hb_package>.hb_goods_nav').children('ol').children();
        subNav(goodsLis,{'background-color':'#000'},{'background-color':''},'.goods_info');
        
    })
    $('.hb_title').mouseout(function(){
        $(this).find('.hb_goods_nav').hide();
    })

    // 男装女装的二级导航
    var clothing_goods = $('.clothing_goods + .cn_goods_nav').children('ul').children();
    console.log(clothing_goods)
    subNav(clothing_goods,{'background-color':'#E02B61'},{'background-color':''},'.categorys-content');

    // 家用电器二级导航
    $('.categorys-item').mouseover(function(){
        $(this).css('background-color','#006BBC').find('.categorys-items-layer').show();
        $(this).find('.jiadian_arrow').css('visibility','visible');
    });
    $('.categorys-item').mouseout(function(){
        $(this).css('background-color','').find('.categorys-items-layer').hide();
        $(this).find('.jiadian_arrow').css('visibility','hidden');
    });


    // 侧边功能
    $('.aside_left').find('li').hover(function(){
        $(this).find('.move_box').show();
        $(this).find('.move_box').animate({
            'right':'40px'
        });
       
    },function(){
        $(this).find('.move_box').hide();
        $(this).find('.move_box').animate({
            'right':'80px'
        });
    })

    // 控制滑入滑出
    $('.aside_left').find('li:eq(1)').on('click',function(){
        if(parseInt($('.aside').css('right')) < 0){
            // 点击第二个li时滑出
            $(this).parents('.aside').animate({
                'right':'0'
            })
            $(this).css('background-color','#f00');
        }else{
            $(this).parents('.aside').animate({
                'right':'-270px'
            })
            $(this).css('background-color','');
        }
    });

    // 滑出是点击关闭按钮关闭
    $('.ar_close').click(function(){
        $(this).parents('.aside').animate({
            'right':'-270px'
        })
    })

});

