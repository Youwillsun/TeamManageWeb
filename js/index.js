var indexContent = (function () {
    function teamInfo(id) {
        var tag = "<div class='teamProfile'>";
        tag += "<div class='teamProFont wow slideInDown'>团队简介</div>";
        tag += "<div class='moreFont wow slideInDown'><a href='/Team/Index'>更多...</a></div>";
        tag += "</div>";
        tag += "<div class='cityBox wow slideInDown'><p>团队信息</p></div>";
        tag += "<div class='teamsInfoBox wow slideInDown'>";
        for (var i = 0; i < 8; i++) {
            tag += "<div class='teamInfoBox' index='" + (i + 1) + "'>";
            tag += "<a href='#'><img src='../img/index/teamLogo.png' alt='团队LOGO' class='img-responsive'></a>";
            tag += "<div class='teamBgbox' style='display: none;'>";
            tag += "<p class='fp'>团队名称：BAR团队</p>";
            tag += "<p class='tp'>成立时间：2018年09月12日</p>";
            tag += "</div>";
            tag += "</div>";
        }
        tag += "</div>";
        $(id).append(tag);
    }
    function gloryInfo(id) {
        var tag = "<div class='gloryProfile'>";
        tag += "<div class='gloryProFont wow slideInDown'>荣耀简介</div>";
        tag += "<div class='moreFont wow slideInDown'><a href='/HonorALL/Index'>更多...</a></div>";
        tag += "</div>";
        tag += "<div class='cityBox wow slideInDown'><p>荣耀信息</p></div>";
        tag += "<div class='glorysInfoBox wow slideInDown'>";
        for (var j = 0; j < 8; j++) {
            tag += "<div class='gloryInfoBox' index='" + (j + 1) + "'>";
            tag += "<a href='#'><img src='../img/index/teamLogo.png' alt='荣耀LOGO' class='img-responsive'></a>";
            tag += "<div class='gloryBgbox' style='display: none;'>";
            tag += "<p class='fp'>项目名称：团队管理平台</p>";
            tag += "<p class='tp'>完成时间：2018年09月12日</p>";
            tag += "</div>";
            tag += "</div>";
        }
        tag += "</div>";
        $(id).append(tag);
    }
    function activityInfo(id) {
        var tag = "<div class='activityProfile'>";
        tag += "<div class='activityProFont wow slideInDown'>活动简介</div>";
        tag += "<div class='moreFont wow slideInDown'><a href='javascript:void(0)'>更多...</a></div>";
        tag += "</div>";
        tag += "<div class='cityBox wow slideInDown'><p>活动信息</p></div>";
        tag += "<div class='activitysInfoBox wow slideInDown'>";
        for (var k = 0; k < 8; k++) {
            tag += "<div class='activityInfoBox' index='" + (k + 1) + "'>";
            tag += "<a href='javascript:void(0)'><img src='../img/index/teamLogo.png' alt='活动LOGO' class='img-responsive'></a>";
            tag += "<div class='activityBgbox' style='display: none;'>";
            tag += "<p class='fp'>活动名称：JSON课堂</p>";
            tag += "<p class='tp'>举办时间：2018年09月22日</p>";
            tag += "</div>";
            tag += "</div>";
        }
        tag += "</div>";
        $(id).append(tag);
    }
    function animate() {
        //调用动画
        new WOW().init();
        $('.teamsInfoBox').hover(function () {
            $('.teamBgbox').fadeToggle(500);
            // $('.teamInfoBox p').css('backgroundColor', '#ccc');
        });
        $('.glorysInfoBox').hover(function () {
            $('.gloryBgbox').fadeToggle(500);
        });
        $('.activitysInfoBox').hover(function () {
            $('.activityBgbox').fadeToggle(500);
        });
    }
    return {
        teamInfo: teamInfo,
        gloryInfo: gloryInfo,
        activityInfo: activityInfo,
        animate: animate
    }
})();

function index() {
    indexContent.teamInfo('#teamInfo');
    indexContent.gloryInfo('#gloryInfo');
    indexContent.activityInfo('#activityInfo');
    indexContent.animate();
    //改变导航默认状态
    navEven('首页');
}

index();