$(document).ready(function() {
    // JS代码使用了单例模式：分别创建了menus、moreProduct、navShift、shopping、music总共5个单例
    // 单例模式的优点：
    // 1、模块间可进行进行通信。（本例中模块间无通信，未体现该优点）
    // 2、每一个单例都有一个独立的命名空间，从全局命名空间里提供一个唯一的访问接口来访问该对象，可以避免全局空间下变量容易被污染的问题。
    // 3、在系统内存中每个类只存在一个对象，可以节约系统资源；对于需要频繁创建和销毁的对象，使用单例模式可以提高系统的性能。
    // 4、可以选择性初始化部分单例，以达到开启/屏蔽部分JS代码的目的

    /******左侧导航菜单栏切换效果******/
    var menus = (function() {
        // 私有函数和属性，外部不能访问
        var instance;
        var render = function() {
            var me = this;
            me.menus = $('.menus');
            me.right_box = $('.right_box');
            me.default_show = $('.menus:first-child');
        };
        var bind = function() {
            var me = this;
            me.menus.click(function() {
                var $this = $(this);
                me.menus.removeClass('add-bg');
                $this.addClass('add-bg');
                me.right_box.hide();
                var showBox = $this.attr('href');
                $(showBox).show();
            });
            // 网页加载时默认显示[我的导航]菜单
            me.default_show.click();
        };
        var getInstance = function() {
            render();
            bind();
        };
        // 对外提供唯一访问接口(方法一)
        var publicAccess = {
            init: function() {
                if (!instance) {
                    instance = getInstance();
                }
                return instance;
            }
        };
        return publicAccess;
    })();
    /******右上角[更多产品]悬浮下拉菜单切换效果******/
    var moreProduct = (function() {
        // 私有函数和属性，外部不能访问
        var instance;
        var render = function() {
            var me = this;
            me.toggle_more = $('#toggle_more');
            me.bdmore_wrapper = $('.bdmore_wrapper');
        };
        var bind = function() {
            var me = this;
            me.toggle_more.hover(
                function() {
                    me.bdmore_wrapper.show();
                },
                function() {
                    me.bdmore_wrapper.hide();
                });
            me.bdmore_wrapper.hover(function() {
                $(this).show();
            }, function() {
                $(this).hide();
            });
        };
        var getInstance = function() {
            render();
            bind();
        };
        // 对外提供唯一访问接口(方法一)
        var publicAccess = {
            init: function() {
                if (!instance) {
                    instance = getInstance();
                }
                return instance;
            }
        };
        return publicAccess;
    })();
    /******[导航模块]我的导航与推荐导航切换效果******/
    var navShift = (function() {
        // render和bind为私有函数，外部不能访问
        var render = function() {
            var me = this;
            me.nav_shift = $('.nav-shift span');
            me.choose = $('.choose');
            me.default_show = $('.nav-shift span:last-child');
        };
        var bind = function() {
            var me = this;
            me.nav_shift.click(function() {
                var $this = $(this);
                me.nav_shift.removeClass('add-border');
                $this.addClass('add-border');
                me.choose.hide();
                var showIt = $this.attr('href');
                $(showIt).fadeIn(250);
            });
            // 网页加载时显示[推荐导航]
            me.default_show.click();
        };
        // 对外提供唯一访问接口(方法二)
        var publicAccess = {
            init: function() {
                render();
                bind();
            }
        };
        return publicAccess;
    })();
    /******[购物模块]标题栏切换效果及我的账户单击效果******/
    var shopping = (function() {
        // render和bind为私有函数，外部不能访问
        var render = function() {
            var me = this;
            me.box_title_word = $('.box-title-word');
            me.myAccount = $('#myAccount');
            me.user_list = $('.user-list');
        };
        var bind = function() {
            var me = this;
            // 标题栏切换效果
            me.box_title_word.click(function() {
                var $this = $(this);
                me.box_title_word.removeClass('add-border');
                $this.addClass('add-border');
            });
            // 我的账户单击效果
            me.myAccount.click(function() {
                me.user_list.toggle();
            }).blur(function() {
                me.user_list.hide();
            });
        };
        // 对外提供唯一访问接口(方法二)
        var publicAccess = {
            init: function() {
                render();
                bind();
            }
        };
        return publicAccess;
    })();
    /******[音乐模块]热门歌单切换效果及唱片封面控制播放效果******/
    var music = (function() {
        // render和bind为私有函数，外部不能访问
        var render = function() {
            var me = this;
            me.chanel_list = $('#chanel-list a');
            me.play_state = $('#play-state');
            me.audio = $("#audio");
            me.cover_paper = $('.cover-paper');
        };
        var bind = function() {
            var me = this;
            document.getElementById("audio").volume = 0.2; //设置音量为20%
            // 切换热门歌单的效果
            me.chanel_list.click(function() {
                var $this = $(this);
                me.chanel_list.removeClass('add-music-bg');
                $this.addClass('add-music-bg');
            });
            // 唱片封面控制播放效果
            me.play_state.click(function() {
                var $this = $(this);
                var audio = me.audio[0]; //注意：jQuery对象是一个数组
                if (($this).attr('class') === 'play-on') {
                    $this.removeClass('play-on');
                    $this.addClass('play-off');
                    me.cover_paper.removeClass('rotate');
                    audio.pause();
                } else {
                    $this.removeClass('play-off');
                    $this.addClass('play-on');
                    me.cover_paper.addClass('rotate');
                    audio.play();
                }
            });
        };
        // 对外提供唯一访问接口(方法二)
        var publicAccess = {
            init: function() {
                render();
                bind();
            }
        };
        return publicAccess;
    })();

    /******初始化各单例******/
    menus.init();
    moreProduct.init();
    navShift.init();
    shopping.init();
    music.init();
});