/**
 * 二级导航效果
 * @param {*需要应用的jQuery对象} jqEle 
 * @param {*二级导航上移入的效果,传入对象} moveStyleObj 
 * @param {*二级导航上移出的效果,传入对象} outStyleObj 
 * @param {*鼠标移入到jQuery对象上显示的元素} childSelector 
 */
function subNav(jqEle,moveStyleObj,outStyleObj,childSelector){
    jqEle.hover(function(){
        $(this).css(moveStyleObj);
        $(this).find(childSelector).show();
    },function(){
        $(this).css(outStyleObj);
        $(this).find(childSelector).hide();
    })
}