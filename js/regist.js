//获取元素
var gain = document.querySelector('#gain')
var timer;

var num = 0
function gain_() {

    var i = 61;

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
    alert(num)
    console.log(num);
}

var input = document.querySelectorAll('input')

function register() {
    // if (input[1].value == 'r2B7' || input[1].value == 'R2B7' || input[1].value == 'R2b7' || input[1].value == 'r2b7') {
    // } else {
    //     alert('图片验证错误')
    //     return true
    // }


    if (input[2].value == num) {
    } else {
        alert('数字验证错误')
        return true
    }

    var reg = /^[1-9]\d{10}$/;
    if (input[0].value == ' ') {
        alert('手机号不能为空')
        return false
    } else if (!reg.test(input[0].value)) {
        alert('请正确输入手机号')
        return false
    } else {
        return true
    }
}


