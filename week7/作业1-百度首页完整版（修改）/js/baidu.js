$(document).ready(function() {
    // 左侧导航菜单栏切换效果
    $('.menus').click(function(e) {
        var $this = $(this);
        $('.menus').removeClass('add-bg');
        $this.addClass('add-bg');
        $('.right_box').hide();
        var showBox = $this.attr('href');
        $(showBox).show();
    });
    // 初始化：网页加载时显示[我的导航]菜单
    $('.menus:first-child').click();

    // 右上角[更多产品]悬浮下拉菜单切换效果
    $('#toggle_more').hover(
        function() {
            $('.bdmore_wrapper').show();
        },
        function() {
            $('.bdmore_wrapper').hide();
        });
    $('.bdmore_wrapper').hover(function() {
        $(this).show();
    }, function() {
        $(this).hide();  //老师批改：$('.bdmore_wrapper')改为$(this)
    });

    // [导航模块]我的导航与推荐导航切换效果
    $('.nav-shift span').click(function() {
        var $this = $(this);
        $('.nav-shift span').removeClass('add-border');
        $this.addClass('add-border');
        $('.choose').hide();
        var showIt = $this.attr('href');
        $(showIt).fadeIn(250);
    });
    // 初始化：网页加载时显示[推荐导航]
    $('.nav-shift span:last-child').click();
    
    // [购物模块]标题栏切换效果
    $('.box-title-word').click(function() {
        var $this = $(this);
        $('.box-title-word').removeClass('add-border');
        $this.addClass('add-border');
    });
    // [购物模块]我的账户单击效果
    $('#myAccount').click(function() {
        $('.user-list').toggle();
    }).blur(function() {            //老师批改：$('#myAccount')选择器的click和blur事件可以连写
        $('.user-list').hide();
    });
    
    // [音乐模块]切换热门歌单的效果
    $('#chanel-list a').click(function() {
        var $this = $(this);
        $('#chanel-list a').removeClass('add-music-bg');
        $this.addClass('add-music-bg');
    });
    // [音乐模块]唱片封面控制播放效果
    $('#play-state').click(function() {
        var $this = $(this);
        var audio = $("#audio")[0]; //注意：jQuery对象是一个数组
        if (($this).attr('class') === 'play-on') {
            $this.removeClass('play-on');
            $this.addClass('play-off');
            $('.cover-paper').removeClass('rotate');
            audio.pause();
        } else {
            $this.removeClass('play-off');
            $this.addClass('play-on');
            $('.cover-paper').addClass('rotate');
            audio.play();
        }
    });
});
