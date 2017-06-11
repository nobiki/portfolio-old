$(document).ready(function(){
    var s = new WebSocket("ws://ws.9zilla.local/");
    s.onopen = function(){
        /* console.log("[onopen]"); */
        /* s.send("connected!!!"); */
    };
    s.onmessage = function(e) {
        /* console.log("[onmessage]"); */
        var pos = JSON.parse(e.data);
        ripple(pos.x,pos.y);
    };
    s.onerror = function(e) {
        /* console.log("[onerror]"); */
        /* console.log(e); */
    };
    s.onclose = function(e) {
        /* console.log("[onclose]"); */
        /* console.log("connection closed.."); */
        /* console.log("Close Code = " + e.code); */
        /* console.log("Close Reason = " + e.reason); */
    };

    $("#intro").on("mouseup",function(e){
        var ox = e.pageX - $("#intro").offset()["left"];
        var oy = e.pageY - $("#intro").offset()["top"];

        var pos = JSON.stringify({ x: ox, y: oy});
        s.send(pos);
    });

    var $clickable = $('.ripple');

    /*
    setInterval(function() {
        var x = Math.floor( Math.random() * 1000 );
        var y = Math.floor( Math.random() * 700 );
        ripple(x,y)
    }, 600);
    */
});

$("#intro").on('mousedown', function(e) {
    var x = e.pageX - $("#intro").offset()["left"];
    var y = e.pageY - $("#intro").offset()["top"];

    ripple(x,y)
});

function ripple(x,y) {
    var $effect = $("#intro").find('.ripple__effect');
    var w       = $effect.width();
    var h       = $effect.height();

    $effect.css({
        left: x - w / 2,
        top: y - h / 2
    });

    /* jsではclassの付け替えをするだけ */
    if (!$effect.hasClass('is-show')) {
        $effect.addClass('is-show');
        setTimeout(function() {
            $effect.removeClass('is-show');
        }, 550);
    }
    return false;
}

