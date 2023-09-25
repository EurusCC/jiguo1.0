// 发现酷玩
// 渲染数据

function fu() {
    var ajax_ = new XMLHttpRequest() || new ActiveXObject('Microsoft.XMLHTTP');

    ajax_.open('get', 'http://127.0.0.1:3000/play/new')
    ajax_.send()
    ajax_.onreadystatechange = function () {
        if (ajax_.readyState == 4) {
            if (ajax_.status == 200) {
                var data = JSON.parse(ajax_.responseText);
                // console.log( data );
                show(data);
            } else {
                console.log('请求失败');
            }
        }
    }
}
function show(data2) {
    var play = document.querySelector('.play')

    var str2 = ''
    for (var a of data2) {

        for (var b of a) {
            str2 += `
        <li>
                        <a href="../product.html">
                            <img src="${b.img}" alt="">
                        </a>
                            <div class="info">
                                <p class="name">${b.text}
                                <span>${b.description}</span>
                                </p>
                                <div class="tip fix">
                                    <span class="price left">
                                        ${b.price}
                                    </span>
                                    <div class="right icon">
                                        <span class="zan">${b.like}</span>
                                        <span class="look">${b.words}</span>
                                    </div>
                                </div>
                            </div>
                        
                    </li>
        `
            // console.log( str2 );
        }


    }


    play.innerHTML = str2
}

fu()




var moreBtn = document.querySelector('.more-btn');

moreBtn.addEventListener('click', function (event) {
    event.preventDefault();
    moreBtn.style.backgroundImage = 'url(../image/loading-icon.gif)';
    moreBtn.innerHTML = '正在加载中'

    setTimeout(function () {
        moreBtn.style.display = 'none'
        var play = document.querySelector('.play')
        play.style.height = '1548px'
    }, 1500)

    setTimeout(function () {
        moreBtn.style.display = 'block'
        moreBtn.addEventListener('click', function (event) {
            event.preventDefault();
            setTimeout(function () {
                moreBtn.style.display = 'none'
                var play = document.querySelector('.play')
                play.style.height = '2100px'
            }, 2100)
        }
        )
        // var play = document.querySelector( '.play' )
        // play.style.height = '2100px'
    }, 2000)
    // setTimeout( function ()
    // {
    //     moreBtn.style.display = 'none'
    //     // var play = document.querySelector( '.play' )
    //     // play.style.height = '2100px'
    // }, 4000 )


});




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