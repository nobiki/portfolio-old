$(document).ready(function(){
    $('.timeline').timelify({
        animLeft: "fadeInLeft",
        animCenter: "fadeInUp",
        animRight: "fadeInRight",
        animSpeed: 600,
        offset: 150
    });
    $("#js-rotating").Morphext({
        animation: "bounceIn",
        separator: ",",
        speed: 2000,
        complete: function () {}
    });
    var swiper = new Swiper('.swiper-container', {
        pagination: '.swiper-pagination',
        paginationClickable: true,
        parallax: true,
        nextButton: '.swiper-button-next',
        prevButton: '.swiper-button-prev',
        speed: 600,
        loop: true,
    });
    // $('#intro').ripples({
    //     resolution: 512,
    //     dropRadius: 20,
    //     perturbance: 0.05,
    //     interactive: true,
    // });
});

// $(function() {
//     var $clickable = $('#intro');
//
//     #<{(| mousedownだと直ぐに発動し、clickだとマウスボタンを離した時に発動する |)}>#
//     $clickable.on('mousedown', function(e) {
//         var _self   = this;
//         var x       = e.offsetX;
//         var y       = e.offsetY;
//
//         var $effect = $(_self).find('.ripple__effect');
//         var w       = $effect.width();
//         var h       = $effect.height();
//
//         console.log(x);
//         console.log(y);
//         console.log(w);
//         console.log(h);
//         console.log(Math.round(x - w / 2));
//         console.log(Math.round(y - h / 2));
//         #<{(| クリックした座標を中心とする |)}>#
//         $effect.css({
//             // left: Math.round(x - w / 2),
//             // top: Math.round(y - h / 2)
//             left: x,
//             top: y
//         });
//
//         #<{(| jsではclassの付け替えをするだけ |)}>#
//         if (!$effect.hasClass('is-show')) {
//             $effect.addClass('is-show');
//             setTimeout(function() {
//                 $effect.removeClass('is-show');
//             }, 750);
//         }
//         return false;
//     });
//
// });
