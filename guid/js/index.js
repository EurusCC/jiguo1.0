
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
            <div class="info">
                <p class="name">${item.text}</p>
                <div class="tip fix">
                    <div class="right icon">
                        <span class="zan">${item.like}</span>
                        <span class="look">${item.words}</span>
                    </div>
                </div>
            </div>
        </a>
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

    // setTimeout(function () {
    //     a_.style.display = 'none'
    //     var list1 = document.querySelector('.list1')
    //     list1.style.height = '1280px'
    // }, 1500)

    // setTimeout(function () {
    //     a_.style.display = 'inline-block'
    //     a_.addEventListener('click', function (event) {
    //         event.preventDefault();
    //         setTimeout(function () {
    //             a_.style.display = 'none'
    //             var list1 = document.querySelector('.list1')
    //             list1.style.height = '1280px'
    //         }, 2100)
    //     })

    // }, 2000)
}
