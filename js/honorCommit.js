//调用动画
new WOW().init();
//动态创建修改列
function modifyColumn(name, userID,number, identity) {
    var UL = "<ul class='moify'>";
    UL += "<li>";
    UL += "<label for='name' class='control-label'>姓名:</label>";
    UL += "<p class='content textMess' id='name'>" + name + "</p>";
    UL += "</li>";

    UL += "<li>";
    UL += "<label for='name' class='control-label'>学号:</label>";
    UL += "<p class='content textMess' id='num' index="+userID+">" + number + "</p>";
    UL += "</li>";

    UL += "<li>";
    UL += "<label for='name' class='control-label'>手机:</label>";
    UL += "<p class='content textMess' id='identity'>" + identity + "</p>";
    UL += "</li>";

    UL += "<li class='btn'>";
    UL += "<button class='btn btn-info btn-md changeBtn'>修改</button>";
    UL += "</li>";
    $('#Message').append(UL);
}
//定义一个数组变量,用来存放
var arr = new Array();
//定义门限值，若是第一次点击，则无需判断
var num = 0;
$('#Message>.active li .addBtn').on('click', function () {
    var nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
    var numberReg = /^\d{9}$/;
    var identityReg = /^1(3|4|5|7|8)\d{9}$/;
    //拿到userID
    var userID = $('#Message>.active li #num').attr('index');
    var name = $('#Message>.active li #name').val();
    var number = $('#Message>.active li #num').val();
    var identity = $('#Message>.active li #identity').val();
    //添加列的任何一个文本都不能为空
    if (name == "" || number == "" || identity == "") {
        alert('信息未完善，请先去完善信息！');
        return false;
    }
    //正则表达式验证
    var nameFlag = nameReg.test(name);
    if (!nameFlag) {
        alert('姓名格式有误，请检查！');
        return false;
    }
    var numberFlag = numberReg.test(number);
    if (!numberFlag) {
        alert('学号格式有误，请检查！');
        return false;
    }
    var identityFlag = identityReg.test(identity);
    if(!identityFlag){
        alert('手机号格式有误，请检查！');
        return false;
    }
    //把学号加入数组，留作判断
    arr.push(number);
    //只要不是第一次判断，就进行学号匹配
    if (num != 0) {
        for (var i = 0; i < arr.length; i++) {
            //因为先进行了数组的添加，所以只匹配i-1个
            if (number == arr[i - 1]) {
                alert('信息(学号)重复，请修改！');
                arr.splice(i - 1, 1);
                return false;
            }
        }
    }
    //调用函数，传入参数，创建修改列
    modifyColumn(name,userID, number, identity);
    //清空添加列的文本
    $('#Message>.active li #name').val("");
    $('#Message>.active li #num').val("");
    $('#Message>.active li #identity').val("");
    //清除userID
    $('#Message>.active li #num').removeAttr('index');
    //门限值+1
    num++;
    //调用点击按钮的事件，这里调用是为了保证每次添加一行时，都能及时的注册上修改按钮事件
    changeBtnClick();
});
//设置修改点击事件，点击修改按钮，清除一行标签，把修改列的值添加到添加行
function changeBtnClick() {
    $('#teamMembers .isMember .moify li .changeBtn').on('click', function () {
        //获取修改文本框的值
        var name = $(this).parent().prevAll().find('#name').text();
        var number = $(this).parent().prevAll().find('#num').text();
        var identity = $(this).parent().prevAll().find('#identity').text();
        //把这些值添加到添加行的文本中
        $('#Message>.active li #name').val(name);
        $('#Message>.active li #num').val(number);
        $('#Message>.active li #identity').val(identity);
        //清除这一行文本
        $(this).parent().parent().remove();
        //清除数组中的对应学号
        for (var i = 0; i < arr.length; i++) {
            ///匹配和删除学号相同的数组中的学号，并进行删除
            if (number == arr[i]) {
                arr.splice(i, 1);
            }
        }
    });
}