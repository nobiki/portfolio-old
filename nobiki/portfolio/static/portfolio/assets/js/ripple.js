var ripple_color = ["orange","blue","black"]
var ripple_no = Math.round( Math.random()*2);

$(document).ready(function(){
    var url = $("#intro").data("url");
    var s = new WebSocket("ws://"+url+"/");

    s.onopen = function(){
        /* console.log("[onopen]"); */
        /* s.send("connected!!!"); */
    };
    s.onmessage = function(e) {
        /* console.log("[onmessage]"); */
        var obj = JSON.parse(e.data);
        ripple(obj.x,obj.y,obj.color);
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

        var pos = JSON.stringify({ x: ox, y: oy, color: ripple_color[ripple_no]});
        s.send(pos);
    });
});

$("#intro").on('onemousedown', function(e) {
    var x = e.pageX - $("#intro").offset()["left"];
    var y = e.pageY - $("#intro").offset()["top"];

    ripple(x,y,ripple_color[ripple_no])
});

function ripple(x,y,color) {
    var uniqueId = new Date().getTime().toString(16)  + Math.floor(1000*Math.random()).toString(16);

    var $effect = $("<span></span>", {
        id: "ripple-"+uniqueId,
        addClass: "ripple__effect is-"+color+" is-show",
    });

    $("#intro").append($effect);

    var w       = $effect.width();
    var h       = $effect.height();

    $effect.css({
        left: x - w / 2,
        top: y - h / 2
    });

    setTimeout(function() {
        $("#ripple-"+uniqueId).remove();
    }, 550);

    return false;
}

