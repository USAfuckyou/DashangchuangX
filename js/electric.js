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
// 热门推荐
$('.l_mod').hover(function() {
    $(this).find($('.l_list-btn')).show();
}, function() {
    $(this).find($('.l_list-btn')).hide();
});
$('.l_hdr li').mouseover(function() {
    $(this).addClass('l_on').siblings().removeClass('l_on');
    $('.l_limitim-list').eq($(this).index()).show().siblings().hide();
});
// 大家电
$('.l_fgoods li').mouseenter(function() {
    console.log($(this).index());
    $(this).addClass('l_oon').siblings().removeClass('l_oon');
    $('.l_right-uli').eq($(this).index()).show().siblings().hide();
});
// 生活电器
$('.l_fgood li').mouseenter(function() {
    console.log($(this).index());
    $(this).addClass('l_oon').siblings().removeClass('l_oon');
    $('.l_right-uli2').eq($(this).index()).show().siblings().hide();
});
// 厨房电器
$('.l_fgood1 li').mouseenter(function() {
    console.log($(this).index());
    $(this).addClass('l_oon').siblings().removeClass('l_oon');
    console.log($('.l_right-uli').eq($(this).index()));
    $('.l_right-uli3').eq($(this).index()).show().siblings().hide();
});
// 个护健康
$('.l_fgood2 li').mouseenter(function() {
    console.log($(this).index());
    $(this).addClass('l_oon').siblings().removeClass('l_oon');
    console.log($('.l_right-uli').eq($(this).index()));
    $('.l_right-uli4').eq($(this).index()).show().siblings().hide();
});
// 五金家装
$('.l_fgood3 li').mouseenter(function() {
    console.log($(this).index());
    $(this).addClass('l_oon').siblings().removeClass('l_oon');
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
    if ($(window).scrollTop() > 300) {
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
        scrollTop: $('.l_l').eq($(this).index()).offset().top - 80
    })
});

$('.l_level-list').children('div').off().click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000)
});