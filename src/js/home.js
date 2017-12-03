// swiper切换效果
$(function() {
    var swiper = new Swiper('.swiper-container1', {
        effect: 'fade',
        onlyExternal: true,
        fade: {
            crossFade: true,
        }
    });
    $(".city_wrapper").on('click', 'a', function(ev) {
        ev.stopPropagation()
        let index = $(this).parent().index();
        swiper.slideTo(index, 1000, false);
    })
    var mySwiper = new Swiper('.swiper-container2', {
        effect: 'flip',
        flipEffect: {
            slideShadows: true,
            limitRotation: true,
        },
        loop: true
    })

})

// 全拼滚动js
$(function() {
    $.fn.fullpage({
        verticalCentered: false,
        anchors: ['page1', 'page2', 'page3', 'page4', 'page5', 'page6'],
        navigation: true,
        navigationTooltips: ['首页', '个人简介', '在路上', '那四年', '心里话', '雨中空港']
    });

});

$(function() {
    $('#camera_wrap').camera({
        height: '400px',
        loader: 'bar',
        pagination: false,
        thumbnails: true
    });
});
// 雨滴效果
$(function() {

    demo();

    function demo() {
        var engine = new RainyDay('canvas', 'demo2', window.innerWidth, window.innerHeight);
        engine.gravity = engine.GRAVITY_NON_LINEAR;
        engine.trail = engine.TRAIL_DROPS;
        engine.VARIABLE_GRAVITY_ANGLE = Math.PI / 8;
        engine.rain([
            engine.preset(0, 2, 0.5),
            engine.preset(4, 4, 1)
        ], 50);
    }

})