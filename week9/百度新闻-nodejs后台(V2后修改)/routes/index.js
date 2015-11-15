var express = require('express');
var orm = require('orm');
var router = express.Router();

// 加载【百度新闻】首页
router.get('/', function(req, res, next) {
    res.render('index');
});

// 加载【百度新闻】后台管理系统
router.get('/backend', function(req, res, next) {
    res.sendfile('./views/backend.html');
});

// **********连接到数据库bdnews_node，并进行查询、增加、更新、删除操作**********
orm.connect("mysql://root:@localhost/bdnews_node", function(err, db) {
    if (err) throw err;
    // 定义数据模型(操作的数据表名为news)
    var News = db.define("news", {
        news_id: {
            type: 'serial',
            key: true
        },
        news_title: String,
        news_image: String,
        news_main: String,
        news_time: String,
        news_link: String,
        news_source: String,
        news_like: Number,
        category: String,
    });

    // [查询数据]:响应前端ajax程序发起的数据请求，从数据库bdnews_node读取对应版块数据并返回给ajax程序
    router.get('/queryAll', function(req, res, next) {
        // 查询版块数据(["news_time", "Z"]表示按news_time降序排列，优先显示最近新闻)
        News.find({
            category: req.query.category
        }, ["news_time", "Z"], function(err, result) {
            if (err) throw err;
            res.send(result); //将数据返回给ajax程序
        });
    });

    // [增加数据]:获取前端ajax程序推送过来的一条数据，并保存至数据库bdnews_node
    router.get('/addRow', function(req, res, next) {
        News.create({
            news_title: req.query.news_title,
            news_image: req.query.news_image,
            news_main: req.query.news_main,
            news_time: req.query.news_time,
            news_link: req.query.news_link,
            news_source: req.query.news_source,
            news_like: req.query.news_like,
            category: req.query.category
        }, function(err, result) {
            if (err) throw err;
        });
    });

    // [更新数据]:获取前端ajax程序推送过来的一条数据，并更新数据库bdnews_node中该条数据
    router.get('/update', function(req, res, next) {
        //根据news_id找到该行数据
        News.find({
            news_id: req.query.news_id
        }, function(err, result) {
            if (err) throw err;
            // 获取前端ajax程序推送过来的数据
            result[0].news_title = req.query.news_title;
            result[0].news_image = req.query.news_image;
            result[0].news_main = req.query.news_main;
            result[0].news_time = req.query.news_time;
            result[0].news_link = req.query.news_link;
            result[0].news_source = req.query.news_source;
            result[0].news_like = req.query.news_like;
            result[0].category = req.query.category;
            // 更新数据
            result[0].save(function(err) {
                if (err) throw err;
            });
        });
    });

    // [删除数据]:获取前端ajax程序推送过来的数据行id，并从数据库bdnews_node中删除该行数据
    router.get('/deleteRow', function(req, res, next) {
        //根据news_id找到该行数据
        News.find({
            news_id: req.query.news_id
        }, function(err, result) {
            if (err) throw err;
            // 删除数据
            result[0].remove();
        });
    });
});

module.exports = router;
