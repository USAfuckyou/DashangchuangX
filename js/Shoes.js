var baonea = document.getElementById('baone');
var batwob = document.getElementById('batwo');
var boqtwoc = document.getElementById('boqtwo');
var boqsand = document.getElementById('boqsan');
var hignaa = document.getElementById('higna');
var hignbb = document.getElementById('hignb');

var bastwoa = document.getElementById('bastwo');
var bosana = document.getElementById('bosan');
var bosrighta = document.getElementById('bosright');
var boslefta = document.getElementById('bosleft');
console.log(boslefta)

// boslefta.onclick = function() {
//     bastwoa.style.left = "-1100px";

// }

// bosrighta.onclick = function() {
//     bastwoa.style.left = "100px"
// }


var flag = 0;

function uio(mjn, kuan) {
    clearInterval(mjn.qq);

    mjn.qq = setInterval(function() {

        if (mjn.offsetLeft == kuan) {
            clearInterval(mjn.qq)
        } else {
            // 目标值和当前位置之差/10
            var hik = (kuan - mjn.offsetLeft) / 10;

            hik = hik > 0 ? Math.ceil(hik) : Math.floor(hik);
            mjn.style.left = mjn.offsetLeft + hik + 'px';
        }
    }, 50)
}

boslefta.onclick = function() {
    if (flag == 0) {
        uio(bastwoa, -1100);
        flag++;
    } else {
        bosrighta.onclick();
    }

};

bosrighta.onclick = function() {
    if (flag == 0) {
        boslefta.onclick();
    } else {
        uio(bastwoa, 0);
        flag--;
    }
};










baonea.onmouseover = function() {
    boqtwo.style.display = "block";
    boqsan.style.display = "none";
    hignaa.style.color = "red";
    hignbb.style.color = "black";
}
batwob.onmouseover = function() {
    boqtwo.style.display = "none";
    boqsan.style.display = "block";
    hignaa.style.color = "black";
    hignbb.style.color = "red";
}