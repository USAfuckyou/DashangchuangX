$(function(){
    // 顶部的广告
    $('.bm_close').click(function(){
        $('.top_banner').fadeOut();
    })


    // 导航栏点击样式
    $('.nav_page>ul>li').click(function(e){
        $(e.target).addClass('nav_active').parent('li').siblings().children('a').removeClass('nav_active')
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

    // 获取到商品列表
    var goodsLis = $('.hb_content>.hb_goods_nav').children('ol').children();
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

    // 头部滑出的导航栏————商品分类的下拉菜单
    $('.hb_title').mouseover(function(){
        $(this).find('.hb_goods_nav').show();
        // 获取到商品列表
        var goodsLis = $('.hb_title>.hb_goods_nav').children('ol').children();
        subNav(goodsLis,{'background-color':'#000'},{'background-color':''},'.goods_info');
        
    })
    $('.hb_title').mouseout(function(){
        $(this).find('.hb_goods_nav').hide();
    })
    

    // 跳楼效果
    var oLi = $('.lift_list>ul>li');
    $(window).scroll(function(){
        // 判断当前被卷去的距离是否大于到主题内容1到页面顶部的距离减去导航条高度
        if($(this).scrollTop() >= $('.nh-main').offset().top-62){
            $('.lift_list').fadeIn();
        }else{
            $('.lift_list').fadeOut();
        }

        if($(this).scrollTop() < $('.ms').offset().top-62){
            $(oLi).eq(0).addClass('active').siblings().removeClass('active');
        } 
        if($(this).scrollTop() >= $('.ms').offset().top-62){
            $(oLi).eq(1).addClass('active').siblings().removeClass('active');
        }
        if($(this).scrollTop() >= $('.jh').offset().top-62){
            $(oLi).eq(2).addClass('active').siblings().removeClass('active');
        }
        if($(this).scrollTop() >= $('.fxhh').offset().top-62){
            $(oLi).eq(3).addClass('active').siblings().removeClass('active');
        }
        if($(this).scrollTop() >= $('.txp').offset().top-62){
            $(oLi).eq(4).addClass('active').siblings().removeClass('active');
        }
        if($(this).scrollTop() >= $('.sixbox').offset().top-62){
            $(oLi).eq(5).addClass('active').siblings().removeClass('active');
        }
        if($(this).scrollTop() >= $('.goods').offset().top-62){
            $(oLi).eq(6).addClass('active').siblings().removeClass('active');
        }
    })
    // 存放每个楼层的id
    var floorArr = ['.ms','.jh','.fxhh','.txp','.sixbox','.goods'];

    $(oLi).click(function(){
        $('html,body').animate({
            // 使用jQuery的方法获取到对应数组中的楼层名 并得到该楼层距离页面顶部的距离 去掉导航栏部分
            scrollTop:$($(floorArr).eq($(this).index())[0]).offset().top-62
        })
    })

    $('.gotop').off().click(function(){
        $('html,body').animate({
            scrollTop:'0'
        })
    })

});

