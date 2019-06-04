//调用动画
new WOW().init();

//图片剪切初始化
$('.image-editor').cropit({
    //加载小图片
    smallImage: 'allow',
    // 让图片脱离边框
    freeMove: true,
    //图片加载时的缩放
    initialZoom: 'min'
});

//团队LOGO选择图片
$('.preTeamInfo .teamLogoInfo .select-image-btn').click(function () {
    $('.preTeamInfo .teamLogoInfo .cropit-image-input').click();
});
//团队LOGO输出图片
$('.preTeamInfo .teamLogoInfo .export').click(function () {
    var imageData = $('.preTeamInfo .teamLogoInfo .image-editor').cropit('export', {
        type: 'image/jpeg',
    });
    $('.preTeamInfo .teamLogoInfo .teamLogoImg').attr('src',imageData);
});

//团队轮播选择图片
$('.preTeamInfo .teamSliderInfo .select-image-btn').click(function () {
    $('.preTeamInfo .teamSliderInfo .cropit-image-input').click();
});
//团队轮播输出图片
$('.preTeamInfo .teamSliderInfo .export').click(function () {
    var imageData = $('.preTeamInfo .teamSliderInfo .image-editor').cropit('export', {
        type: 'image/jpeg'
    });

    $('.preTeamInfo .againUpLoad img').each(function () {
        if ($(this).attr('src') == '') {
            $(this).attr('src', imageData);
            return false;
        }
    });
});
//团队轮播重新生成图片
$('.preTeamInfo .againUpLoad button').each(function () {
    $(this).on('click', function () {
        $(this).prev().attr('src', '');
    });
});


//荣耀LOGO选择图片
$('.preGloryInfo .gloryLogoInfo .select-image-btn').click(function () {
    $('.preGloryInfo .gloryLogoInfo .cropit-image-input').click();
});
//荣耀LOGO输出图片
$('.preGloryInfo .gloryLogoInfo .export').click(function () {
    var imageData = $('.preGloryInfo .gloryLogoInfo .image-editor').cropit('export', {
        type: 'image/jpeg',
    });
    $('.preGloryInfo .gloryLogoInfo .gloryLogoImg').attr('src',imageData);
});

//荣耀轮播选择图片
$('.preGloryInfo .glorySlideInfo .select-image-btn').click(function () {
    $('.preGloryInfo .glorySlideInfo .cropit-image-input').click();
});
//荣耀轮播输出图片
$('.preGloryInfo .glorySlideInfo .export').click(function () {
    var imageData = $('.preGloryInfo .glorySlideInfo .image-editor').cropit('export', {
        type: 'image/jpeg'
    });

    $('.preGloryInfo .againUpLoad img').each(function () {
        if ($(this).attr('src') == '') {
            $(this).attr('src', imageData);
            return false;
        }
    });
});
//荣耀轮播重新生成图片
$('.preGloryInfo .againUpLoad button').each(function () {
    $(this).on('click', function () {
        $(this).prev().attr('src', '');
    });
});


//遮罩层封装
function honorMaskLayer(id,num){
    var tag = "<div class='thaBox'>";
        tag+="<h3 class='thaTitle'>请选择你要完善的荣耀</h3>";
        tag+="<table class='table table-hover table-striped'>";
            tag+="<thead class='active'>";
                tag+="<tr>";
                    tag+="<td>序号</td>";
                    tag+="<td>荣耀名称</td>";
                    tag+="<td>指导教师</td>";
                    tag+="<td>上传时间</td>";
                tag+="</tr>";
            tag+="</thead>";
            tag+="<tbody>";
                for(var i = 0;i<num;i++){
                    tag+="<tr index="+(i+1)+">";
                        tag+="<td>"+(i+1)+"</td>";
                        tag+="<td>团队管理平台</td>";
                        tag+="<td>梅玲落</td>";
                        tag+="<td>2018年12月1日</td>";
                    tag+="</tr>";
                }
            tag+="</tbody>";
        tag+="</table>";
    tag+="</div>";
    $(id).append(tag);
}

//改变导航默认状态
navEven('完善信息');