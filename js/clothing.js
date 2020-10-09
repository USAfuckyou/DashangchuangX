var zIndex = 0;
var ind = 0;
var timer = null;

function autoplay() {
    $('.l_circle').mouseover(function() {
        console.log(1);
        zIndex++;
        var index = $(this).index();
        $(this).addClass("l_active").siblings().removeClass("l_active");
        $('.l_uli li').eq(index).css('z-index', zIndex);
    });
};
autoplay();

$('.l_actv').click(function() {
    zIndex++;
    ind++;
    $('.l_circle').eq(ind).addClass('l_active').siblings().removeClass('l_active');
    $('.l_uli li').eq(ind).css('z-index', zIndex);
    if (ind == $('.l_circle').length - 1) {
        ind = -1;
    }
});

timer = setInterval(function() {
    $('.l_actv').click();
}, 2000);
// 服装
$('.l_fgoods li').mouseenter(function() {
    console.log($(this).index());
    $(this).addClass('l_on').siblings().removeClass('l_on');
    console.log($('.l_right-uli').eq($(this).index()));
    $('.l_right-uli').eq($(this).index()).show().siblings().hide();
});

$('.l_fgood li').mouseenter(function() {
    console.log($(this).index());
    $(this).addClass('l_on').siblings().removeClass('l_on');
    console.log($('.l_right-uli').eq($(this).index()));
    $('.l_right-uli2').eq($(this).index()).show().siblings().hide();
});

$('.l_fgood1 li').mouseenter(function() {
    console.log($(this).index());
    $(this).addClass('l_on').siblings().removeClass('l_on');
    console.log($('.l_right-uli').eq($(this).index()));
    $('.l_right-uli3').eq($(this).index()).show().siblings().hide();
});

$('.l_fgood2 li').mouseenter(function() {
    console.log($(this).index());
    $(this).addClass('l_on').siblings().removeClass('l_on');
    console.log($('.l_right-uli').eq($(this).index()));
    $('.l_right-uli4').eq($(this).index()).show().siblings().hide();
});

$('.l_fgood3 li').mouseenter(function() {
    console.log($(this).index());
    $(this).addClass('l_on').siblings().removeClass('l_on');
    console.log($('.l_right-uli').eq($(this).index()));
    $('.l_right-uli5').eq($(this).index()).show().siblings().hide();
});
//随手购
var indx = 0;
$('.l_tempwarp > div').click(function() {
    if ($(this).is('.l_rshift')) {
        if (indx >= 0 && indx < 2) {
            indx++;
            var shif = indx * -1200;
            $('.l_tempuli').animate({
                left: shif + 'px'
            });
        };
        if (indx >= 2) {
            $('.l_tempuli').css('left', '-2400px');
        }
        $('.l_cir li').eq(indx).addClass('l_to').siblings().removeClass('l_to');
    };
    if ($(this).is('.l_lshift')) {
        console.log(indx);
        if (indx > 0) {
            indx--;
            var shif = parseInt($('.l_tempuli').css('left')) + 1200;
            $('.l_tempuli').animate({
                left: shif + 'px'
            });
        }
        if (indx == 0) {
            $('.l_tempuli').css('left', '0px');
        }
        $('.l_cir li').eq(indx).addClass('l_to').siblings().removeClass('l_to');
    };
});
// 楼层
$(document).scroll(function() {
    if ($(window).scrollTop() > 350) {
        $('.l_level').fadeIn();
    } else {
        $('.l_level').fadeOut();
    }
    $('.l_l').each(function(index) {
        if ($(window).height() + $(window).scrollTop() - $(this).offset().top > 350) {
            $('.l_level-list').children().not('.l_level-list div').eq($(this).index()).addClass('l_level-item').siblings().removeClass('l_level-item');
        }
    });
});
$('.l_level-list').children().not('.l_level-list div').click(function() {
    $(this).addClass('l_level-item').siblings().removeClass('l_level-item');
    $('body,html').animate({
        scrollTop: $('.l_l').eq($(this).index()).offset().top - 100
    })
});

$('.l_level-list').children('div').off().click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000)
});

$(function(){
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
})