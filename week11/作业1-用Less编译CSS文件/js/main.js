// 所有模块都通过 define 来定义
define(function(require) { // 此处不需要导出模块，可省略exports, module
    // 引入依赖文件load.js
    var load = require("load");
    var slideshow = require("slideshow");
    // 加载函数begin
    load.begin();
    slideshow.begin();
});
