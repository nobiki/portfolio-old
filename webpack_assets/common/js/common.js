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
