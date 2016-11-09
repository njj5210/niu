$(function() {
    var imgs = $(".imgboxs")[0];
    var as = $("a", imgs);
    var btn = $(".btns")[0];
    var lis = $("li", btn);
    var box = $(".boxs")[0];
    var btnleft = $(".btnsleft")[0];
    var btnright = $(".btnsright")[0];
    var bannerbox = $(".bannerboxs")[0];
    var now = 0;
    var next = 0;
    var width = document.body.clientWidth;
    function ch(type) {
        type = type || "right";
        if (type == "left") {
            next--;
            if (next <= -1) {
                next = as.length - 1;
            }
            as[next].style.left = width+"px";
            animate(as[now], {left:width});
        }
        else if (type == "right") {
            next++;
            if (next >= as.length) {
                next = 0;
            }
            as[next].style.left = width+"px";
            animate(as[now], {left: -width});
        }
        animate(as[next], {left: 0});
        lis[next].className = "btns_active";
        lis[now].className = "";
        // bannerbox.style.background=bgcolor[next];
        now = next;
    }

    box.onmouseover = function () {
        btnleft.style.display = "block";
        btnright.style.display = "block";
        clearInterval(t);
    }
    box.onmouseout = function () {
        btnleft.style.display = "none";
        btnright.style.display = "none";
        t = setInterval(ch, 2000);
    }
    btnleft.onclick = function () {
        ch("left")
    }

    btnright.onclick = function () {
        ch("right")
    }

    var t = setInterval(ch, 2000);

    for (var i = 0; i < lis.length; i++) {
        lis[i].aa = i;
        lis[i].onclick = function () {
            next = this.aa;
            as[next].style.left =width+"px";
            imgs[now].style.left = "0px";
            animate(as[now], {left: -width});
            animate(as[next], {left: 0});
            lis[next].className = "btns_active";
            lis[now].className = "";
            now = next;
        }
    }

    var box1=$(".box1")[0];
    var pomter=$(".pomter")[0];
    var box5=$(".box5")[0];
    var box6=$(".box6")[0];
    var box3=$(".box3")[0];
    box1.onclick=function(){
        pomter.style.display="block";
        box5.style.display="none";
        box1.style.display="none";
        box3.style.display="none";
    }
    box6.onclick=function(){
        pomter.style.display="none";
        box5.style.display="block";
        box1.style.display="block";
        box3.style.display="block";
    }

})