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

yzsml.flag = 0;
yziet.flag = 0;
yzsml.onclick = yziet.onclick = function () {
    if (this.parentElement.className == "yz-setmeal yz-selected") {
        if (yzsml.flag == 0) {
            this.parentElement.style.height = (this.parentElement.children.length - 1) * 30 + "px";
            yzsml.flag++;
        } else {
            this.parentElement.style.height = "30px";

            yzsml.flag--;
        }
    } else if (this.parentElement.className == "yz-increment yz-selected") {
        if (yziet.flag == 0) {
            this.parentElement.style.height = (this.parentElement.children.length - 1) * 30 + "px";
            yziet.flag++;
        } else {
            this.parentElement.style.height = "30px";

            yziet.flag--;
        }
    }
}
// console.log(yznumber)
yzjia.onclick = function () {
    yznumber.value++;
}
yzjian.onclick = function () {
    if (yznumber.value != 1) {
        yznumber.value--;
    }
}
for (var m = 0; m < yzstaging.children.length; m++) {
    yzstaging.children[m].onclick = function () {
        for (var i = 0; i < yzstaging.children.length; i++) {
            yzstaging.children[i].className = "";
        }
        this.className = "keyselect1";
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