var yzul = document.querySelector(".yz-ul");
var yzli = document.querySelector(".yz-ul").children;
var yztoleft = document.querySelector(".yz-toleft");
var yztoright = document.querySelector(".yz-toright");
var yzgoodsplay = document.querySelector(".yz-goodsplay");
var yzgoodsplayimg = document.querySelector(".yz-goodsplay").firstChild;
var yzenlarg = document.querySelector(".yz-enlarge")
var yzenlargeimg = document.querySelector(".yz-enlarge").firstChild;
var yzmask = document.querySelector(".yz-mask");
var maxleft = yzgoodsplay.clientWidth - yzmask.offsetWidth;
var maxtop = yzgoodsplay.clientHeight - yzmask.offsetHeight;
var yzsetmeal = document.querySelector(".yz-setmeal");
var yzsml = document.querySelector(".yz-sml");
var yzincrement = document.querySelector(".yz-increment");
var yziet = document.querySelector(".yz-iet");
var yznumber = document.querySelector(".yz-number").firstElementChild;
var yzjia = document.querySelector(".yz-jia");
var yzjian = document.querySelector(".yz-jian");
var yzstaging = document.querySelector(".yz-staging");
yzul.style.width = 80 * yzli.length + "px";
// 手动轮播
function run(ele, target) {
    clearInterval(ele.time);
    ele.time = setInterval(function () {
        if (ele.offsetLeft == target) {
            clearInterval(ele.time);
        } else if (ele.offsetLeft > target) {
            var step = (ele.offsetLeft - 10) < target ? target : ele.offsetLeft - 10;
            ele.style.left = step + "px";
        } else if (ele.offsetLeft < target) {
            var step = (ele.offsetLeft + 10) > target ? target : ele.offsetLeft + 10;
            ele.style.left = step + "px";
        }
    }, 50);
}

yztoleft.onclick = function () {
    if (Math.abs(yzul.offsetLeft) == yzul.offsetWidth - (80 * 4)) {
        // console.log(yzul.offsetLeft);
        yztoleft.style.cursor = "no-drop";
    } else if (yzul.offsetLeft <= 0) {
        yztoright.style.cursor = "pointer";
        var target = yzul.offsetLeft - 80;
        run(yzul, target)
    }
}
yztoright.onclick = function () {
    if (yzul.offsetLeft == 0) {
        // console.log(yzul.offsetLeft);
        yztoright.style.cursor = "no-drop";
    } else if (yzul.offsetLeft < 0) {
        yztoleft.style.cursor = "pointer";
        var target = yzul.offsetLeft + 80;
        run(yzul, target)
    }
}

// 循环绑定移入事件
for (var i = 0; i < yzli.length; i++) {
    yzli[i].onmouseover = function () {
        yzgoodsplayimg.src = this.firstChild.src;
        yzenlargeimg.src = this.firstChild.src;
        // console.log(this.firstChild.src);
    }
}

// 图片放大镜
yzgoodsplay.onmouseover = function () {
    yzmask.style.display = "block";
    yzenlarg.style.display = "block";
}
yzgoodsplay.onmousemove = function (e) {
    var x = e.pageX - yzgoodsplay.offsetLeft;
    // console.log(x);
    var y = e.pageY - yzgoodsplay.offsetTop;
    // console.log(y);
    x = x - yzmask.offsetWidth / 2;
    y = y - yzmask.offsetHeight / 2;

    var maxleft = yzgoodsplay.clientWidth - yzmask.offsetWidth;
    var maxtop = yzgoodsplay.clientHeight - yzmask.offsetHeight;
    // console.log(maxleft);
    if (x <= 0) {
        x = 0;
    } else if (x >= maxleft) {
        x = maxleft;
    }
    if (y <= 0) {
        y = 0;
    } else if (y >= maxtop) {
        y = maxtop;
    }

    yzmask.style.top = y + "px";
    yzmask.style.left = x + "px";

    yzenlargeimg.style.top = "-" + yzmask.offsetTop * (732 / 366) + "px";
    yzenlargeimg.style.left = "-" + yzmask.offsetLeft * (732 / 366) + "px";
}
yzgoodsplay.onmouseout = function () {
    yzmask.style.display = "none";
    yzenlarg.style.display = "none";
}

var yzlasimg = document.querySelector(".yz-lasimg");
var yzexchange = document.getElementsByClassName("yz-exchange");
yzlasimg.index = 0;
yzlasimg.onclick = function () {
    for (var i = 0; i < yzexchange.length; i++) {
        yzexchange[i].className = "yz-exchange";
    }
    yzexchange[yzlasimg.index].className = "yz-exchange yz-ehe";
    yzlasimg.index++;
    if (yzlasimg.index > yzexchange.length - 1) {
        yzlasimg.index = 0;
    }
}



$(".ps>div>span").click(function (e) {
    $(this).parent().toggleClass("play1").children("div").toggleClass("play2");
});
var abssd = {
    "北京市": {
        "北京市": ["朝阳区", "海淀区", "通州区"]
    },
    "河南省": {
        "郑州市": ["中原区", "二七区", "新郑市"],
        "南阳市": ["南阳市", "卧龙区", "邓州市"],
        "新乡市": ["新乡市", "卫滨区", "红旗区"]
    },
    "江苏省": {
        "苏州市": ["金阊区", "沧浪区", "平江区"],
        "徐州市": ["徐州市", "云龙区", "鼓楼区"]
    }
}
var sheng = "";
$.each(abssd, function (index, value) {
    sheng += "<span>" + index + "</span>";
});
$(".ps>div>div>div").children("#sheng").html(sheng).on("click", "span", function () {
    $(this).parents("[class^=tab-content]").prev().find('[href="#sheng"]').text($(this).text()).parent().toggleClass("active");
    $(this).parents("[class^=tab-content]").prev().find('[href="#sheng"]').parent().next().addClass("active");
    $(this).parent().toggleClass("active");
    var shi = "";
    var i = $(this).parents("[class^=tab-content]").prev().find('[href="#sheng"]').text();
    $.each(abssd[i], function (index, value) {
        shi += "<span>" + index + "</span>";
    });
    $(".ps>div>div>div").children("#shi").html(shi).off().on("click", "span", function () {
        $(this).parents("[class^=tab-content]").prev().find('[href="#shi"]').text($(this).text()).parent().toggleClass("active");
        $(this).parents("[class^=tab-content]").prev().find('[href="#shi"]').parent().next().addClass("active");
        $(this).parent().toggleClass("active");
        var xian = "";
        $.each(abssd[i][$(this).parents("[class^=tab-content]").prev().find('[href="#shi"]').text()], function (index, value) {
            xian += "<span>" + value + "</span>";
        });
        $(".ps>div>div>div").children("#xian").html(xian).off().on("click", "span", function () {
            $(".ps>div>span:first").text($('[href = "#sheng"]').text() + "," + $('[href="#shi"]').text() + "," + $(this).text())
            $(".ps>div>div").parent().toggleClass("play1").children("div").toggleClass("play2");
        });
        $(this).parent().next().addClass("active");
    });
    $(this).parent().next().addClass("active");
});