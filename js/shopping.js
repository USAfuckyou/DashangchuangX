$(function() {
    $('button').click(function() {
        if ($(this).text() == '+') {
            var spanAmt = $(this).parent().prev().text();
            spanAmt++;
            $(this).parent().prev().text(spanAmt);
            $(this).parents('.cm1').find('.cm1_input input').prop('checked', true);
        } else {
            var spanAmt = $(this).parent().prev().text();
            if (spanAmt == 1) {
                alert('不能再少了!');
            } else {
                spanAmt--;
                $(this).parent().prev().text(spanAmt);
            }
        }
        $(this).parent().prev().trigger('input');
    });
    $('.cm1_amt1').children('span').on('input', function() {
        // 商品单价
        var cm1_price = Number($(this).parent().parent().prev().children('span').text());
        //数量
        var cm1_sub = Number($(this).text());
        //数量增加后的小计
        $(this).next().children('.bnt2').parent().parent().parent().next().children('span').text(cm1_price * cm1_sub);
        $(this).parent().parent().parent().children('.cm1_input').children().trigger('change');
    });

    //全选绑定内容监听事件
    $('.All').change(function() {
        // 当全选被选中时,所有的input选中
        if ($(this).prop('checked')) {
            $('input[type=checkbox]').prop('checked', true);
        } else {
            $('input[type=checkbox]').prop('checked', false);
        }
        $(this).parent().parent().next('.coms1').find('.inpcom1 input').trigger('change');
    });
    // 给除了全选绑定内容监听事件
    $('.box').find('input[type=checkbox]').not('.All').change(function() {
        if (!$(this).prop('checked')) {
            $('.All').prop('checked', false);
        };
    });
    // 商品自营中的input
    $('.inpcom1 input').change(function() {
        if (clicked($('.inpcom1 input'))) {
            $('.All').prop('checked', true)
        }
        if ($(this).prop('checked')) {
            $(this).parent().parent().parent().find('input[type=checkbox]').not('.inpcom1 input').prop('checked', true);
        }
        if (!$(this).prop('checked')) {
            $(this).parent().parent().parent().find('input[type=checkbox]').not('.inpcom1 input').prop('checked', false);
        }
        $(this).parent().parent().parent().find('input[type=checkbox]').not('.inpcom1 input').trigger('change');
    });
    // 商品的input
    $('.coms1').find('input[type=checkbox]').not($('.inpcom1 input')).on('change', function() {
        // 判断商品是否全选
        if (clicked($('.coms1').find('input[type=checkbox]').not($('.inpcom1 input')))) {
            $('.All').prop('checked', true)
        };
        // 判断商品自营中下的两个input是否选中
        if (clicked($(this).parent().parent().parent().find('input[type=checkbox]').not($('.inpcom1 input')))) {
            $(this).parents('.coms1').find('.inpcom1').children('input').prop('checked', true);
        }
        if (!$(this).prop('checked')) {
            $(this).parents('.coms1').find('.inpcom1').children('input').prop('checked', false);
        };

        var seled = $('.coms1').find('input[type=checkbox]').not($('.inpcom1 input')).filter(function(index, value) {
            return (value.checked === true)
        });
        // console.log(seled);
        var count = 0;
        var mont = 0;
        for (var j = 0; j < seled.length; j++) {
            //小计
            count += Number($(seled[j]).parent().next().next().next().next().children('span').text());
            // 数量
            mont += Number($(seled[j]).parent().next().next().next().children().children('span').text());
        };
        //数量
        $('.mesub').children('span').text(mont);
        //总价
        $('.total').children('span').text(count);
    });


    function clicked(prices) {
        for (var i = 0; i < prices.length; i++) {
            if (prices[i].checked == false) {
                return false;
            }
        }
        return true;
    };
    //删除
    var that;
    var ddel = null;
    var deinp = null;
    $('.del a').click(function() {
        that = this;
        ddel = $(this).parents('.cmn');
        $('.mask').show();
        deinp = $(this).parents('.coms1').find('input[type=checkbox]').not($('.inpcom1 input'));
    });
    $('.confirm').click(function() {
        $(that).parent().parent().remove();
        $('.mask').hide();
        //小计
        var num = Number($(that).prev().children('span').text());
        //数量
        var prce = Number($(that).parent().parent().find('.cm1_amt1 span').text());
        //数量
        var mesub = Number($('.mesub').children('span').text());
        $('.mesub').children('span').text(mesub - prce);
        //总价
        var count = Number($('.total').children('span').text());
        $('.total').children('span').text(count - num)
        if ($('.total').children('span').text(0)) {
            $('.total').children('span').text(0)
        };
        if ($('.mesub').children('span').text(0)) {
            $('.mesub').children('span').text(0)
        };
        if (ddel.children().length == 0) {
            ddel.parents('.coms1').remove();
        };
        deinp.trigger('change');
    });
    $('.cancel').click(function() {
        console.log(1);
        $('.mask').hide();
    });
});