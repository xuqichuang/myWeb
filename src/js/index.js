// 文字滚动特效
$(function() {
    $("#marquee").marquee({
        yScroll: "bottom",
        showSpeed: 850,
        scrollSpeed: 12,
        pauseSpeed: 3000,
        pauseOnHover: true,
        fxEasingShow: "swing",
        fxEasingScroll: "linear",
        cssShowing: "marquee-showing",
        init: null,
        beforeshow: null,
        show: null,
        aftershow: null
    });
});
// 九宫格
$("#gesturepwd").GesturePasswd({
    backgroundColor: "rgba(0,0,0,.6)", //背景色
    color: "#FFFFFF", //主要的控件颜色
    roundRadii: 25, //大圆点的半径
    pointRadii: 6, //大圆点被选中时显示的圆心的半径
    space: 30, //大圆点之间的间隙
    width: 240, //整个组件的宽度
    height: 240, //整个组件的高度
    lineColor: "#00aec7", //用户划出线条的颜色
    zindex: 100 //整个组件的css z-index属性
});
$("#gesturepwd").on("hasPasswd", function(e, passwd) {
    var result;
    if (passwd == "1235789") {
        result = true;
    } else {
        result = false;
    }
    if (result == true) {
        $("#gesturepwd").trigger("passwdRight");
        setTimeout(function() {
            layer.confirm('点击确定进入首页', {
                btn: ['确认', '取消'], //按钮,
                anim: 1
            }, function() {
                loader = new SVGLoader(document.getElementById('loader'), {
                    speedIn: 300,
                    easingIn: mina.easeinout
                });
                loader.show();
                setTimeout(function() {
                    loader.hide();
                }, 2000);
                $('.layui-layer').fadeOut();
                setTimeout(function() {
                    window.location.href = './home.html'
                }, 2000)
            });
        }, 500);
    } else {
        $("#gesturepwd").trigger("passwdWrong");
    }
});

// 音乐播放
var oAudio = new Audio()
$('.music').on('click', function() {
    var $this = $(this);
    if ($('.audio')[0].paused) {
        $('.audio')[0].play();
        $this.css('animation', 'musicRotate 5s infinite linear');
    } else {
        $('.audio')[0].pause();
        $this.css('animation', 'none');
    }
})