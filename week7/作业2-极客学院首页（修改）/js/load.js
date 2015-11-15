// 所有模块都通过 define 来定义
define(function(require, exports, module) {
    // 引入依赖文件jquery
    require('jquery');
    // 通过module.exports对外提供接口
    module.exports = {
        begin: function() {
            // ----------[头部功能栏]搜索框热词显示/隐藏效果----------
            $('.search-text').focus(function() {
                $('.hot-word').hide();
            });
            $('.search-text').blur(function() {
                $('.hot-word').show();
            });

            // ----------[头部功能栏]用户账号信息显示/隐藏效果----------
            $('.user-name').hover(function() {
                $('#user-info').show();
                $('a.user-name i').removeClass('down').addClass('up');
            }, function() {
                $('#user-info').hide();
                $('a.user-name i').removeClass('up').addClass('down');
            });
            $('#user-info').hover(function() {
                $(this).show();
                $('a.user-name i').removeClass('down').addClass('up');
            }, function() {
                $(this).hide();
                $('a.user-name i').removeClass('up').addClass('down');
            });

            // ----------左侧导航标签栏切换效果----------
            $('.nav-tab li').hover(function() {
                var showIt = $(this).attr('name');
                $(showIt).show();
                $('.nav-tab ul .hidden').removeClass('hidden').addClass('showing');
            }, function() {
                var showIt = $(this).attr('name');
                $(showIt).hide();
                $('.nav-tab ul .showing').removeClass('showing').addClass('hidden');
            });

            $('.nav-tab-content').hover(function() {
                var thisId = $(this).attr('id');
                $('.s-' + thisId).addClass('add-border-left');
                $(this).show();
                $('.nav-tab ul .hidden').removeClass('hidden').addClass('showing');
            }, function() {
                var thisId = $(this).attr('id');
                $('.s-' + thisId).removeClass('add-border-left');
                $(this).hide();
                $('.nav-tab ul .showing').removeClass('showing').addClass('hidden');
            });

            // ----------课程板块推荐显示/隐藏切换效果----------
            $('.category span').hover(function() {
                $('.category span').removeClass('add-border-bottom');
                $(this).addClass('add-border-bottom');
                $('.choice').hide();
                var showBox = $(this).attr('href');
                $(showBox).show();
            }, function() {
                // $(this).removeClass('add-border-bottom');
            });

            // ----------鼠标滑过课程封面动画切换效果----------
            $('.lesson').hover(function() {
                // 显示封面播放按钮
                var showCover = $(this).find('a.lesson-cover');
                $(showCover).stop(true, true).fadeIn(600);
                // 显示课程介绍信息
                var showP = $(this).find('p');
                var showRank = $(this).find('.rank');
                var downTime = $(this).find('.time');
                $(showP).stop(true, true).fadeIn(600);
                $(showRank).stop(true, true).fadeIn(600);
                $(downTime).stop(true, true).animate({
                    bottom: '-=80px'
                }, 300);
                // 增加高度，显示课程简介
                $(this).stop(true, true).animate({
                    height: '+=80px',
                    'z-index': '+=99'
                }, 300);
            }, function() {
                // 隐藏封面播放按钮
                var showCover = $(this).find('a.lesson-cover');
                $(showCover).stop(true, true).fadeOut(300);
                // 隐藏课程介绍信息
                var showP = $(this).find('p');
                var showRank = $(this).find('.rank');
                var upTime = $(this).find('.time');
                $(showP).stop(true, true).fadeOut(300);
                $(showRank).stop(true, true).fadeOut(300);
                $(upTime).stop(true, true).animate({
                    bottom: '+=80px'
                }, 400);
                // 减小高度，隐藏课程简介
                $(this).stop(true, true).animate({
                    height: '-=80px',
                    'z-index': '-=99'
                }, 400);
            });

            // ----------实战路径图标题提示效果----------
            $('span.question').hover(function() {
                $('span.tips').fadeIn();
            }, function() {
                $('span.tips').fadeOut();
            });

            // ----------实战路径图鼠标hover效果----------
            $('.path').hover(function() {
                $(this).addClass('add-hover');
                var myButton = $(this).find('button');
                $(myButton).addClass('add-hover');
            }, function() {
                $(this).removeClass('add-hover');
                var myButton = $(this).find('button');
                $(myButton).removeClass('add-hover');
            });

            // // ----------热门课程展示图片轮播效果----------
            // // 左右滑动指示按钮显示/隐藏
            // $('.nav-roll').hover(function() {
            //     $('.controls').fadeIn(600);
            // }, function() {
            //     $('.controls').fadeOut(600);
            // });
            // // 点击向左移动"<"指示按钮切换图片
            // $('.control-left').click(function() {
            //     // 初始化：将所有未显示的图片移动到右侧
            //     $(".img-list a:not(.showimg)").removeClass('hideimg-left');
            //     $(".img-list a:not(.showimg)").addClass('hideimg-right');
            //     // 获取当前展示图片
            //     var present = $('.img-list').find('.showimg'); //注意find只能用于寻找子元素
            //     var presentId = parseInt($(present).attr('id'));
            //     // 获取下一张将要展示的图片
            //     var nextId
            //     if (presentId === 5) {
            //         nextId = 1;
            //     } else {
            //         nextId = presentId + 1;
            //     }
            //     var $nextId = '#' + nextId;
            //     var next = $('.img-list').find($nextId);
            //     // console.log($nextId);
            //     // console.log(next);
            //     // 当前图片向左移动离开展示区，并回到右侧待展示区
            //     $(present).animate({
            //         left: '-571px'
            //     }, 'slow');
            //     $(present).animate({
            //         top: '320px'
            //     }, 'slow');
            //     $(present).animate({
            //         left: '571px'
            //     }, 'slow');
            //     $(present).animate({
            //         top: '0'
            //     }, 'slow');
            //     $(present).removeClass('showimg');
            //     $(present).addClass('hideimg-right');
            //     // 下一张图片向左移动进入展示区
            //     $(next).animate({
            //         left: '0'
            //     }, 'slow');
            //     $(next).removeClass('hideimg-right');
            //     $(next).addClass('showimg');
            // });

            // // 点击向左移动">"指示按钮切换图片
            // $('.control-right').click(function() {
            //     // 初始化：将所有未显示的图片移动到左侧
            //     $(".img-list a:not(.showimg)").removeClass('hideimg-right');
            //     $(".img-list a:not(.showimg)").addClass('hideimg-left');
            //     // 获取当前展示图片
            //     var present = $('.img-list').find('.showimg'); //注意find只能用于寻找子元素
            //     var presentId = parseInt($(present).attr('id'));
            //     // 获取下一张将要展示的图片
            //     var nextId
            //     if (presentId === 1) {
            //         nextId = 5;
            //     } else {
            //         nextId = presentId - 1;
            //     }
            //     var $nextId = '#' + nextId;
            //     var next = $('.img-list').find($nextId);
            //     // console.log($nextId);
            //     // console.log(next);
            //     // 当前图片向右移动离开展示区，并回到左侧待展示区
            //     $(present).animate({
            //         left: '571px'
            //     }, 'slow');
            //     $(present).animate({
            //         top: '320px'
            //     }, 'slow');
            //     $(present).animate({
            //         left: '-571px'
            //     }, 'slow');
            //     $(present).animate({
            //         top: '0'
            //     }, 'slow');
            //     $(present).removeClass('showimg');
            //     $(present).addClass('hideimg-right');
            //     // 下一张图片向右移动进入展示区
            //     $(next).animate({
            //         left: '0'
            //     }, 'slow');
            //     $(next).removeClass('hideimg-right');
            //     $(next).addClass('showimg');
            // });

            // // 图片自动轮播效果
            // $(window).load(function() {
            //     function auto() {
            //         // 初始化：将所有未显示的图片移动到右侧
            //         $(".img-list a:not(.showimg)").removeClass('hideimg-left');
            //         $(".img-list a:not(.showimg)").addClass('hideimg-right');
            //         // 获取当前展示图片
            //         var present = $('.img-list').find('.showimg'); //注意find只能用于寻找子元素
            //         var presentId = parseInt($(present).attr('id'));
            //         // 获取下一张将要展示的图片
            //         var nextId
            //         if (presentId === 5) {
            //             nextId = 1;
            //         } else {
            //             nextId = presentId + 1;
            //         }
            //         var $nextId = '#' + nextId;
            //         var next = $('.img-list').find($nextId);
            //         // 当前图片向左移动离开展示区，并回到右侧待展示区
            //         $(present).animate({
            //             left: '-571px'
            //         }, 'slow');
            //         $(present).animate({
            //             top: '320px'
            //         }, 'slow');
            //         $(present).animate({
            //             left: '571px'
            //         }, 'slow');
            //         $(present).animate({
            //             top: '0'
            //         }, 'slow');
            //         $(present).removeClass('showimg');
            //         $(present).addClass('hideimg-right');
            //         // 下一张图片向左移动进入展示区
            //         $(next).animate({
            //             left: '0'
            //         }, 'slow');
            //         $(next).removeClass('hideimg-right');
            //         $(next).addClass('showimg');
            //     }
            //     setInterval(auto, 4000);
            // });

            // ----------底部微信图标hover显示/隐藏二维码----------
            $('.weixin').hover(function() {
                $('.weixin img').show();
            }, function() {
                $('.weixin img').hide();
            });
        }
    };
});
