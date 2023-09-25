// 倒计时
var time = document.querySelector( '.time' )
function distance ()
{
    // 创建指定时间
    var afterTime = new Date( 2023, 9, 11 );
    // 获取当前时间
    var nowTime = new Date();
    // console.log( nowTime );
    // 时间差
    var distanceTime = afterTime - nowTime;
    // 把毫秒转化为天 时 分 秒 退回
    var day = parseInt( distanceTime / 1000 / 60 / 60 / 24 );

    var h = parseInt( distanceTime / 1000 / 60 / 60 % 24 );

    var m = parseInt( distanceTime / 1000 / 60 % 60 );

    var s = parseInt( distanceTime / 1000 % 60 );

    var str = `申请时间剩余：${ day }天${ h }时${ m }分${ s }秒`;

    time.innerHTML = str;

    if ( day == 0 && m == 0 && h == 0 && s == 0 )
    {
        clearInterval( timer );
        time.innerHTML = '已结束'
    }
}

setInterval( distance, 1000 )



// 立即申请
var btn = document.querySelector( '.btn1' )
var people = document.querySelector( '.people' )
var num = document.querySelector( '.num' )
var num1 = 126
var num2 = 20
var str = `${ num1 }人`
people.innerHTML = str
var str1 = `${ num2 }台`
num.innerHTML = str1
btn.addEventListener( 'click', function ()
{
    num1 = num1 + 1;
    num2 = num2 - 1;
    var str = `${ num1 }人`
    people.innerHTML = str

    var str1 = `${ num2 }台`
    num.innerHTML = str1

    if ( num2 < 1 )
    {
        num2 = 1;
        num1 = 145;
        console.log( num2 );
        btn.disabled = true;
        alert( '已抢完' )
        // return
    }
} )





// console.log( num1 );


// 轮播图

var mySwiper = new Swiper( '.swiper', {
    loop: true,
    // loopAdditionalSlides: 3,
    // autoplay: true,//等同于以下设置
    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        hideOnClick: true,
    },
} )



// 发现酷玩
// 渲染数据

function fu ()
{
    var ajax_ = new XMLHttpRequest() || new ActiveXObject( 'Microsoft.XMLHTTP' );

    ajax_.open( 'get', 'http://127.0.0.1:3000/play/new' )
    ajax_.send()
    ajax_.onreadystatechange = function ()
    {
        if ( ajax_.readyState == 4 )
        {
            if ( ajax_.status == 200 )
            {
                var data = JSON.parse( ajax_.responseText );
                console.log( data );
                show( data );
            } else
            {
                console.log( '请求失败' );
            }
        }
    }
}
function show ( data2 )
{
    var play = document.querySelector( '.play' )

    var str2 = ''
    for ( var a of data2 )
    {

        for ( var b of a )
        {
            str2 += `
        <li>
                        <a href="./guid/detail.html">
                            <img src="${ b.img }" alt="">
                            <div class="info">
                                <p class="name">${ b.text }
                                <span>${ b.description }</span>
                                </p>
                                <div class="tip fix">
                                    <span class="price left">
                                        ${ b.price }
                                    </span>
                                    <div class="right icon">
                                        <span class="zan">${ b.like }</span>
                                        <span class="look">${ b.words }</span>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
        `
            // console.log( str2 );
        }


    }


    play.innerHTML = str2
}

fu()