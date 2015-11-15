// <<<<<<<<<<<<<<<<<<<<<<<<<【百度新闻】Ajax发送数据请求至后端node.js，加载对应版块新闻>>>>>>>>>>>>>>>>>>>>>>>>>//
$(document).ready(function() {
    // 定义函数getTimeDiff，返回当前时间和发布时间的时间差
    function getTimeDiff(issueTime) {
        var timeNowMs = new Date().getTime(); //获取当前时间距离1970/1/1午夜的毫秒数
        var days = Math.floor((timeNowMs - issueTime) / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeNowMs - issueTime) / (1000 * 60 * 60));
        var minutes = Math.floor((timeNowMs - issueTime) / (1000 * 60));
        if (days >= 1) {
            return days + '天前';
        } else if (hours >= 1) {
            return hours + '小时前';
        } else {
            return minutes + '分钟前';
        }
    }
    // 定义函数，用于加载版块数据(适用于【百家、娱乐、社会、军事、科技、互联网、体育】版块，不适用于推荐、本地、图片版块)
    function shiftCategory(category) {
        // 清空上一次显示的版块内容
        $('.content *').remove();
        // 以get方式向后台nodejs发送数据请求
        $.get("/queryAll", {
            category: category
        }, function(data) {
            // 遍历后端nodejs返回的数据(由多个json格式数据组成的数组)，生成html内容
            $.each(data, function(index, cont) {
                var tagA = $("<a>").attr("href", cont.news_link).appendTo($(".content"));
                var boxWrapper = $("<div>").addClass("box-wrapper").appendTo(tagA);
                var box = $("<div>").addClass("box").appendTo(boxWrapper);
                var newsImage = $("<div>").addClass("news-image").appendTo(box);
                $("<img>").attr("src", cont.news_image).appendTo(newsImage);
                var newsInfo = $("<div>").addClass("news-info").appendTo(box);
                var newsInfoTop = $("<div>").addClass("news-info-top").appendTo(newsInfo);
                $("<div>").addClass("news-title").text(cont.news_title).appendTo(newsInfoTop);
                var newsInfoBottom = $("<div>").addClass("news-info-bottom").appendTo(newsInfo);
                var issueTime = (cont.news_time).replace(/-/g, "/"); //将时间格式由Y-M-D改为Y/M/D，以适配火狐/safari
                issueTime = Date.parse(issueTime); //解析日期时间字符串，返回距离1970/1/1午夜的毫秒数
                var news_time = getTimeDiff(issueTime); //获取当前时间和发布时间的时间差
                $("<div>").addClass("news-time").text(news_time).appendTo(newsInfoBottom);
            });
        }).error(function() {
            alert("文件加载失败！");
        });
    }

    // 加载【百家】版块
    $('#allin').on('click', function() {
        shiftCategory('allin');
    });

    // 加载【娱乐】版块
    $('#entertainment').on('click', function() {
        shiftCategory('entertainment');
    });

    // 加载【社会】版块
    $('#society').on('click', function() {
        shiftCategory('society');
    });

    // 加载【军事】版块
    $('#military').on('click', function() {
        shiftCategory('military');
    });

    // 加载【科技】版块
    $('#technology').on('click', function() {
        shiftCategory('technology');
    });

    // 加载【互联网】版块
    $('#internet').on('click', function() {
        shiftCategory('internet');
    });

    // 加载【体育】版块
    $('#sports').on('click', function() {
        shiftCategory('sports');
    });
    // 加载【推荐】版块
    $('#recommend').on('click', function() {
        // 清空上一次显示的版块内容
        $('.content *').remove();
        // 以get方式向后台nodejs发送数据请求
        $.get("/queryAll", {
            category: 'recommend'
        }, function(data) {
            // 遍历后端nodejs返回的数据(由多个json格式数据组成的数组)，生成html内容
            $.each(data, function(index, cont) {
                var tagA = $("<a>").attr("href", cont.news_link).appendTo($(".content"));
                var boxWrapper = $("<div>").addClass("box-wrapper").appendTo(tagA);
                var box = $("<div>").addClass("box").appendTo(boxWrapper);
                var newsImage = $("<div>").addClass("news-image").appendTo(box);
                $("<img>").attr("src", cont.news_image).appendTo(newsImage);
                var newsInfo = $("<div>").addClass("news-info").appendTo(box);
                var newsInfoTop = $("<div>").addClass("news-info-top").appendTo(newsInfo);
                $("<div>").addClass("news-title").text(cont.news_title).appendTo(newsInfoTop);
                var newsInfoBottom = $("<div>").addClass("news-info-bottom").appendTo(newsInfo);
                var issueTime = (cont.news_time).replace(/-/g, "/"); //将时间格式由Y-M-D改为Y/M/D，以适配火狐/safari
                issueTime = Date.parse(issueTime); //解析日期时间字符串，返回距离1970/1/1午夜的毫秒数
                // console.log(issueTime);
                var news_time = getTimeDiff(issueTime); //获取当前时间和发布时间的时间差
                $("<div>").addClass("news-time").text(news_time).appendTo(newsInfoBottom);
                $("<div>").addClass("news-source").text(cont.news_source).appendTo(newsInfoBottom);
            });
        }).error(function() {
            alert("文件加载失败！");
        });
    });

    // 加载【本地】版块
    $('#local').on('click', function() {
        // 清空上一次显示的版块内容
        $('.content *').remove();
        // 以get方式向后台nodejs发送数据请求
        $.get("/queryAll", {
            category: 'local'
        }, function(data) {
            // 遍历后端nodejs返回的数据(由多个json格式数据组成的数组)，生成html内容
            $.each(data, function(index, cont) {
                var tagA = $("<a>").attr("href", cont.news_link).appendTo($(".content"));
                var boxWrapper = $("<div>").addClass("box-wrapper local").appendTo(tagA);
                var box = $("<div>").addClass("box").appendTo(boxWrapper);
                var newsInfo = $("<div>").addClass("news-info").appendTo(box);
                var newsInfoTop = $("<div>").addClass("news-info-top").appendTo(newsInfo);
                $("<div>").addClass("news-title").text(cont.news_title).appendTo(newsInfoTop);
                $("<div>").addClass("news-main").text(cont.news_main).appendTo(newsInfoTop);
                var newsInfoBottom = $("<div>").addClass("news-info-bottom").appendTo(newsInfo);
                var issueTime = (cont.news_time).replace(/-/g, "/"); //将时间格式由Y-M-D改为Y/M/D，以适配火狐/safari
                issueTime = Date.parse(issueTime); //解析日期时间字符串，返回距离1970/1/1午夜的毫秒数
                var news_time = getTimeDiff(issueTime); //获取当前时间和发布时间的时间差
                $("<div>").addClass("news-time").text(news_time).appendTo(newsInfoBottom);
                $("<div>").addClass("news-source").text(cont.news_source).appendTo(newsInfoBottom);
            });
        }).error(function() {
            alert("文件加载失败！");
        });
    });

    // 加载【图片】版块
    $('#picture').on('click', function() {
        // 清空上一次显示的版块内容
        $('.content *').remove();
        // 以get方式向后台nodejs发送数据请求
        $.get("/queryAll", {
            category: 'picture'
        }, function(data) {
            // 遍历后端nodejs返回的数据(由多个json格式数据组成的数组)，生成html内容
            $.each(data, function(index, cont) {
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
