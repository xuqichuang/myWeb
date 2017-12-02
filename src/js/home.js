$(function() {

    // $(".text1").letterfx({
    //     "fx": "fly-right fly-bottom spin"
    // });
    // var swiper = new Swiper('.swiper-container');

    // $(".city_wrapper li").prepend("<span></span>");

    // $(".city_wrapper li").each(function() {
    //     var linkText = $(this).find("a").html();
    //     $(this).find("span").show().html(linkText);
    // });

    // $(".city_wrapper li").hover(function(ev) {
    //     ev.stopPropagation()
    //     $(this).find("span").stop().animate({
    //         marginTop: "-40"
    //     }, 250);
    // }, function() {
    //     $(this).find("span").stop().animate({
    //         marginTop: "0"
    //     }, 250);
    // });
    // // 带音乐的导航
    // var str = 'abcde'
    // $('.city_wrapper').on('mouseenter', 'span', function() {
    //     var v = $(this).parent().index();
    //     var oAudio = new Audio('https://s2.ssl.qhimg.com/share/audio/piano1/' + str.charAt(v) + '4.ogg')
    //     oAudio.play();
    // })
    $("#flipbook").turn({
        width: 650,
        height: 400,
        duration: 300,
        gradients: true,
        page: 2

    });
    // $("#flipbook").turn({
    //     width: 400,
    //     height: 300
    // });

})