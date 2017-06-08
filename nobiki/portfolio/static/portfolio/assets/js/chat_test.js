$(document).ready(function(){
    var s = new WebSocket("ws://ws.9zilla.local/");
    s.onopen = function(){
        console.log("[onopen]");
        s.send("connected!!!");
    };
    s.onmessage = function(e) {
        console.log("[onmessage]");
        console.log(e.data);
        $.snackbar({content: e.data});

    };
    s.onerror = function(e) {
        console.log("[onerror]");
        console.log(e);
    };
    s.onclose = function(e) {
        console.log("[onclose]");
        console.log("connection closed..");

        console.log("Close Code = " + e.code);
        console.log("Close Reason = " + e.reason);
    };

    $("#intro").on("click",function(e){
        var ox=e.offsetX;
        var oy=e.offsetY;
        console.log("[x]"+ox+" [y]"+oy);
        s.send("[x]"+ox+" [y]"+oy);
    });

});
