function slider(id, num) {
    publicSlider.pSlider(id, num);
}

var publicSlider = (function () {
    function pSlider(id, num) {
        var tag = "<ol class='carousel-indicators'>";
        //创建轮播图小圆点
        for (var i = 0; i < num; i++) {
            if (i == 0) {
                tag += "<li data-target='#main_ad' data-slide-to='"+i+"' class='active'></li>";
            }
            else {
                tag += "<li data-target='#main_ad' data-slide-to='"+i+"'></li>";
            }
        }
        tag += "</ol>";
        tag += "<div class='carousel-inner' role='listbox'>";
        //创建轮播图
        for (var j = 0; j < num; j++) {
            if (j == 0) {
                tag += "<div class='item active'><img src='../img/index/slider_1.jpg' alt='第1张轮播图'></div>";
            }
            else {
                tag += "<div class='item'><img src='' alt='第" + (j + 1) + "张轮播图'></div>";
            }
        }
        tag += "</div>";
        //创建左箭头
        tag += "<a class='left carousel-control' href='#main_ad' role='button' data-slide='prev'>";
        tag += "<span class='glyphicon glyphicon-chevron-left' aria-hidden='true'></span>";
        tag += "<span class='sr-only'>Previous</span>";
        tag += "</a>";
        //创建右箭头
        tag += "<a class='right carousel-control' href='#main_ad' role='button' data-slide='next'>";
        tag += "<span class='glyphicon glyphicon-chevron-right' aria-hidden='true'></span>";
        tag += "<span class='sr-only'>Next</span>";
        tag += "</a>";
        $(id).append(tag);
    }
    return {
        pSlider: pSlider
    }
})();