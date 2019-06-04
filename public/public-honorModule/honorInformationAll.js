/**
 * @Author:李明慧
 * @Date:2018-11-24
 */
function honorInformation(id, num) {
    honor.honorIntroduce(id, num);
}

var honor = (function() {
    function honorIntroduce(id, num) {
        for (var i = 1; i <= num; i++) {
            var tag = "<section index='" + i + "' id='honorIntroduce' class='wow slideInRight'> ";
            tag += "<div class='container'>";
            tag += "<div class='row'>";
            tag += "<div class='honorIntroduceBox col-lg-12 col-sm-12 col-md-12'>";
            tag += "<div class='honorLogo col-lg-4 col-sm-4 col-md-4'>";
            tag += "<a href='#'>"
            tag += "<img class='honorLogoImg img-responsive' src='../public/public-img/LOGO.jpg' alt='团队LOGO'>" + "</div>" + "</a>";
            tag += "<div class='honorContent col-lg-8 col-sm-8 col-md-8'>";
            tag += "<div class='information'>";
            tag += "<p class='honorName'>" + "荣耀名称：团队管理平台" + "</p>";
            tag += "<p class='honorTeacher'>" + "指导教师：李东琦" + "</p>";
            tag += "<p class='honorHeader'>" + "所属团队：BAR团队" + "</p>";
            tag += "<p class='establishTime'>" + "上传时间：2018年9月9日" + "</p>";
            tag += "</div>";
            tag += "<div class='introduce'>";
            tag += "<p class='honorIntroduceWord'>" + "荣耀简介" + "</p>";
            tag += "<div class='introduceTextarea' readonly>" + "本团队成立于2018年9月9日,我这是测试文字的东西，我就是随便写写，今天阳光明媚，晴朗的日子里，却有些忧伤，或许是因为今天是阴天，看来天气影响人的心情是正确的，今晚看了我不是药神，整的我又忧伤加剧了，搞得我都想思考人生了，但是，人总要强迫自己微笑，而且，我还是是个纯洁无暇的小男生。" + "</div>" + "</div>";
            tag += "<div class='leading'>";
            tag += "<p class='honorLeadingWord'>" + "参与成员" + "</p>";
            tag += "<div class='leadingTextarea' readonly>" + "本团队成立于2018年9月9日,我这是测试文字的东西，我就是随便写写，今天阳光明媚，晴朗的日子里，却有些忧伤，或许是因为今天是阴天，看来天气影响人的心情是正确的，今晚看了我不是药神，整的我又忧伤加剧了，搞得我都想思考人生了，但是，人总要强迫自己微笑，而且，我还是是个纯洁无暇的小男生。" + "</div>";
            tag += "</div>";
            tag += "</div>";
            tag += "</div>";
            tag += "</div>";
            tag += "</div>";
            tag += "</section>";
            $(id).append(tag);
            // 判断动画的方向 偶数右边飞入 奇数左边飞入 
            for (var j = 1; j <= num; j++) {
                if (j % 2 == 0) {
                    $(id).find("section").eq(j).attr("class", "wow slideInRight");

                } else {
                    $(id).find("section").eq(j).attr("class", "wow slideInLeft");
                }
            }
        }
    }
    return {
        honorIntroduce: honorIntroduce
    }


})();
//动画的初始化
new WOW().init();