// 渲染数据
var json_;
var ajax_ = new XMLHttpRequest || new ActiveXObject("Microsoft.XMLHTTP");
ajax_.open('get', 'http://127.0.0.1:3000/useing/public', true);
ajax_.send();
ajax_.onreadystatechange = function () {
    if (ajax_.readyState == 4) {
        if (ajax_.status == 200) {
            // json_ = JSON.parse(ajax_.responseText)
            json_ = JSON.parse(ajax_.responseText)
            // console.log(json_);
            show(json_)

        }
    }
}

var ul = document.querySelector('.ul_')
function show(val) {
    var str = '';

    for (var i of val) {
        var arr = ['报告数量：8', '查看试用名单', '剩余时间2天']
        // var arr1 = ['span_gray', 'span_green', 'span_red']
        // var arr2 = ['li_p3_gray', 'li_p3_green', 'li_p3_red']
        var k = parseInt(Math.random() * 3)

        str += `<li>
        <a href="../product.html">
            <span>${i.info_ty}</span>
            <img src="${i.img}" alt="">
            <div>
                <h2>${i.text}</h2>
                <p class="li_p1">
                    <span class='span_gray'>${i.totalnum}</span>
                    <span class='span_gray'>${i.num}台</span>
                </p>
                <p class="li_p2">
                    <span>${i.apply}</span>
                    <span>申请</span>
                </p>
                <p class='li_p3_gray'}>${arr[k]}</p>
            </div>
        </a>
    </li>`

    }
    ul.innerHTML = str

}

// 点击加载更多
var more = document.querySelector('.more')
var p = document.querySelector('.p1')
more.onclick = function () {
    ul.style.height = '1033px'
    p.className = 'p2'
    p.innerHTML = '没有更多啦~'
}