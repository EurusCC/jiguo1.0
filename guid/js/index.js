
function ajax_(a, b) {
    var ajax_ = new XMLHttpRequest || new ActiveXObject('Microsoft.XMLHTTP')
    ajax_.open(a, b)
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = ajax_.responseText;

                data = JSON.parse(data)
                // console.log(data);
                show(data)

            }
            else {
                console.log('请求失败');
            }
        }
    }
}
function show(data_) {
    // console.log(data_);

    var list1 = document.querySelector('.list1');
    var str = '';
    for (var item of data_) {
        str += `

        <li>
        <a href="../detail.html">
            <img src="${item.img}" alt="">
        </a>
            <div class="info">
                <p class="name">${item.text}</p>
                <div class="tip fix">
                    <div class="right icon">
                        <span class="zan">${item.like}</span>
                        <span class="look">${item.words}</span>
                    </div>
                </div>
            </div>
        <img class="bom" src="../image/listbg.jpg" alt="">
    </li>
        `
    }
    list1.innerHTML = str;
}
ajax_('get', 'http://127.0.0.1:3000/guid/new')


var a_ = document.querySelector('.a')
a_.onclick = function () {
    a_.style.backgroundImage = 'url(../../image/loading-icon.gif)';
    a_.innerHTML = '正在加载中'

}


setTimeout(function () {
    // 点赞
    var zan = document.querySelectorAll('.zan')
    // console.log( zan );

    // var num3 = zan[ 0 ].textContent
    for (let i = 0; i < zan.length; i++) {


        var clickCount = 0; // 用于追踪点击次数

        zan[i].onclick = function () {
            // console.log( zan[ i ] );
            var num3 = parseInt(zan[i].textContent);

            if (clickCount % 2 === 0) { // 判断点击次数是否为偶数
                num3 += 1;
                zan[i].style.backgroundImage = 'url(../image/zan1.png)';
                zan[i].style.backgroundSize = '16px';
            } else {
                num3 -= 1;
                zan[i].style.background = "url(../image/zan.png) no-repeat left 4px";
                // zan[ i ].style.backgroundSize = '15px';
            }

            clickCount++; // 点击次数加1


            zan[i].innerHTML = num3;
        }


    }
}, 3000)