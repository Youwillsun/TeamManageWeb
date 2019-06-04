//调用动画
new WOW().init();
//把删除对应的列进行封装，可以添加按钮时动态创建
function txts(userId, stuName, stuNumber, stuSex, stuAge, stuMajor, stuPhone) {
    var tag = '<div class="txts">';
    tag += '<ul>';
    tag += '<li><p class="txtName" index=' + userId +'>' + stuName + '</p></li>';
    tag += '<li><p class="txtNo">' + stuNumber + '</p></li>';
    tag += '<li><p class="txtSex">' + stuSex + '</p></li>';
    tag += '<li><p class="txtAge">' + stuAge + '</p></li>';
    tag += '<li><p class="txtMajor">' + stuMajor + '</p></li>';
    tag += '<li><p class="txtPhone">' + stuPhone + '</p></li>';
    tag += '<li><input type="button" value="删除" class="btn btn-primary changeInfo"></li>';
    tag += '</ul>';
    tag += '</div>';
    $('#teamMember .changeTxts').prepend(tag);
}
//定义一个数组变量,用来存放
var arr = new Array();
//定义门限值，若是第一次点击，则无需判断
var num = 0;
//设置添加点击事件，每次点击自动获取添加行中的数据，并填充到自动创建的修改行
$('#teamMember .txts').find('.addInfo').on('click', function () {
    //正则表达式进行文本的验证，保证输入的相对正确
    var nameReg = /^[\u4E00-\u9FA5]{2,4}$/;
    var numberReg = /^\d{9}$/;
    var ageReg = /^(?:[1-9]?\d|100)$/;
    var phoneReg = /^1(3|4|5|7|8)\d{9}$/;
    //获取添加列的值
    var name = $('#teamMember .txts').find('.txtName').val();

    var number = $('#teamMember .txts').find('.txtNo').val();

    var userId = $('#teamMember .txts').find('.txtNo').attr('index');

    var sex = $('#teamMember .txts').find('.txtSex').val();

    var age = $('#teamMember .txts').find('.txtAge').val();

    var major = $('#teamMember .txts').find('.txtMajor').val();

    var phone = $('#teamMember .txts').find('.txtPhone').val();
    //添加列的任何一个文本框都不能为空
    if (name == "" || number == "" || sex == "" || age == "" || major == "" || phone == "") {
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
    if (sex != "男" && sex != "女") {
        alert('性别有误，不支持除男女外的其他性别，请检查！');
        return false;
    }
    var ageFlag = ageReg.test(age);
    if (!ageFlag) {
        alert('年龄不符合要求，请检查！');
        return false;
    }
    if (major == "") {
        alert('专业方向不能为空，请检查！');
        return false;
    }
    var phoneFlag = phoneReg.test(phone);
    if (!phoneFlag) {
        alert('手机号格式错误！请检查');
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
    //调用创建函数，传入相应的值
    txts(userId, name,number, sex, age, major, phone);
    //创建后，清空添加列的文本
    $('#teamMember .txts').eq(0).find('.txtName').val("");
    $('#teamMember .txts').eq(0).find('.txtNo').val("");
    $('#teamMember .txts').eq(0).find('.txtSex').val("");
    $('#teamMember .txts').eq(0).find('.txtAge').val("");
    $('#teamMember .txts').eq(0).find('.txtMajor').val("");
    $('#teamMember .txts').eq(0).find('.txtPhone').val("");
    $('#teamMember .txts').eq(0).find('.txtNo').removeAttr('index');
    //门限值+1
    num++;
    //调用点击按钮的事件，这里调用是为了保证每次添加一行时，都能及时的注册上修改按钮事件
    changeClick();
});
// 设置删除点击事件，点击删除按钮，清除这一行标签，把删除列的值添加到添加对应的行
function changeClick() {
    $('#teamMember .changeTxts .txts .changeInfo').on('click', function () {
        //先获取到删除行文本框的值
        var name = $(this).parent().prevAll().find('.txtName').text();
        var number = $(this).parent().prevAll().find('.txtNo').text();
        var sex = $(this).parent().prevAll().find('.txtSex').text();
        var age = $(this).parent().prevAll().find('.txtAge').text();
        var major = $(this).parent().prevAll().find('.txtMajor').text();
        var phone = $(this).parent().prevAll().find('.txtPhone').text();
        //把这些值添加到添加行的文本中
        $('#teamMember .txts').find('.txtName').val(name);
        $('#teamMember .txts').find('.txtNo').val(number);
        $('#teamMember .txts').find('.txtSex').val(sex);
        $('#teamMember .txts').find('.txtAge').val(age);
        $('#teamMember .txts').find('.txtMajor').val(major);
        $('#teamMember .txts').find('.txtPhone').val(phone);
        //清除这一行文本
        $(this).parent().parent().remove();
        //清除数组中的对应学号
        for (var i = 0; i < arr.length; i++) {
            //匹配和删除学号相同的数组中的学号，并进行删除
            if (number == arr[i]) {
                arr.splice(i, 1);
            }
        }
    });
}