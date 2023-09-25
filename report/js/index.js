// 渲染数据
var json_;
var ajax_ = new XMLHttpRequest || new ActiveXObject("Microsoft.XMLHTTP");
ajax_.open('get', 'http://127.0.0.1:3000/report/new', true);
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

var ul = document.querySelector('.content')
function show(val) {
    var str = '';

    for (var i of val) {
        // var arr = ['报告数量：8', '查看试用名单', '剩余时间2天']
        // var arr1 = ['span_gray', 'span_green', 'span_red']
        // var arr2 = ['li_p3_gray', 'li_p3_green', 'li_p3_red']
        var k = parseInt(Math.random() * 10)

        str += `<li>
        <a href="../detail.html">
            <img src="${i.img}" alt="">
            <div>
                <p>${i.text}</p>
                <div class="clearFix">
                    <div class="tit_left">
                        <span class="pho">
                            <img src="../image/tx.jpg" alt="">
                        </span>
                        <span class="name">${i.uName}</span>
                        <span class="time">${i.endTime}</span>
                    </div>
                    <div class="tit_right">
                        <span class="zan">3</span>
                        <span class="look">5</span>
                    </div>
                </div>
            </div>
        </a>
        <div class="tit_bot">
            <a href="../detail.html">
                <div>关于${i.text}还有 ${k} 篇报告，点击查看</div>
            </a>
        </div>
    </li>`

    }
    ul.innerHTML = str

}
// 点击加载更多
var more = document.querySelector('.more')
var p = document.querySelector('.p1')
more.onclick = function () {

    // p.style.background = 'url(../../image/loading-icon.gif)no-repeat 280px center'
    p.className = 'p1_2'
    p.innerHTML = '正在加载中'
    setTimeout(function () {
        p.className = 'p2'
        p.innerHTML = '没有更多啦~'
        ul.style.height = '6480px'
    }, 500)

}

