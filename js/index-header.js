$(function(){
    // 顶部的广告
    $('.bm_close').click(function(){
        $('.top_banner').fadeOut();
    })
    
    // 获取到商品列表
    var goodsLis = $('.hb_goods_nav').children('ol').children();
    subNav(goodsLis,{'background-color':'#000'},{'background-color':'#333'},'.goods_info');
    
    // 轮播图
    var i = 1;//用于当小圆点的下标进行控制
    $('.cc_item').click(function(){
        $(this).prop({'class':'cc_item active'}).siblings().prop({'class':'cc_item'});
        var temp_click = $('.car_imgs').children().eq($(this).index());
        temp_click.addClass('img_active');
        temp_click.siblings().removeClass('img_active');
        i = $(this).index(); //使其进行同步
    })
   
    function auto(){
        $('.cc_item').get(0).timer = setInterval(function(){
            console.log(i);
            console.log($('.cc_item').length);
            if(i < $('.cc_item').length){
                $('.cc_item').get(i).click();
                i++;
            }else{
                i = 0;
                // 因为超过最大长度时会走一次，图不会动
                $('.cc_item').get(i).click();
                i++;
            }
        },3000)
    }
    auto();
    // 鼠标移入停止
    $('.car_imgs').mouseover(function(){
        clearInterval($('.cc_item').get(0).timer);
    });
    // 鼠标移出继续
    $('.car_imgs').mouseout(function(){
        auto();
    });

    // 公告和促销的切换
    $('.uo_midden').find('span').click(function(){
        $('.uo_midden').find('span').each(function(index,ele){
            $(ele).removeClass('activeColor');
            $('.uo_con').eq(index).removeClass('active');

            // 添加表标识
            $(ele).prop('temp',index);
        })
        $(this).addClass('activeColor');
        $('.uo_con').eq($(this).prop('temp')).addClass('active');
    })
});

