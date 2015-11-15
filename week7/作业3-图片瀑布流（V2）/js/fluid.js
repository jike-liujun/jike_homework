$(document).ready(function() {
    // 页面加载时执行
    $(window).on('load', function() {
        // 调用函数，正确摆放第一排图片之后图片的位置
        imgLocation();
    });

    // 定义json格式数据：存储新加载图片的来源位置及描述文字
    var dataImg = {
        "data": [{
            "src": "./img/1.jpg",
            "p": "带你认识极光"
        }, {
            "src": "./img/2.jpg",
            "p": "Angelababy"
        }, {
            "src": "./img/3.jpg",
            "p": "挪威山涧"
        }, {
            "src": "./img/4.jpg",
            "p": "兰博基尼"
        }, {
            "src": "./img/5.jpg",
            "p": "阿尔卑斯山美丽风光"
        }, {
            "src": "./img/6.jpg",
            "p": "Abbey Road"
        }, {
            "src": "./img/7.jpg",
            "p": "皇马巨星时代"
        }, {
            "src": "./img/8.jpg",
            "p": "皇后乐队"
        }, {
            "src": "./img/9.jpg",
            "p": "music girl"
        }, {
            "src": "./img/10.jpg",
            "p": "face for sun"
        }, {
            "src": "./img/11.jpg",
            "p": "Some Kind of Trouble"
        }, {
            "src": "./img/12.jpg",
            "p": "中国国家地理"
        }, {
            "src": "./img/13.jpg",
            "p": "卡卡进球经典庆祝"
        }, {
            "src": "./img/14.jpg",
            "p": "Beyond光辉岁月"
        }, {
            "src": "./img/15.jpg",
            "p": "奔驰超级跑车"
        }, {
            "src": "./img/16.jpg",
            "p": "小清新萝莉"
        }, {
            "src": "./img/17.jpg",
            "p": "sunrise上海"
        }, {
            "src": "./img/18.jpg",
            "p": "上尉诗人-James Blunt"
        }, {
            "src": "./img/19.jpg",
            "p": "C罗头球梅开二度"
        }, {
            "src": "./img/20.jpg",
            "p": "勿忘我，勿忘草"
        }]
    };

    // 监听窗口的滚动事件：当到达需要加载新的图片的位置时，动态创建图片box并添加到页面
    window.onscroll = function() {
        if (scrollStatus()) {
            $.each(dataImg.data, function(index, value) {
                var box = $("<div>").addClass("box").appendTo($("#paper"));
                var content = $("<div>").addClass("content").appendTo(box);
                $("<img>").attr("src", $(value).attr("src")).appendTo(content);
                $("<p>").text($(value).attr("p")).appendTo(content);
            });
            imgLocation();
        }
    };

    // 监听窗口的缩放事件：浏览器窗口缩放时重新刷新页面
    $(window).resize(function() {
        window.location.reload();
    });
});

// 创建函数scrollStatus，用于记录加载状态；返回true表示需要加载图片/false表示不加载。
function scrollStatus() {
    var box = $('.box');
    var lastboxHeight = box.last().position().top + Math.floor(box.last().height() / 2);
    var windowHeight = $(window).height(); //获取窗口的高度
    var scrollHeight = $(window).scrollTop(); //获取当前滚动的垂直距离
    return (lastboxHeight < scrollHeight + windowHeight) ? true : false;
}

// 创建函数imgLocation，用于定位图片位置
function imgLocation() {
    var box = $('.box'); //获取所有box对象并存入数组
    var boxWidth = box.eq(0).width(); //获取box宽度
    var num = Math.floor($(window).width() / boxWidth); //设置每行可显示的图片数量
    var boxArray = []; //定义数组boxArray，用于记录box列的高度
    // 遍历所有元素，正确摆放图片
    box.each(function(index, value) {
        var boxHeight = box.eq(index).height(); //获取当前box的高度
        // 第一排图片直接向左浮动对齐
        if (index < num) {
            // 这里有个很大的疑问？？？？当设置外层div为display:-webkit-box;后，第一排图片获取到的boxHeight都等于该行最高box的高度。所以我只能通过获取div.content的高度来计算盒子的实际高度
            // boxArray[index] = boxHeight; 

            var content = $('.content');
            var contentHeight = content.eq(index).outerHeight();
            boxArray[index] = contentHeight;
        }
        // 其余图片需计算摆放位置，并正确摆放
        else {
            var minboxHeight = Math.min.apply(null, boxArray); //获取上一排box的最小高度
            var minboxIndex = $.inArray(minboxHeight, boxArray); //确定最小高度box的索引位置
            // 由于图片在页面整体居中，offsetLeft等于最左边的图片距离浏览器窗口左边沿的距离
            var offsetLeft = ($(window).width() - boxWidth * num) / 2;
            var leftPosition = box.eq(minboxIndex).position().left + offsetLeft; //定位图片左边沿距浏览器窗口左边沿的距离            
            //将图片摆放到上一排最小高度图片的下方
            $(value).css({
                "position": "absolute",
                "top": minboxHeight,
                "left": leftPosition
            });
            // 摆放新的图片之后，记录该box列新的总高度
            boxArray[minboxIndex] += box.eq(index).height();
        }
    });
}
