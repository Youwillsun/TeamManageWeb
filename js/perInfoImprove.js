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
$('.basic_infor .select-image-btn').click(function () {
    $('.basic_infor .cropit-image-input').click();
});
//团队LOGO输出图片
$('.basic_infor .export').click(function () {
    var imageData = $('.basic_infor .image-editor').cropit('export', {
        type: 'image/jpeg',
    });
    $('.basic_infor .image-editor .userLogoImg').attr('src',imageData);
});

gradeClass();

// 班级和年级联动函数
function gradeClass() {
    //构造年级和班级的JSON数组
    var gradeJson = [{ "id": "1", "gName": "2016级" }, { "id": "2", "gName": "2017级" }, { "id": "3", "gName": "2018级" }];
    //构造班级json
    var classJson = [{ "id": "01", "cName": "软件工程专业.NET一班", "gId": "1" }, { "id": "02", "cName": "软件工程专业移动一班", "gId": "1" }, { "id": "03", "cName": "软件工程专业数据库一班", "gId": "1" }, { "id": "04", "cName": "软件工程专业数据库二班", "gId": "1" }, { "id": "05", "cName": "软件工程专业Java一班", "gId": "1" }, { "id": "06", "cName": "软件工程专业Java二班", "gId": "1" }, { "id": "07", "cName": "软件工程专业Java三班", "gId": "1" }, { "id": "08", "cName": "软件工程专业Java四班", "gId": "1" }, { "id": "09", "cName": "软件工程专业.NET一班", "gId": "2" }, { "id": "10", "cName": "软件工程专业移动一班", "gId": "2" }, { "id": "11", "cName": "软件工程专业数据库一班", "gId": "2" }, { "id": "12", "cName": "软件工程专业数据库二班", "gId": "2" }, { "id": "13", "cName": "软件工程专业Java一班", "gId": "2" }, { "id": "14", "cName": "软件工程专业Java二班", "gId": "2" }, { "id": "15", "cName": "软件工程专业Java三班", "gId": "2" }, { "id": "16", "cName": "软件工程专业Java四班", "gId": "2" }, { "id": "17", "cName": "软件工程专业软工一班", "gId": "3" }, { "id": "18", "cName": "软件工程专业软工二班", "gId": "3" }, { "id": "19", "cName": "软件工程专业软工三班", "gId": "3" }, { "id": "20", "cName": "软件工程专业软工四班", "gId": "3" }, { "id": "21", "cName": "软件工程专业软工五班", "gId": "3" }, { "id": "22", "cName": "软件工程专业软工六班", "gId": "3" }, { "id": "23", "cName": "软件工程专业软工七班", "gId": "3" }, { "id": "24", "cName": "软件工程专业软工八班", "gId": "3" }];

    // 动态创建年级下拉列表
    for (var i = 0; i < gradeJson.length; i++) {
        var tag = "<option value=" + gradeJson[i].id + ">" + gradeJson[i].gName + "</option>";
        $('.basic_infor .grade_major #grade').append(tag);
    }
    //创建班级下拉列表，保持联动
    $('.basic_infor .grade_major #grade').change(function () {
        //获取选择的value值
        var gId = this.value;
        //清空下拉框
        $('.basic_infor .grade_major #custom-marginR').html('');
        for (var i = 0; i < classJson.length; i++) {
            if (gId == classJson[i].gId) {
                var tag = "<option cId=" + classJson[i].id + ">" + classJson[i].cName + "</option>";
                $('.basic_infor .grade_major #custom-marginR').append(tag);
            }
        }
    });
}