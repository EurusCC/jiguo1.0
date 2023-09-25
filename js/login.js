var input = document.querySelectorAll('input')
var submit = document.querySelector('#submit')
submit.onclick = function () {
    // 手机号验证
    var reg = /^[1-9]\d{10}$/;
    if (input[0].value == ' ') {
        alert('手机号不能为空')
        return true
    } else if (!reg.test(input[0].value)) {
        alert('请正确输入手机号')
        return true
    }

    // 用户名验证
    if (input[1].value == "") {
        alert('用户名不能为空')
        return true;
    }

    //  密码验证
    if (input[2].value == "") {
        alert('密码不能为空')
        return true;
    }

    if (submit) {
        console.log(getCookie('phone'));

        if (input[0].value != getCookie('phone')) {
            alert('该手机号未注册，请先注册！')

        } else if (input[1].value != getCookie('user')) {
            alert('密码或用户名错误！')

        } else if
            (input[2].value != getCookie('user')) {
            alert('密码或用户名错误！')

        } else if (input[0].value == getCookie('phone') && input[1].value == getCookie('user') && input[2].value == getCookie('user')) {
            alert('密码正确')
            // var form_ = document.querySelector('form')
            // form_.setAttribute("action", './index.html');
            location.href = ("./index.html")

        }

    } else {
        alert('未注册，请重新注册！')
    }

}
