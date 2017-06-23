$(document).ready(function(){
    function detectBrowser(){
        var userAgent = window.navigator.userAgent.toLowerCase();

        if (userAgent.indexOf('opera') != -1) {
          return 'opera';
        } else if ( userAgent.match(/msie/) || userAgent.match(/trident/)){
          return 'ie';
        } else if (userAgent.indexOf('chrome') != -1) {
          return 'chrome';
        } else if (userAgent.indexOf('safari') != -1) {
          return 'safari';
        } else if (userAgent.indexOf('gecko') != -1) {
          return 'gecko';
        } else {
          return false;
        }
    }

    if("ie" == detectBrowser())
    {
        /* $.snackbar({content:"当サイトはIE非対応です。表示が崩れる場合があります"}); */
        alert("当サイトはIE非対応です。一部ご利用頂けない機能と、レイアウト崩れがあります");
    }
});
