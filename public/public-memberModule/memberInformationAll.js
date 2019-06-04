/**
 * @Author:李明慧
 * @Date:2018-11-24
 */
function memberInformation(id, num) {
    member.memberIntroduce(id, num);
}

var member = (function() {
    function memberIntroduce(id, num) {
        for (var i = 1; i <= num; i++) {
            var tag = "<section index='" + i + "' id='memberIntroduce' class='wow slideInRight'> ";
            tag += "<div class='container'>";
            tag += "<div class='row'>";
            tag += "<div class='memberIntroduceBox col-lg-12 col-sm-12 col-md-12'>";
            tag += "<div class='memberLogo col-lg-4 col-sm-4 col-md-4'>";
            tag += "<a href='#'>"
            tag += "<img class='memberLogoImg img-responsive' src='' alt='团队LOGO'>" + "</div>" + "</a>";
            tag += "<div class='memberContent col-lg-8 col-sm-8 col-md-8'>";
            tag += "<div class='information'>";
            tag += "<p class='memberName'>" + "姓名：阿斯达" + "</p>";
            tag += "<p class='memberTeacher'>" + "性别：男" + "</p>";
            tag += "<p class='memberHeader'>" + "团队职务：指导教师" + "</p>";
            tag += "<p class='establishTime'>" + "联系方式：15515182060" + "</p>";
            tag += "</div>";
            tag += "<div class='introduce'>";
            tag += "<p class='memberIntroduceWord'>" + "个人简介" + "</p>";
            tag += "<div class='introduceTextarea'>" + "本团队成立于2018年9月9日,我这是测试文字的东西，我就是随便写写，今天阳光明媚，晴朗的日子里，却有些忧伤，或许是因为今天是阴天，看来天气影响人的心情是正确的，今晚看了我不是药神，整的我又忧伤加剧了，搞得我都想思考人生了，但是，人总要强迫自己微笑，而且，我还是是个纯洁无暇的小男生。" + "</div>" + "</div>";
            tag += "<div class='leading'>";
            tag += "<p class='memberLeadingWord'>" + "兴趣爱好" + "</p>";
            tag += "<div class='leadingTextarea'>" + "本团队成立于2018年9月9日,我这是测试文字的东西，我就是随便写写，今天阳光明媚，晴朗的日子里，却有些忧伤，或许是因为今天是阴天，看来天气影响人的心情是正确的，今晚看了我不是药神，整的我又忧伤加剧了，搞得我都想思考人生了，但是，人总要强迫自己微笑，而且，我还是是个纯洁无暇的小男生。" + "</div>";
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
        memberIntroduce: memberIntroduce
    }


})();
//动画的初始化
new WOW().init();