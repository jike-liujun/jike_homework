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

            // ----------底部微信图标hover显示/隐藏二维码----------
            $('.weixin').hover(function() {
                $('.weixin img').show();
            }, function() {
                $('.weixin img').hide();
            });
        }
    };
});