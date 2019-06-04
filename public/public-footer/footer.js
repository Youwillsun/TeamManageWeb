function init() {
    footer.foot();
}

var footer = (function () {
    function foot() {
        var tag = "<div class='container'>";
        tag += "<div class='row'>";
        tag += "<div class='titleBox col-lg-4 col-md-4 col-sm-4 col-xs-4'>";
        tag += "<div class='title'>";
        tag += "<p class='text-center titleF'>TeamPro</p>";
        tag += "<p class='text-center titleS'>一个为您提供贴心服务的平台</p>";
        tag += "</div>";
        tag += "</div>";
        tag += "<div class='subtitleBox col-lg-8 col-md-8 col-sm-8 col-xs-8 text-center'>";
        tag += "<dl class='productService col-lg-3 col-md-3 col-sm-3 col-xs-3'>";
        tag += "<dt>产品服务</dt>";
        tag += "<dd><a href='teamApplyaction.html'>团队申请</a></dd>";
        tag += "<dd><a href='honorCommit.html'>荣耀申请</a></dd>";
        tag += "<dd><a href='javascript:void(0)'>活动申请</a></dd>";
        tag += "<dd><a href='#'>完善信息</a></dd>";
        tag += "</dl>";
        tag += "<dl class='aboutUs col-lg-3 col-md-3 col-sm-3 col-xs-3'>";
        tag += "<dt>关于我们</dt>";
        tag += "<dd><a href='aboutUs.html'>团队介绍</a></dd>";
        tag += "<dd><a href='#'>加入我们</a></dd>";
        tag += "<dd><a href='#'>问题反馈</a></dd>";
        tag += "</dl>";
        tag += "<dl class='problem col-lg-3 col-md-3 col-sm-3 col-xs-3'>";
        tag += "<dt>常见问题</dt>";
        tag += "<dd><a href='#'>无法登录</a></dd>";
        tag += "<dd><a href='#'>无法注册</a></dd>";
        tag += "</dl>";
        tag += "<dl class='contract col-lg-3 col-md-3 col-sm-3 col-xs-3'>";
        tag += "<dt class='service_title'><a href='#'>BarQ群</a></dt>";
        tag += "</dl>";
        tag += "</div>";
        tag += "</div>";
        tag += "<div class='row'>";
        tag += "<div class='infoBox col-lg-12 col-md-12 col-sm-12 col-xs-12'>";
        tag += "<p class='info text-center'>Copyright<i class='glyphicon glyphicon-copyright-mark'></i>2018&nbsp;版权所有BAR团队&nbsp;地址：安阳市文明大道265号图书馆402&nbsp;<a href='http://www.miitbeian.gov.cn' target='blank' style='color:black;'>豫ICP备案号：18029085</a>&nbsp;维护：安阳师范学院软件学院BAR团队</p>";
        tag += "</div>";
        tag += "</div>";
        tag += "</div>";
        $('#footer').append(tag);
    }
    return {
        foot: foot
    }
})();

init();

//底部的AJAX交互
$.ajax({
    async: true,
    beforeSend: function () {},
    complete: function () {},
    type: "GET",
    url: "/HomePage/GetLoginUserIdentity",
    dataType: "json",
    success: function (data) {
        var data = JSON.stringify(data);
        data = JSON.parse(data);
        footerChange(data);
    },
    error: function (data) {
        console.log(data.status, data.statusText);
    }
});

//封装底部点击事件
function footerChange(data){
    //获取身份标识，通过判断身份标识来判断能不能跳转完善信息界面,游客无法跳转
    //通过吧身份标识传递过去，可以在判断在完善信息界面该不该开放全部权限
    //获取身份标识也可以判断可不可以点击申请页面
    var index = data.identity;
    // 如果为空("no")则是游客
    if(index == "null"){
        //全部禁用
        $('#footer .subtitleBox .productService dd a').eq(0).attr('href','javascript:void(0)');
        $('#footer .subtitleBox .productService dd a').eq(1).attr('href','javascript:void(0)');
        $('#footer .subtitleBox .productService dd a').eq(2).attr('href','javascript:void(0)');
        $('#footer .subtitleBox .productService dd a').eq(3).attr('href','javascript:void(0)');
        $('#footer .subtitleBox .productService dd a').on('click',function(){
            alert('你还未登录!');
            //自动进入登录页面
            window.location.href = "/Login/Index";
            window.event.returnValue = false;
        });
        

    }else if(index == 2 || index == 0){
        //除了完善信息，其他都禁用
        $('#footer .subtitleBox .productService dd a').eq(0).attr('href','javascript:void(0)');
        $('#footer .subtitleBox .productService dd a').eq(1).attr('href','javascript:void(0)');
        $('#footer .subtitleBox .productService dd a').eq(2).attr('href','javascript:void(0)');
        $('#footer .subtitleBox .productService dd a').eq(3).on('click',function(){
            var url = '/ImproveHonor/Index';
            // 此处传递的是身份标识，完善信息页面的用户通过后台cookie获得，返回后主要用于个人的信息完善页面
            window.location.href = url +'?index='+index;
            window.event.returnValue = false;
        });
    }else if(index == 4){
       //除了团队申请禁用，其他开放
       $('#footer .subtitleBox .productService dd a').eq(0).attr('href', 'javascript:void(0)');
       $('#footer .subtitleBox .productService dd a').eq(1).on('click', function () {
           var url = '/HonorSubmit/Index';
           // 点击荣耀申请，可以跳转到荣耀申请界面
           window.location.href = url;
           window.event.returnValue = false;
       });
       $('#footer .subtitleBox .productService dd a').eq(2).on('click', function () {
           alert('功能暂未开放');
       });
       $('#footer .subtitleBox .productService dd a').eq(3).on('click', function () {
           var url = '/ImproveHonor/Index';
           // 此处传递的是身份标识，完善信息页面的用户通过后台cookie获得，返回后主要用于个人的信息完善页面
           window.location.href = url + '?index=' + index;
           window.event.returnValue = false;
       });
    }else if(index == 8 || index == 16){
        //全部开放
        $('#footer .subtitleBox .productService dd a').eq(0).on('click', function () {
            //点击团队申请，进入团队申请页面
            var url = '/Team/TeamApplyation';
            window.location.href = url;
            window.event.returnValue = false;
        });
        $('#footer .subtitleBox .productService dd a').eq(1).on('click', function () {
            var url = '/HonorSubmit/Index';
            // 点击荣耀申请，可以跳转到荣耀申请界面
            window.location.href = url;
            window.event.returnValue = false;
        });
        $('#footer .subtitleBox .productService dd a').eq(2).on('click', function () {
            alert('功能暂未开放');
        });
        $('#footer .subtitleBox .productService dd a').eq(3).on('click', function () {
            var url = '/ImproveHonor/Index';
            // 此处传递的是身份标识，完善信息页面的用户通过后台cookie获得，返回后主要用于个人的信息完善页面
            window.location.href = url + '?index=' + index;
            window.event.returnValue = false;
        });
    }else{
        alert('非法用户!');
        //自动退出其账号
        $.ajax({
            async:true,
            url:"/Quit/QuitLoginUser",
            type:"POST",
            dataType:"json",
            success:function(data){
                var data = JSON.stringify(data);
                data = JSON.parse(data);
                if (data.status == 'ok') {
                    window.location.href = '/HomePage/Index';
                    window.event.returnValue = false;
                }
                if (data.status == 'fail') {
                    cosnole.log(data.status, data.statusText);
                }
            },
            error:function(data){
                console.log(data.status,data.statusText);
            }
        });
    }
}
           