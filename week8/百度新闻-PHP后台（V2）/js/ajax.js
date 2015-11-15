// <<<<<<<<<<<<<<<<<<<<<<<<<【百度新闻】Ajax发送数据请求，加载版块>>>>>>>>>>>>>>>>>>>>>>>>>//
$(document).ready(function() {
    // 定义函数，用于加载版块数据(适用于百家、娱乐、社会、军事、科技、互联网和体育版块，不适用于推荐、本地、图片版块)
    function shiftPanel(panel) {
        // 清空上一次显示的版块内容
        $('.content *').remove();
        // 以get方式向后台发送数据请求
        $.get("./php/getData.php", {
            table_name: panel
        }, function(data) {
            //将php输出的字符串形式数据解析成JSON形式数据
            var arr = eval(data);
            // 遍历获取到的数组，生成html内容
            $.each(arr, function(index, cont) {
                var tagA = $("<a>").attr("href", cont.news_link).appendTo($(".content"));
                var boxWrapper = $("<div>").addClass("box-wrapper").appendTo(tagA);
                var box = $("<div>").addClass("box").appendTo(boxWrapper);
                var newsImage = $("<div>").addClass("news-image").appendTo(box);
                $("<img>").attr("src", cont.news_image).appendTo(newsImage);
                var newsInfo = $("<div>").addClass("news-info").appendTo(box);
                var newsInfoTop = $("<div>").addClass("news-info-top").appendTo(newsInfo);
                $("<div>").addClass("news-title").text(cont.news_title).appendTo(newsInfoTop);
                var newsInfoBottom = $("<div>").addClass("news-info-bottom").appendTo(newsInfo);
                $("<div>").addClass("news-time").text(cont.news_time).appendTo(newsInfoBottom);
            });
        }).error(function() {
            alert("文件加载失败！");
        });
    }
    // 加载【百家】版块
    $('#all-in').on('click', function() {
        shiftPanel("allin");
    });

    // 加载【娱乐】版块
    $('#entertainment').on('click', function() {
        shiftPanel("entertainment");
    });

    // 加载【社会】版块
    $('#society').on('click', function() {
        shiftPanel("society");
    });

    // 加载【军事】版块
    $('#military').on('click', function() {
        shiftPanel("military");
    });

    // 加载【科技】版块
    $('#technology').on('click', function() {
        shiftPanel("technology");
    });

    // 加载【互联网】版块
    $('#internet').on('click', function() {
        shiftPanel("internet");
    });

    // 加载【体育】版块
    $('#sports').on('click', function() {
        shiftPanel("sports");
    });
    // 加载【推荐】版块
    $('#recommend').on('click', function() {
        // 清空前一版块的内容
        $('.content *').remove();
        // 显示本版块的内容
        $.get("./php/getData.php", {
            table_name: 'recommend'
        }, function(data) {
            //将php输出的字符串形式数据解析成JSON形式数据
            var arr = eval(data);
            // 遍历获取到的数组，生成html内容
            $.each(arr, function(index, cont) {
                var tagA = $("<a>").attr("href", cont.news_link).appendTo($(".content"));
                var boxWrapper = $("<div>").addClass("box-wrapper").appendTo(tagA);
                var box = $("<div>").addClass("box").appendTo(boxWrapper);
                var newsImage = $("<div>").addClass("news-image").appendTo(box);
                $("<img>").attr("src", cont.news_image).appendTo(newsImage);
                var newsInfo = $("<div>").addClass("news-info").appendTo(box);
                var newsInfoTop = $("<div>").addClass("news-info-top").appendTo(newsInfo);
                $("<div>").addClass("news-title").text(cont.news_title).appendTo(newsInfoTop);
                var newsInfoBottom = $("<div>").addClass("news-info-bottom").appendTo(newsInfo);
                $("<div>").addClass("news-time").text(cont.news_time).appendTo(newsInfoBottom);
                $("<div>").addClass("news-source").text(cont.news_source).appendTo(newsInfoBottom);
            });
        }).error(function() {
            alert("文件加载失败！");
        });
    });

    // 加载【本地】版块
    $('#local').on('click', function() {
        // 清空上一次显示的内容
        $('.content *').remove();
        // 显示本版块的内容
        $.get("./php/getData.php", {
            table_name: 'local'
        }, function(data) {
            //将php输出的字符串形式数据解析成JSON形式数据
            var arr = eval(data);
            // 遍历获取到的数组，生成html内容
            $.each(arr, function(index, cont) {
                var tagA = $("<a>").attr("href", cont.news_link).appendTo($(".content"));
                var boxWrapper = $("<div>").addClass("box-wrapper local").appendTo(tagA);
                var box = $("<div>").addClass("box").appendTo(boxWrapper);
                var newsInfo = $("<div>").addClass("news-info").appendTo(box);
                var newsInfoTop = $("<div>").addClass("news-info-top").appendTo(newsInfo);
                $("<div>").addClass("news-title").text(cont.news_title).appendTo(newsInfoTop);
                $("<div>").addClass("news-main").text(cont.news_main).appendTo(newsInfoTop);
                var newsInfoBottom = $("<div>").addClass("news-info-bottom").appendTo(newsInfo);
                $("<div>").addClass("news-time").text(cont.news_time).appendTo(newsInfoBottom);
                $("<div>").addClass("news-source").text(cont.news_source).appendTo(newsInfoBottom);
            });
        }).error(function() {
            alert("文件加载失败！");
        });
    });

    // 加载【图片】版块
    $('#picture').on('click', function() {
        // 清空上一次显示的内容
        $('.content *').remove();
        // 显示本版块的内容
        $.get("./php/getData.php", {
            table_name: 'picture'
        }, function(data) {
            //将php输出的字符串形式数据解析成JSON形式数据
            var arr = eval(data);
            // 遍历获取到的数组，生成html内容
            $.each(arr, function(index, cont) {
                var tagA = $("<a>").attr("href", cont.news_link).appendTo($(".content"));
                var pictureBox = $("<div>").addClass("picture-box").appendTo(tagA);
                var newsImage = $("<div>").addClass("news-image").appendTo(pictureBox);
                $("<img>").attr("src", cont.news_image).appendTo(newsImage);
                var newsInfo = $("<div>").addClass("news-info").appendTo(pictureBox);
                $("<div>").addClass("news-title").text(cont.news_title).appendTo(newsInfo);
                $("<div>").addClass("news-like").text(cont.news_like).appendTo(newsInfo);
            });
        }).error(function() {
            alert("文件加载失败！");
        });
    });
});
