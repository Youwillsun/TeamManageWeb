function init() {
    header.head();
}

var header = (function () {
    function head() {
        var tag = "<nav class='navbar navbar-default' role='navigation'>";
        tag += "<div class='container-fluid'>";
        tag += "<div class='navbar-header'>";
        tag += "<button type='button' class='navbar-toggle' data-toggle='collapse' data-target='#navContent'>";
        tag += "<span class='sr-only'>切换导航</span>";
        tag += "<span class='icon-bar'></span>";
        tag += "<span class='icon-bar'></span>";
        tag += "<span class='icon-bar'></span>";
        tag += "</button>";
        tag += "<a href='index.html'><img class='logo' src='../public/public-img/LOGO.jpg' alt='logo'></a>";
        tag += "<h1>团队管理平台</h1>";
        tag += "</div>";
        tag += "<div id='navContent' class='collapse navbar-collapse'>";
        tag += "<div id='listBox'>";
        tag += "<ul class='nav navbar-nav'>";
        tag += "<li><a href='/HomePage/Index'>首页</a></li>";
        tag += "<li><a href='/Team/Index'>团队信息</a></li>";
        tag += "<li><a href='/HonorALL/Index'>荣耀信息</a></li>";
        tag += "<li><a href='javascript:void(0)' onclick='none()'>活动信息</a></li>";
        tag += "<li><a href='/BaseIntroduce/Index'>基地介绍</a></li>";
        tag += "</ul>";
        tag += "</div>";
        tag += "<div id='btnBox' class='pull-right'>";
        tag += "<ul class='nav navbar-nav'>";
        tag += "<li class='perCenter'>";
        tag += "<a href='#'>注册</a>";
        tag += "<div class='select'>";
        tag += "<div class='perInfoShow'><a href='#'>信息展示</a></div>";
        tag += "<div class='perImprove'><a href='/PerIntroduce/Index'>信息完善</a></div>";
        tag += "</div>";
        tag += "</li>";
        tag += "<li class='quit'><a href='#'>登录</a></li>";
        tag += "</ul>";
        tag += "</div>";
        tag += "</div>";
        tag += "</div>";
        tag += "</nav>";
        $('#header').append(tag);
    }
    return {
        head: head
    }
})();

init();

//头部AJAX，页面加载时自动调用
$.ajax({
    async: true,
    beforeSend: function () { },
    complete: function () { },
    type: "GET",
    url: "/HomePage/GetIndexNavPage",
    dataType: "json",
    success: function (data) {
        var data = JSON.stringify(data);
        data = JSON.parse(data);
        headChange(data);
    },
    error: function (data) {
        console.log(data.status, data.statusText);
    }
});

//导航部分dom操作（若是测试成功记得封装）
function headChange(data) {
    //把导航栏前面的固定连接，文本动态插入
    $('#header .navbar-header a img').src = data.nav.LOGO;
    $('#header #navContent #listBox li a').eq(0).text(data.nav.homePage);
    $('#header #navContent #listBox li a').eq(1).text(data.nav.teamIntroduce);
    $('#header #navContent #listBox li a').eq(2).text(data.nav.teamHonor);
    $('#header #navContent #listBox li a').eq(3).text(data.nav.activeIntroduce);
    $('#header #navContent #listBox li a').eq(4).text(data.nav.baseIntroduce);

    //判断登录注册与个人中心退出的情况，一方有值，则另一方必定为空，把有值的一方写进页面
    if (data.nav.login == null && data.nav.register == null) {
        $('#header #navContent #btnBox .perCenter>a').text(data.nav.personalCenter);
        //获取用户id，给个人中心传输数据
        $('#header #navContent #btnBox li').eq(0).mouseover(function () {
            $('#header #navContent #btnBox .select').css('display', 'block');
        });
        $('#header #navContent #btnBox li').eq(0).mouseleave(function () {
            $('#header #navContent #btnBox .select').css('display', 'none');
        });
        $('#header #navContent #btnBox .select .perInfoShow').on('click', function () {
            var index = data.loginId;
            var url = "/PersonShow/Index";
            window.location.href = url + '?index=' + index;
            window.event.returnValue = false;
        });
        $('#header #navContent #btnBox .quit a').text(data.nav.quit);
        $('#header #navContent #btnBox .quit a').on('click', function () {
            $.ajax({
                async: true,
                url: "/Quit/QuitLoginUser",
                type: "POST",
                dataType: "json",
                success: function (data) {
                    var data = JSON.stringify(data);
                    data = JSON.parse(data);
                    if (data.status == 'ok') {
                        window.location.href = '/HomePage/Index';
                        window.event.returnValue = false;
                    }
                    if (data.status == 'fale') {
                        cosnole.log(data.status, data.statusText);
                    }
                },
                error: function (data) {
                    console.log(data.status, data.statusText);
                }
            });
        });
    } else {
        $('#header #navContent #btnBox .perCenter>a').text(data.nav.register);
        $('#header #navContent #btnBox .perCenter>a').on('click', function () {
            window.location.href = "/Login/Index";
            window.event.returnValue = false;
        });
        $('#header #navContent #btnBox .quit a').text(data.nav.login);
        $('#header #navContent #btnBox .quit a').on('click', function () {
            window.location.href = "/Login/Index";
            window.event.returnValue = false;
        });
    }

    //判断荣耀申请导航链接情况，若有值，则动态创建并插入
    if (data.nav.honorApply != null) {
        var Htag = "<li><a href='/HonorSubmit/Index'>" + data.nav.honorApply + "</a></li>";
        $('#header #navContent #listBox .nav').append(Htag);
    }
    //判断活动申请导航链接情况，若有值，则动态创建并插入
    if (data.nav.activityApply != null) {
        var Atag = "<li><a href='javascript:void(0)' onclick='none()'>" + data.nav.activityApply + "</a></li>";
        $('#header #navContent #listBox .nav').append(Atag);
    }
    //判断团队申请导航超链接情况，若有值，则动态创建并插入
    if (data.nav.teamApply != null) {
        var Ttag = "<li><a href='/Team/TeamApplyaction'>" + data.nav.teamApply + "</a></li>";
        // 把新创建的li标签插进ul里面
        $('#header #navContent #listBox .nav').append(Ttag);
    }
    //判断完善信息导航超链接情况，若有值，则动态创建并插入
    if (data.nav.perfectinformation != null) {
        var Ptag = "<li><a href='/ImproveHonor/Index'>" + data.nav.perfectinformation + "</a></li>";
        // 把新创建的li标签插进ul里面
        $('#header #navContent #listBox .nav').append(Ptag);
    }
}

//功能暂未开放
function none() {
    alert('功能暂未开放！');
}

//调用事件，使导航定位当前页面
function navEven(text) {
    var navList = $('#header #navContent #listBox .nav li');
    for (var i = 0; i < navList.length; i++) {
        $('#header #navContent #listBox .nav li').eq(i).removeClass('active');
        if ($('#header #navContent #listBox .nav li').eq(i).find('a').text() == text) {
            $('#header #navContent #listBox .nav li').eq(i).attr('class', 'active');
        }
    }
}
