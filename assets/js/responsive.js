$(function () {

    var ua = navigator.userAgent;

    if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {

        $('#stylesheet').attr('href', './assets/css/mobile.css');
        $('#illust .label').attr('src', './assets/images/tablet-mobile/label/red.png');
        $('#message .label').attr('src', './assets/images/tablet-mobile/label/message.png');
        console.log('iphone');

    } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {

        $('#stylesheet').attr('href', './assets/css/mobile.css');
        $('#illust .label').attr('src', './assets/images/tablet-mobile/label/red.png');
        $('#message .label').attr('src', './assets/images/tablet-mobile/label/message.png');
        console.log('ipad');
    }

});