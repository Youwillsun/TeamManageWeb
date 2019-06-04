function baseImage(id, num) {
    
    //动态创建轮播图
    for (var i = 0; i < num; i++) {
        var tag = "<li><a href='javascript:void(0)'><img class='img-responsive' src='../img/baseIntroduction/slider_1.jpg' alt='第" + (i + 1) + "张轮播图图片'/></a></li>";
        $(id).append(tag);
    }

    // 设置动画，设置左右箭头
    var Page = (function () {
        var $navArrows = $('#nav-arrows').hide(),
            slicebox = $('#sb-slider').slicebox({
                onReady: function () {
                    $navArrows.show();
                },
                orientation: 'r',
                cuboidsRandom: true,
                disperseFactor: 30,
                sequentialFactor: 150,
                speed: 600, //每一块3D立方体的速度
                autoplay: true //是否自动开始切换
            }),
            init = function () {
                initEvents();
            },
            initEvents = function () {
                // add navigation events
                $navArrows.children(':first').on('click', function () {
                    message();
                    slicebox.next();
                    return false;
                });
                $navArrows.children(':last').on('click', function () {
                    message();
                    slicebox.previous();
                    return false;
                });
            };
        return {
            init: init
        };
    })();
    Page.init();

    //判断用户是否点击了左右按钮，点击则交换轮播图控制权限
    var isFirst = true;
    function message() {
        if (isFirst) {
            alert('您正在替换轮播图控制权');
            isFirst = false;
        }
    }

    //调用wow动画
    new WOW().init();
}
