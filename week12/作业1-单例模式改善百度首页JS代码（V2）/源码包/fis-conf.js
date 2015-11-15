// 启用 fis-spriter-csssprites 图片合并插件
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})

// 对CSS中路径结尾带?__sprite的图片进行合并
fis.match('*.css', {
    // 给匹配到的文件分配属性 `useSprite`
    useSprite: true
});

// 给js、css和图片文件加md5戳
fis.match('*.{js,css,png,jpg,gif,ico}', {
    useHash: true
});

// 调用内置fis-optimizer-uglify-js 插件压缩js文件
fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});

// 调用内置fis-optimizer-clean-css 插件压缩css文件
fis.match('*.css', {
    optimizer: fis.plugin('clean-css')
});

// 调用内置fis-optimizer-png-compressor 插件压缩png图片
fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});

// 所有的js文件发布到/static/js/目录下
fis.match('**.js', {
    release : '/static/$0'
});

// 所有css目录下的css文件发布到/static/css/目录下
fis.match('css/(**.css)', {
    release : '/static/$0'
});

// 将css目录下被合并的png图片发布到/static/image/目录下
fis.match('css/(**.png)', {
    release : '/static/image/$1'
});

// 所有image目录下的png/gif/jpg文件发布到/static/image/目录下
fis.match('image/(**.*)', {
    release: '/static/image/$1'
});

// 所有fonts目录下的字体文件发布到/static/fonts/目录下
fis.match('fonts/(**.*)', {
    release: '/static/fonts/$1'
});

// fis.match('::package', {
//   postpackager: fis.plugin('loader')
// });
// //将所有js文件合并到一个js文件
// fis.match('*.js', {
//   packTo: '/static/main.js'
// });
// //将所有css文件合并到一个css文件
// fis.match('*.css', {
//   packTo: '/static/main.css'
// });

// 开发的时候关闭所有压缩、合并图片及md5功能
fis.media('debug').match('*.*', {
    useHash: false,
    useSprite: false,
    optimizer: null
});
