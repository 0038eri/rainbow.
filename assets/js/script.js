$(function () {

    var ua = navigator.userAgent;

    window.onload = function () {
        // ページ読み込み時に実行したい処理
        loopActive();
    }

    // スクロールプラグイン

    var current;
    $.scrollify({
        section: ".wrapper",
        scrollSpeed: 750,
        scrollbars: false,
        updateHash: false,
        setHeights: true
    });

    // プログレスバー

    var progress;
    var progressArray = new Array();
    var loopTime = 100;
    var percentage = 0;
    var angle = 0;

    $('.label').hover(
        function () {
            loopFalse();
        },
        function () {
            loopActive();
        }
    );

    function loopActive() {
        progressArray.push(progress = setInterval(loop, loopTime));
    }

    function loopFalse() {
        if (progressArray.length > 0) {
            clearInterval(progressArray.shift());
        }
    }

    function loop() {
        if (percentage >= 100) {
            percentage = 0;
            angle += 45;
            colorCount();
        } else {
            percentage += 2;
        }

        $('.progress-bar').css({
            'width': percentage + 'vw'
        });

        $('.target').css({
            'transform': 'rotate(' + angle + 'deg)'
        });
    }

    // バックグラウンドカラー

    var colorNum = 0;

    function colorCount() {
        if (colorNum === 7) {
            colorNum = 0;
        } else {
            colorNum++;
        }
        if (ua.indexOf('iPhone') > 0 || ua.indexOf('Android') > 0 && ua.indexOf('Mobile') > 0) {
            changeColorM();
        } else if (ua.indexOf('iPad') > 0 || ua.indexOf('Android') > 0) {
            changeColorM();
        } else {
            changeColor();
        }
    }

    function changeColor() {
        switch (colorNum) {
            case 0:
                $('.colorBg').removeClass('pink');
                $('.colorBg').addClass('red');
                $('h2').text('レッド');
                $('.illust-label').attr('src', './assets/images/label/red.png');
                $('.illust').attr('src', './assets/images/illust/red.png');
                break;
            case 1:
                $('.colorBg').removeClass('red');
                $('.colorBg').addClass('orange');
                $('h2').text('オレンジ');
                $('.illust-label').attr('src', './assets/images/label/orange.png');
                $('.illust').attr('src', './assets/images/illust/orange.png');
                break;
            case 2:
                $('.colorBg').removeClass('orange');
                $('.colorBg').addClass('yellow');
                $('h2').text('イエロー');
                $('.illust-label').attr('src', './assets/images/label/yellow.png');
                $('.illust').attr('src', './assets/images/illust/yellow.png');
                break;
            case 3:
                $('.colorBg').removeClass('yellow');
                $('.colorBg').addClass('green');
                $('h2').text('グリーン');
                $('.illust-label').attr('src', './assets/images/label/green.png');
                $('.illust').attr('src', './assets/images/illust/green.png');
                break;
            case 4:
                $('.colorBg').removeClass('green');
                $('.colorBg').addClass('lightblue');
                $('h2').text('ライトブルー');
                $('.illust-label').attr('src', './assets/images/label/lightblue.png');
                $('.illust').attr('src', './assets/images/illust/lightblue.png');
                break;
            case 5:
                $('.colorBg').removeClass('lightblue');
                $('.colorBg').addClass('blue');
                $('h2').text('ブルー');
                $('.illust-label').attr('src', './assets/images/label/blue.png');
                $('.illust').attr('src', './assets/images/illust/blue.png');
                break;
            case 6:
                $('.colorBg').removeClass('blue');
                $('.colorBg').addClass('purple');
                $('h2').text('パープル');
                $('.illust-label').attr('src', './assets/images/label/purple.png');
                $('.illust').attr('src', './assets/images/illust/purple.png');
                break;
            case 7:
                $('.colorBg').removeClass('purple');
                $('.colorBg').addClass('pink');
                $('h2').text('ピンク');
                $('.illust-label').attr('src', './assets/images/label/pink.png');
                $('.illust').attr('src', './assets/images/illust/pink.png');
                break;
        }
        console.log('changeColor');
    }

    function changeColorM() {
        switch (colorNum) {
            case 0:
                $('.colorBg').removeClass('pink');
                $('.colorBg').addClass('red');
                $('h2').text('レッド');
                $('.illust-label').attr('src', './assets/images/tablet-mobile/label/red.png');
                $('.illust').attr('src', './assets/images/illust/red.png');
                break;
            case 1:
                $('.colorBg').removeClass('red');
                $('.colorBg').addClass('orange');
                $('h2').text('オレンジ');
                $('.illust-label').attr('src', './assets/images/tablet-mobile/label/orange.png');
                $('.illust').attr('src', './assets/images/illust/orange.png');
                break;
            case 2:
                $('.colorBg').removeClass('orange');
                $('.colorBg').addClass('yellow');
                $('h2').text('イエロー');
                $('.illust-label').attr('src', './assets/images/tablet-mobile/label/yellow.png');
                $('.illust').attr('src', './assets/images/illust/yellow.png');
                break;
            case 3:
                $('.colorBg').removeClass('yellow');
                $('.colorBg').addClass('green');
                $('h2').text('グリーン');
                $('.illust-label').attr('src', './assets/images/tablet-mobile/label/green.png');
                $('.illust').attr('src', './assets/images/illust/green.png');
                break;
            case 4:
                $('.colorBg').removeClass('green');
                $('.colorBg').addClass('lightblue');
                $('h2').text('ライトブルー');
                $('.illust-label').attr('src', './assets/images/tablet-mobile/label/lightblue.png');
                $('.illust').attr('src', './assets/images/illust/lightblue.png');
                break;
            case 5:
                $('.colorBg').removeClass('lightblue');
                $('.colorBg').addClass('blue');
                $('h2').text('ブルー');
                $('.illust-label').attr('src', './assets/images/tablet-mobile/label/blue.png');
                $('.illust').attr('src', './assets/images/illust/blue.png');
                break;
            case 6:
                $('.colorBg').removeClass('blue');
                $('.colorBg').addClass('purple');
                $('h2').text('パープル');
                $('.illust-label').attr('src', './assets/images/tablet-mobile/label/purple.png');
                $('.illust').attr('src', './assets/images/illust/purple.png');
                break;
            case 7:
                $('.colorBg').removeClass('purple');
                $('.colorBg').addClass('pink');
                $('h2').text('ピンク');
                $('.illust-label').attr('src', './assets/images/tablet-mobile/label/pink.png');
                $('.illust').attr('src', './assets/images/illust/pink.png');
                break;
        }
    }
    console.log('changeColorM');

});