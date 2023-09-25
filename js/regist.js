//获取元素
// var gain_ = document.querySelector('#gain')
var submit = document.querySelector('#submit')

var timer;

var num = 0

// gain_.onclick = function () {
function gain_() {
    var i = 60;

    clearInterval(timer);
    timer = setInterval(function () {
        i--;
        gain.innerHTML = i + '秒后重新发送';
        if (i == 0) {
            clearInterval(timer);
            gain.innerHTML = '重新获取验证码';
            gain.disabled = false
        } else {
            gain.disabled = true
        }

    }, 1000)
    num = parseInt(Math.random() * 10000)
    setTimeout(function () {
        alert(num)
        console.log(num);
    }, 6000)
}

submit.onclick = function () {
    var input = document.querySelectorAll('input')

    // 手机号验证
    var reg = /^[1-9]\d{10}$/;
    if (input[0].value == ' ') {
        alert('手机号不能为空')
        return true
    } else if (!reg.test(input[0].value)) {
        alert('请正确输入手机号')
        return true
    }

    // 图片验证
    if (input[1].value == 'r2B7' || input[1].value == 'R2B7' || input[1].value == 'R2b7' || input[1].value == 'r2b7') {
    } else {
        alert('图片验证错误')
        return true
    }

    // 数字验证
    if (input[2].value == num) {
    } else if (input[2].value == '') {
        alert('数字验证不能为空')
        return true
    } else {
        alert('数字验证错误')
        return true
    }
    // 用户名验证
    if (input[3].value == "") {
        alert('用户名不能为空')
        return true;
    }

    // // 密码验证
    if (input[4].value == "") {
        alert('密码不能为空')
        return true;
    }
    //两次密码输入不一致
    else if (input[4].value != input[5].value) {
        alert('两次密码不一致')
        return true;
    }

    // 点 向cookie存值
    if (submit) {
        setCookie('phone', input[0].value)
        setCookie('user', input[3].value)
        setCookie('pwd', input[4].value)
    }


    alert('注册成功！')
    var form_ = document.querySelector('form')
    form_.setAttribute("action", '../login.html');
}


