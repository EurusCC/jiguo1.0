var input = document.querySelectorAll('input')

function login() {
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

    // // 密码验证
    if (input[2].value == "") {
        alert('密码不能为空')
        return true;
    }
}