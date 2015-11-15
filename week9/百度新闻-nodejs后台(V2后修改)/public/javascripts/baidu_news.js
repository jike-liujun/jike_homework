$(document).ready(function() {
    // 点击页面顶部导航栏，加载对应版块新闻
    $('.nav-bar ul span').on('click', function() {
        $('.nav-bar ul span').removeClass('current');
        $(this).addClass('current');
        var currentId = $(this).attr('id');
        // 设置localStorage，记录当前所在版块
        localStorage.setItem("category", currentId);
    });

    // 页面加载时，根据localStorage的记录加载对应版块
    $(window).on('load', function() {
        var getCategory = localStorage.category;
        if (getCategory) {
            $('#' + getCategory).click();
        } else {
            $('#recommend').click();
        }
    });

});
