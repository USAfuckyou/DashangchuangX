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
var goods_imgs = [{
    "title": "Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘",
    "imgs": ["../img/yz/goods-img/t1.jpg", "../img/yz/goods-img/t2.jpg", "../img/yz/goods-img/t3.jpg", "../img/yz/goods-img/t4.jpg"]
}, {
    "title": "新款学院风韩版时尚太空棉宽松长袖印花圆领卫衣女",
    "imgs": ["../img/yz/goods-img/tt1.jpg", "../img/yz/goods-img/tt2.jpg", "../img/yz/goods-img/tt3.jpg"]
}, {}, {}, {
    "title": "伊米妮2017春新款简约时尚自然摔牛皮单肩手提大小版波士顿包女包 简约时尚 自然摔牛皮 单肩手提 波士顿包",
    "imgs": ["../img/yz/goods-img/ttt1.jpg", "../img/yz/goods-img/ttt2.jpg", "../img/yz/goods-img/ttt3.jpg", "../img/yz/goods-img/ttt4.jpg", "../img/yz/goods-img/ttt5.jpg", "../img/yz/goods-img/ttt6.jpg"]
}, {
    "title": "华为 HUAWEI Mate 30 麒麟990旗舰芯片4000万超感光徕卡影像屏内指纹8G+128G",
    "imgs": ["../img/yz/goods-img/895280088fb196fe.jpg", "../img/yz/goods-img/24c4e5dde579b413.jpg", "../img/yz/goods-img/2b4b1174c81eaebc.jpg", "../img/yz/goods-img/3c375b6d88723a4f.jpg", "../img/yz/goods-img/5e6f6a41bf8d92e1.jpg", "../img/yz/goods-img/88771c48f6f46005.jpg", "../img/yz/goods-img/b8a39713142e9f56.jpg", "../img/yz/goods-img/ef1fa4082b2ca505.jpg", "../img/yz/goods-img/fef167a8de5e1b4c.jpg", "../img/yz/goods-img/24c4e5dde579b413.jpg"]
}];

var locat = localStorage.getItem("goodss");
if (localStorage.getItem("goodss")) {
    var yzulimgs = "";
    $(".yz-goodsplay>img").attr("src", goods_imgs[locat].imgs[0]);
    $(".yz-enlarge>img").attr("src", goods_imgs[locat].imgs[0]);

    $.each(goods_imgs[locat].imgs, function (index, value) {
        yzulimgs += `<li><img src=${value}></li>`;
    })
    $(".yz-ul").html(yzulimgs);
    $(".yz-goods>h3").text(goods_imgs[locat].title)
}

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
    var y = e.pageY - yzgoodsplay.offsetTop;
    x = x - yzmask.offsetWidth / 2;
    y = y - yzmask.offsetHeight / 2;

    var maxleft = yzgoodsplay.clientWidth - yzmask.offsetWidth;
    var maxtop = yzgoodsplay.clientHeight - yzmask.offsetHeight;
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

yzjia.onclick = function () {
    yznumber.value++;
}
yzjian.onclick = function () {
    if (yznumber.value != 1) {
        yznumber.value--;
    }
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

$(".zjll>.panel-heading>a").on("click", function () {
    if ($(this).parent().siblings().children().length != 0) {
        $(this).parent().siblings().children().remove();
        $(this).parent().siblings().html(`<p style="text-align:center;line-height:35px;">您已清空最近浏览过的商品<br><a href="">去购物<a><p>`)
    }
})

var goods_imgs = [{
    "title": "Razer雷蛇 雨林狼蛛幻彩版 Ornata Chroma 机械式薄膜游戏键盘",
    "imgs": ["../img/yz/goods-img/t1.jpg", "../img/yz/goods-img/t2.jpg", "../img/yz/goods-img/t3.jpg", "../img/yz/goods-img/t4.jpg"]
}, {
    "title": "新款学院风韩版时尚太空棉宽松长袖印花圆领卫衣女",
    "imgs": ["../img/yz/goods-img/tt1.jpg", "../img/yz/goods-img/tt2.jpg", "../img/yz/goods-img/tt3.jpg"]
}, {
    "title": "伊米妮2017春新款简约时尚自然摔牛皮单肩手提大小版波士顿包女包 简约时尚 自然摔牛皮 单肩手提 波士顿包",
    "imgs": ["../img/yz/goods-img/ttt1.jpg", "../img/yz/goods-img/ttt2.jpg", "../img/yz/goods-img/ttt3.jpg", "../img/yz/goods-img/ttt4.jpg", "../img/yz/goods-img/ttt5.jpg", "../img/yz/goods-img/ttt6.jpg"]
}];

localStorage.removeItem("goodss");