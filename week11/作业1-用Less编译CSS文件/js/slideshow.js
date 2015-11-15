/*----------页面顶部焦点图轮播效果----------*/
// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    // 引入依赖文件jquery
    require('jquery');
    // 通过module.exports对外提供接口
    module.exports = {
        begin: function() {
            // 鼠标进入/离开图片显示区域
            $('.nav-roll').hover(function() {
                // 左右箭头指示按钮显示
                $('.controls').fadeIn(600);
                // 关闭自动播放
                clearInterval(timer);
            }, function() {
                // 左右箭头指示按钮隐藏
                $('.controls').fadeOut(600);
                // 开启自动播放
                timer = setInterval(_rollToLeft(500), 4000);
                automate();
            });

            // 定义函数rollToleft：图片向左滚动
            function rollToLeft(timeinterval) {
                // 获取当前展示图片
                var present = $('.imgbox').find('.showimg'); //当前显示图片
                var presentId = $(present).attr('id'); //当前显示图片id
                var presentIndicator = "#" + presentId; //当前显示图片对应指示条的name属性
                var presentIdNum = parseInt(presentId.replace(/[^0-9]/ig, "")); //获取当前显示图片id中的数字
                $(present).removeClass('showimg'); //删除图片的showing类
                $("[name=" + presentIndicator + "]").removeClass('green'); //删除对应指示条的green类
                // 获取下一张将要显示的图片
                var nextIdNum //下一张图片id中的数字
                if (presentIdNum === 5) {
                    nextIdNum = 1;
                } else {
                    nextIdNum = presentIdNum + 1;
                }
                var nextId = 'img' + nextIdNum; //下一张图片id
                var nextIndicator = "#" + nextId; //下一张图片对应指示条的name属性
                var next = $('.imgbox').find("#" + nextId); //下一张图片
                $(next).addClass('showimg'); //添加图片的showing类
                $("[name=" + nextIndicator + "]").addClass('green'); //添加对应指示条的green类
                // 动画执行：下一张图片移入显示区域右侧待展示
                $(next).animate({
                    left: '571px'
                }, 0);
                $(next).animate({
                    top: 0
                }, 0);
                // 动画执行：当前显示图片向左离开展示区并复位（位于当前显示区域下方），下一张图片进入展示区
                $(present).animate({
                    left: '-571px'
                }, timeinterval);
                $(next).animate({
                    left: '0'
                }, timeinterval);
                $(present).animate({
                    top: '306px'
                }, 0);
                $(present).animate({
                    left: 0
                }, 0);
                // console.log(timeinterval);
            }
            // 定义函数_rollToLeft，用于接收一个参数并返回一个不带参数的函数，这样setInterval和setTimeout才能接受带参数的函数。
            function _rollToLeft(timeinterval) {
                return function() {
                    rollToLeft(timeinterval);
                }
            }

            // 定义函数rollToRight：图片向右滚动
            function rollToRight(timeinterval) {
                // 获取当前展示图片
                var present = $('.imgbox').find('.showimg');
                var presentId = $(present).attr('id');
                var presentIndicator = "#" + presentId;
                var presentIdNum = parseInt(presentId.replace(/[^0-9]/ig, ""));
                $(present).removeClass('showimg');
                $("[name=" + presentIndicator + "]").removeClass('green');
                // 获取下一张将要展示的图片
                var nextIdNum
                if (presentIdNum === 1) {
                    nextIdNum = 5;
                } else {
                    nextIdNum = presentIdNum - 1;
                }
                var nextId = 'img' + nextIdNum;
                var nextIndicator = "#" + nextId;
                var next = $('.imgbox').find("#" + nextId);
                $(next).addClass('showimg');
                $("[name=" + nextIndicator + "]").addClass('green');
                // 动画执行：下一张图片移入显示区域左侧待展示
                $(next).animate({
                    left: '-571px'
                }, 0);
                $(next).animate({
                    top: 0
                }, 0);
                // 动画执行：当前显示图片向右离开展示区并复位（位于当前显示区域下方），下一张图片进入展示区
                $(present).animate({
                    left: '571px'
                }, timeinterval);
                $(next).animate({
                    left: '0'
                }, timeinterval);
                $(present).animate({
                    top: '306px'
                }, 0);
                $(present).animate({
                    left: 0
                }, 0);
            }
            // 定义函数_rollToRight，用于接收一个参数并返回一个不带参数的函数，这样setInterval和setTimeout才能接受带参数的函数。
            function _rollToRight(timeinterval) {
                return function() {
                    rollToRight(timeinterval);
                }
            }

            // 点击"<"按钮，图片向右滚动显示上一张图片
            function clickLeft() {
                $('.control-left').click(function() {
                    // 在一次轮播动画执行完之前连续click无效
                    $(this).off('click');
                    rollToRight(500);
                    // 只有当动画执行完之后，继续点击时click事件才生效
                    setTimeout(clickLeft, 500);
                });
            }
            clickLeft();

            // 点击">"按钮，图片向左滚动显示下一张图片
            function clickRight() {
                $('.control-right').click(function() {
                    // 在一次轮播动画执行完之前连续click无效
                    $(this).off('click');
                    rollToLeft(500);
                    // 只有当动画执行完之后，继续点击时click事件才生效
                    setTimeout(clickRight, 500);
                });
            }
            clickRight();

            // 设置自动播放时间间隔4000ms
            var timer = setInterval(_rollToLeft(500), 4000);
            // 页面加载完毕，图片自动滚动播放
            function automate() {
                $(window).load(function() {
                    timer;
                });
            }
            automate();



            // 10.1日修改，点击指示条时切换到对应图片
            $('.indicator span').click(function() {
                var present = $('.imgbox').find('.showimg'); //当前显示图片
                var presentId = $(present).attr('id'); //当前显示图片id
                var presentIdNum = parseInt(presentId.replace(/[^0-9]/ig, "")); //获取当前显示图片id中的数字
                var thisIndicatorId = $(this).attr('id'); //当前指示条id
                var thisIndicatorNum = parseInt(thisIndicatorId.replace(/[^0-9]/ig, "")); //获取当前指示条id中的数字
                var distance = Math.abs(presentIdNum - thisIndicatorNum); //当前显示图片与指示条对应图片的距离
                var moveSpeed = Math.floor(500 / distance); //定义图片移动速度
                // console.log(moveSpeed);
                if (thisIndicatorNum < presentIdNum) {
                    for (var i = 0; i < distance; i++) {
                        setTimeout(_rollToRight(moveSpeed), 0);
                    }
                } else if (thisIndicatorNum > presentIdNum) {
                    for (var i = 0; i < distance; i++) {
                        setTimeout(_rollToLeft(moveSpeed), 0);
                    }
                }
            });

        }
    };
});