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

});

