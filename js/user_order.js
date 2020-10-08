/*
 * @Author: your name
 * @Date: 2020-10-06 20:25:37
 * @LastEditTime: 2020-10-08 17:50:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \8yue\DASHANGCHUANG\DashangchuangX\js\user_order.js
 */
// 我的订单
$('.user-mod').find('.square').on('click', function() {
    // 
    $(this).find('.squarepuls').fadeToggle()
    $(this).parent().next().slideToggle()
});
// tabs的切换
$('.user-tabs').find('li>a').on('click', function() {
    $(this).parents('ul').find('a').removeClass('active')
    $(this).addClass('active')
    console.log($('.user-tabs').find('a').index($(this)));
});
// 全部状态
$('.cite ').on('click', function() {
    $(this).parent().find('ul').toggle()
});
//提交信息
$('#senddata').on('click', function() {
    alert('信息已提交')
})