$(document).ready(function() {
	// 点击页面顶部导航栏，加载对应版块新闻
    $('.nav-bar ul span').on('click', function() {
        $('.nav-bar ul span').removeClass('current');
        $(this).addClass('current');
    });

    // 初始化，默认加载【推荐】版块
    $('#recommend').click();
});