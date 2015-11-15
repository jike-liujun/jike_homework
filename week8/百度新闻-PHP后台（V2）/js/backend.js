// <<<<<<<<<<<<<<<<<<<<<<<<<【百度新闻】后台数据管理>>>>>>>>>>>>>>>>>>>>>>>>>//
$(document).ready(function() {
    // 页面加载时给表格添加datatables智能分页样式
    $(window).on('load', function() {
        $('table').dataTable({
            "pagingType": "full_numbers", //显示更多翻页按钮
            "bDestroy": true, //动态刷新数据，重新绑定datatables
        });
    });
    // ----------初始状体，加载各版块数据----------
    loadRecommend();
    loadLocal();
    loadPicture();
    loadData('allin');
    loadData('entertainment');
    loadData('society');
    loadData('military');
    loadData('technology');
    loadData('internet');
    loadData('sports');

    // ----------点击左侧导航标签时显示该版块内容，默认显示【推荐】版块----------
    $('.nav-tag').click(function() {
        // 标签栏激活状态切换
        $('.nav-tag').removeClass('active');
        $(this).addClass('active');
        // 版块内容区切换
        $('.mypanel').hide();
        var showBox = $(this).find('a').attr('href');
        $(showBox).show();
    });

    // ********************页面加载时，后台管理系统从数据库读取数据并填充到表格：Begin(End at line388)********************   
    // 定义函数，用于加载版块数据(适用于【百家、娱乐、社会、军事、科技、互联网、体育】7个版块，不适用于推荐、本地、图片版块)
    function loadData(id) { //id为html文件中的版块id，与数据库中的数据表名称相同
        $.get("./php/getData.php", {
            table_name: id
        }, function(data) {
            //将php输出的JSON字符串形式数据解析成JSON对象形式数据
            var arr = eval(data);
            // 调用函数loadTableContent()，动态生成表格内容
            $.each(arr, function(index, cont) {
                var addtr = $('<tr>').appendTo($('#' + id + ' tbody'));
                $("<td>").text(cont.news_id).appendTo(addtr);
                $("<td>").text(cont.news_title).appendTo(addtr);
                $("<td>").text(cont.news_link).appendTo(addtr);
                $("<td>").text(cont.news_time).appendTo(addtr);
                $("<td>").text(cont.news_image).appendTo(addtr);
                $("<td><button class='btn btn-success btn-sm edit_data'>编 辑</button></td>").appendTo(addtr).on('click', function() {
                    var $this = $(this);
                    var this_tr = $this.parents('tr')[0]; //获取需要处理的tr行
                    var arr_td = $(this_tr).children('td'); //获取该行的所有td节点
                    //删除该行除news_id所在td节点之外的所有td节点（id不可编辑）
                    $.each(arr_td, function(index, node) {
                        if (index != 0) {
                            node.remove();
                        }
                    });
                    // 获取所有td节点元素
                    var news_id = $(arr_td)[0];
                    var news_title = $(arr_td)[1];
                    var news_link = $(arr_td)[2];
                    var news_time = $(arr_td)[3];
                    var news_image = $(arr_td)[4];
                    var edit = $(arr_td)[5];
                    var del = $(arr_td)[6];
                    // 获取节点文本数据
                    var $id = news_id.innerText;
                    var $title = news_title.innerText;
                    var $link = news_link.innerText;
                    var $time = news_time.innerText;
                    var $image = news_image.innerText;
                    // 重新添加除news_id所在td节点之外的所有td节点，并使元素处于可编辑状态
                    $("<td><input type='text' id='news_title' name='news_title' value='" + $title + "'></td>").appendTo(this_tr);
                    $("<td><input type='text' id='news_link' name='news_link' value='" + $link + "'></td>").appendTo(this_tr);
                    $("<td><input type='text' id='news_time' name='news_time' value='" + $time + "'></td>").appendTo(this_tr);
                    $("<td><input type='text' id='news_image' name='news_image' value='" + $image + "'></td>").appendTo(this_tr);
                    $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(this_tr).on('click', function() {
                        var update_title = $($(this).parent().children('td')[1]).children('input').val();
                        var update_link = $($(this).parent().children('td')[2]).children('input').val();
                        var update_time = $($(this).parent().children('td')[3]).children('input').val();
                        var update_image = $($(this).parent().children('td')[4]).children('input').val();
                        $.get("./php/updateData.php", {
                            news_id: $id,
                            news_title: update_title,
                            news_link: update_link,
                            news_time: update_time,
                            news_image: update_image,
                            table_name: id
                        }).error(function() {
                            alert('通讯出错！');
                        });
                        // 更改数据后取消输入框，并重新加载版块数据
                        $(this).parents('tbody').children().remove();
                        //重新加载数据
                        loadData(id);
                    });
                    $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(this_tr).on('click', function() {
                        // 放弃更改数据后取消输入框，并重新加载版块数据
                        $(this).parents('tbody').children().remove();
                        //重新加载数据
                        loadData(id);
                    });
                });
                $("<td><button class='btn btn-danger btn-sm delete_data'>删 除</button></td>").appendTo(addtr).on('click', function() {
                    $.get("./php/deleteData.php", {
                        news_id: $(this).parent().children()[0].innerText,
                        table_name: id
                    }).error(function() {
                        alert('通讯出错！');
                    });
                    // 删除数据后重新加载该版块数据
                    $(this).parents('tbody').children().remove(); //删除数据
                    //重新加载数据
                    loadData(id);
                });
            });
        });
    }

    // ----------定义函数，用于加载【推荐】版块数据----------
    function loadRecommend() {
        $.get("./php/getData.php", {
            table_name: 'recommend'
        }, function(data) {
            //将php输出的字符串形式数据解析成JSON形式数据
            var arr = eval(data);
            // 遍历获取到的数据，每次生成一个tr数据行，并动态添加到table中tbody内
            $.each(arr, function(index, cont) {
                var addtr = $('<tr>').appendTo($('#recommend tbody'));
                $("<td>").text(cont.news_id).appendTo(addtr);
                $("<td>").text(cont.news_title).appendTo(addtr);
                $("<td>").text(cont.news_link).appendTo(addtr);
                $("<td>").text(cont.news_time).appendTo(addtr);
                $("<td>").text(cont.news_source).appendTo(addtr);
                $("<td>").text(cont.news_image).appendTo(addtr);
                $("<td><button class='btn btn-success btn-sm edit_data'>编 辑</button></td>").appendTo(addtr).on('click', editRecommend);
                $("<td><button class='btn btn-danger btn-sm delete_data'>删 除</button></td>").appendTo(addtr).on('click', deleteRecommend);
            });
        });
    }
    // 定义函数，【推荐】版块删除一行数据后重新加载该版块数据
    function deleteRecommend() {
        $.get("./php/deleteData.php", {
            news_id: $(this).parent().children()[0].innerText,
            table_name: 'recommend'
        }).error(function() {
            alert('通讯出错！');
        });
        // 删除数据后重新加载该版块数据
        $(this).parents('tbody').children().remove();
        loadRecommend();
    }
    // 定义函数，【推荐】版块编辑一行数据后重新加载该版块数据
    function editRecommend() {
        var $this = $(this);
        var this_tr = $this.parents('tr')[0]; //获取需要处理的tr行
        var arr_td = $(this_tr).children('td'); //获取该行的所有td节点
        //删除该行除news_id所在td节点之外的所有td节点（id不可编辑）
        $.each(arr_td, function(index, node) {
            if (index != 0) {
                node.remove();
            }
        });
        // 获取所有td节点元素
        var news_id = $(arr_td)[0];
        var news_title = $(arr_td)[1];
        var news_link = $(arr_td)[2];
        var news_time = $(arr_td)[3];
        var news_source = $(arr_td)[4];
        var news_image = $(arr_td)[5];
        var edit = $(arr_td)[6];
        var del = $(arr_td)[7];
        // 获取节点文本数据
        var $id = news_id.innerText;
        var $title = news_title.innerText;
        var $link = news_link.innerText;
        var $time = news_time.innerText;
        var $source = news_source.innerText;
        var $image = news_image.innerText;
        // 重新添加除news_id所在td节点之外的所有td节点，并使元素处于可编辑状态
        $("<td><input type='text' id='news_title' name='news_title' value='" + $title + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_link' name='news_link' value='" + $link + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_time' name='news_time' value='" + $time + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_source' name='news_source' value='" + $source + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_image' name='news_image' value='" + $image + "'></td>").appendTo(this_tr);
        $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(this_tr).on('click', function() {
            var update_title = $($(this).parent().children('td')[1]).children('input').val();
            var update_link = $($(this).parent().children('td')[2]).children('input').val();
            var update_time = $($(this).parent().children('td')[3]).children('input').val();
            var update_source = $($(this).parent().children('td')[4]).children('input').val();
            var update_image = $($(this).parent().children('td')[5]).children('input').val();
            $.get("./php/updateData.php", {
                news_id: $id,
                news_title: update_title,
                news_link: update_link,
                news_time: update_time,
                news_source: update_source,
                news_image: update_image,
                table_name: 'recommend'
            }).error(function() {
                alert('通讯出错！');
            });
            // 添加数据后删除输入框，并重新加载版块数据
            $(this).parents('tbody').children().remove();
            loadRecommend();
        });
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(this_tr).on('click', function() {
            // 添加数据后删除输入框，并重新加载版块数据
            $(this).parents('tbody').children().remove();
            loadRecommend();
        });
    }
    // ----------定义函数，用于加载【本地】版块数据----------
    function loadLocal() {
        $.get("./php/getData.php", {
            table_name: 'local'
        }, function(data) {
            //将php输出的字符串形式数据解析成JSON形式数据
            var arr = eval(data);
            // 遍历获取到的数据，每次生成一个tr数据行，并动态添加到table中tbody内
            $.each(arr, function(index, cont) {
                var addtr = $('<tr>').appendTo($('#local tbody'));
                $("<td>").text(cont.news_id).appendTo(addtr);
                $("<td>").text(cont.news_title).appendTo(addtr);
                $("<td>").text(cont.news_main).appendTo(addtr);
                $("<td>").text(cont.news_link).appendTo(addtr);
                $("<td>").text(cont.news_time).appendTo(addtr);
                $("<td>").text(cont.news_source).appendTo(addtr);
                $("<td><button class='btn btn-success btn-sm edit_data'>编 辑</button></td>").appendTo(addtr).on('click', editLocal);
                $("<td><button class='btn btn-danger btn-sm delete_data'>删 除</button></td>").appendTo(addtr).on('click', deleteLocal);
            });
        });
    }
    // 定义函数，【本地】版块删除一行数据后重新加载该版块数据
    function deleteLocal() {
        $.get("./php/deleteData.php", {
            news_id: $(this).parent().children()[0].innerText,
            table_name: 'local'
        }).error(function() {
            alert('通讯出错！');
        });
        // 删除数据后重新加载该版块数据
        $(this).parents('tbody').children().remove();
        loadLocal();
    }
    // 定义函数，【本地】版块编辑一行数据后重新加载该版块数据
    function editLocal() {
        var $this = $(this);
        var this_tr = $this.parents('tr')[0]; //获取需要处理的tr行
        var arr_td = $(this_tr).children('td'); //获取该行的所有td节点
        //删除该行除news_id所在td节点之外的所有td节点（id不可编辑）
        $.each(arr_td, function(index, node) {
            if (index != 0) {
                node.remove();
            }
        });
        // 获取所有td节点元素
        var news_id = $(arr_td)[0];
        var news_title = $(arr_td)[1];
        var news_main = $(arr_td)[2];
        var news_link = $(arr_td)[3];
        var news_time = $(arr_td)[4];
        var news_source = $(arr_td)[5];
        var edit = $(arr_td)[6];
        var del = $(arr_td)[7];
        // 获取节点文本数据
        var $id = news_id.innerText;
        var $title = news_title.innerText;
        var $main = news_main.innerText;
        var $link = news_link.innerText;
        var $time = news_time.innerText;
        var $source = news_source.innerText;
        // 重新添加除news_id所在td节点之外的所有td节点，并使元素处于可编辑状态
        $("<td><input type='text' id='news_title' name='news_title' value='" + $title + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_main' name='news_main' value='" + $main + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_link' name='news_link' value='" + $link + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_time' name='news_time' value='" + $time + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_source' name='news_source' value='" + $source + "'></td>").appendTo(this_tr);
        $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(this_tr).on('click', function() {
            var update_title = $($(this).parent().children('td')[1]).children('input').val();
            var update_main = $($(this).parent().children('td')[2]).children('input').val();
            var update_link = $($(this).parent().children('td')[3]).children('input').val();
            var update_time = $($(this).parent().children('td')[4]).children('input').val();
            var update_source = $($(this).parent().children('td')[5]).children('input').val();
            $.get("./php/updateData.php", {
                news_id: $id,
                news_title: update_title,
                news_main: update_main,
                news_link: update_link,
                news_time: update_time,
                news_source: update_source,
                table_name: 'local'
            }).error(function() {
                alert('通讯出错！');
            });
            // 添加数据后删除输入框，并重新加载版块数据
            $(this).parents('tbody').children().remove();
            loadLocal();
        });
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(this_tr).on('click', function() {
            // 添加数据后删除输入框，并重新加载版块数据
            $(this).parents('tbody').children().remove();
            loadLocal();
        });
    }

    // ----------定义函数，用于加载【图片】版块数据----------
    function loadPicture() {
        $.get("./php/getData.php", {
            table_name: 'picture'
        }, function(data) {
            //将php输出的字符串形式数据解析成JSON形式数据
            var arr = eval(data);
            // 遍历获取到的数据，每次生成一个tr数据行，并动态添加到table中tbody内
            $.each(arr, function(index, cont) {
                var addtr = $('<tr>').appendTo($('#picture tbody'));
                $("<td>").text(cont.news_id).appendTo(addtr);
                $("<td>").text(cont.news_title).appendTo(addtr);
                $("<td>").text(cont.news_link).appendTo(addtr);
                $("<td>").text(cont.news_image).appendTo(addtr);
                $("<td>").text(cont.news_like).appendTo(addtr);
                $("<td><button class='btn btn-success btn-sm edit_data'>编 辑</button></td>").appendTo(addtr).on('click', editPicture);
                $("<td><button class='btn btn-danger btn-sm delete_data'>删 除</button></td>").appendTo(addtr).on('click', deletePicture);
            });
        });
    }
    // 定义函数，【图片】版块删除一行数据后重新加载该版块数据
    function deletePicture() {
        $.get("./php/deleteData.php", {
            news_id: $(this).parent().children()[0].innerText,
            table_name: 'picture'
        }).error(function() {
            alert('通讯出错！');
        });
        // 删除数据后重新加载该版块数据
        $(this).parents('tbody').children().remove();
        loadPicture();
    }
    // 定义函数，【图片】版块编辑一行数据后重新加载该版块数据
    function editPicture() {
        var $this = $(this);
        var this_tr = $this.parents('tr')[0]; //获取需要处理的tr行
        var arr_td = $(this_tr).children('td'); //获取该行的所有td节点
        //删除该行除news_id所在td节点之外的所有td节点（id不可编辑）
        $.each(arr_td, function(index, node) {
            if (index != 0) {
                node.remove();
            }
        });
        // 获取所有td节点元素
        var news_id = $(arr_td)[0];
        var news_title = $(arr_td)[1];
        var news_link = $(arr_td)[2];
        var news_image = $(arr_td)[3];
        var news_like = $(arr_td)[4];
        var edit = $(arr_td)[5];
        var del = $(arr_td)[6];
        // 获取节点文本数据
        var $id = news_id.innerText;
        var $title = news_title.innerText;
        var $link = news_link.innerText;
        var $image = news_image.innerText;
        var $like = news_like.innerText;
        // 重新添加除news_id所在td节点之外的所有td节点，并使元素处于可编辑状态
        $("<td><input type='text' id='news_title' name='news_title' value='" + $title + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_link' name='news_link' value='" + $link + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_image' name='news_image' value='" + $image + "'></td>").appendTo(this_tr);
        $("<td><input type='text' id='news_like' name='news_like' value='" + $like + "'></td>").appendTo(this_tr);
        $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(this_tr).on('click', function() {
            var update_title = $($(this).parent().children('td')[1]).children('input').val();
            var update_link = $($(this).parent().children('td')[2]).children('input').val();
            var update_image = $($(this).parent().children('td')[3]).children('input').val();
            var update_like = $($(this).parent().children('td')[4]).children('input').val();
            $.get("./php/updateData.php", {
                news_id: $id,
                news_title: update_title,
                news_link: update_link,
                news_image: update_image,
                news_like: update_like,
                table_name: 'picture'
            }).error(function() {
                alert('通讯出错！');
            });
            // 添加数据后删除输入框，并重新加载版块数据
            $(this).parents('tbody').children().remove();
            loadPicture();
        });
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(this_tr).on('click', function() {
            // 添加数据后删除输入框，并重新加载版块数据
            $(this).parents('tbody').children().remove();
            loadPicture();
        });
    }
    // ********************页面加载时，后台管理系统从数据库读取数据并填充到表格：End(Begin at line26)********************



    // ********************向数据库添加一行新的数据：Begin(End at line543)********************
    // ----------定义函数cancelSave，用于取消添加数据----------
    function cancelSave() {
        $('tr').remove('#add-tr');
    }

    // 定义函数，用于添加一行数据(适用于百家、娱乐、社会、军事、科技、互联网、体育7个版块，不适用于推荐、本地、图片版块)
    function addData(id) {
        var addtr = $("<tr id='add-tr'>").prependTo($('#' + id + ' tbody'));
        $("<td>").appendTo(addtr);
        $("<td><input type='text' id='news_title' name='news_title' autofocus></td>").appendTo(addtr);
        $("<td><input type='text' id='news_link' name='news_link'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_time' name='news_time'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_image' name='news_image'></td>").appendTo(addtr);
        $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(addtr).on('click', function() {
            // 将数据推送给后台php程序
            $.get("./php/addData.php", {
                news_title: $('#news_title').val(),
                news_link: $('#news_link').val(),
                news_image: $('#news_image').val(),
                news_time: $('#news_time').val(),
                table_name: id
            }).error(function() {
                alert('通讯出错！');
            });
            // 添加数据后删除输入框，并重新加载【体育】版块数据
            $(this).parents('tbody').children().remove();
            loadData(id);
        });
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(addtr).on('click', cancelSave);
    }

    // ----------【百家】版块，添加一行新的数据----------
    $('#add-allin').click(function() {
        addData('allin');
    });

    // ----------【娱乐】版块，添加一行新的数据----------
    $('#add-entertainment').click(function() {
        addData('entertainment');
    });

    // ----------【社会】版块，添加一行新的数据----------
    $('#add-society').click(function() {
        addData('society');
    });

    // ----------【军事】版块，添加一行新的数据----------
    $('#add-military').click(function() {
        addData('military');
    });

    // ----------【科技】版块，添加一行新的数据----------
    $('#add-technology').click(function() {
        addData('technology');
    });

    // ----------【互联网】版块，添加一行新的数据----------
    $('#add-internet').click(function() {
        addData('internet');
    });

    // ----------【体育】版块，添加一行新的数据----------
    $('#add-sports').click(function() {
        addData('sports');
    });

    // ----------【推荐】版块，添加一行新的数据----------
    $('#add-recommend').click(function() {
        var addtr = $("<tr id='add-tr'>").prependTo($('#recommend tbody'));
        $("<td>").appendTo(addtr);
        $("<td><input type='text' id='news_title' name='news_title' autofocus></td>").appendTo(addtr);
        $("<td><input type='text' id='news_link' name='news_link'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_time' name='news_time'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_source' name='news_source'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_image' name='news_image'></td>").appendTo(addtr);
        $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(addtr).on('click', addRecommend);
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(addtr).on('click', cancelSave);
    });
    // 定义函数addRecommend，将数据推送给后台php程序
    function addRecommend() {
        $.get("./php/addData.php", {
            news_title: $('#news_title').val(),
            news_image: $('#news_image').val(),
            news_time: $('#news_time').val(),
            news_source: $('#news_source').val(),
            news_link: $('#news_link').val(),
            table_name: 'recommend'
        }).error(function() {
            alert('通讯出错！');
        });
        // 添加数据后删除输入框，并重新加载【推荐】版块数据
        $(this).parents('tbody').children().remove();
        loadRecommend();
    }

    // ----------【本地】版块，添加一行新的数据----------
    $('#add-local').click(function() {
        var addtr = $("<tr id='add-tr'>").prependTo($('#local tbody'));
        $("<td>").appendTo(addtr);
        $("<td><input type='text' id='news_title' name='news_title' autofocus></td>").appendTo(addtr);
        $("<td><input type='text' id='news_main' name='news_main'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_link' name='news_link'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_time' name='news_time'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_source' name='news_source'></td>").appendTo(addtr);
        $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(addtr).on('click', addLocal);
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(addtr).on('click', cancelSave);
    });
    // 将数据推送给后台php程序
    function addLocal() {
        $.get("./php/addData.php", {
            news_title: $('#news_title').val(),
            news_main: $('#news_main').val(),
            news_time: $('#news_time').val(),
            news_source: $('#news_source').val(),
            news_link: $('#news_link').val(),
            table_name: 'local'
        }).error(function() {
            alert('通讯出错！');
        });
        // 添加数据后删除输入框，并重新加载版块数据
        $(this).parents('tbody').children().remove();
        loadLocal();
    }

    // ----------【图片】版块，添加一行新的数据----------
    $('#add-picture').click(function() {
        var addtr = $("<tr id='add-tr'>").prependTo($('#picture tbody'));
        $("<td>").appendTo(addtr);
        $("<td><input type='text' id='news_title' name='news_title'></td autofocus>").appendTo(addtr);
        $("<td><input type='text' id='news_link' name='news_link'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_image' name='news_image'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_like' name='news_like'></td>").appendTo(addtr);
        $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(addtr).on('click', addPicture);
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(addtr).on('click', cancelSave);
    });
    // 将数据推送给后台php程序
    function addPicture() {
        $.get("./php/addData.php", {
            news_title: $('#news_title').val(),
            news_link: $('#news_link').val(),
            news_image: $('#news_image').val(),
            news_like: $('#news_like').val(),
            table_name: 'picture'
        }).error(function() {
            alert('通讯出错！');
        });
        // 添加数据后删除输入框，并重新加载【图片】版块数据
        $(this).parents('tbody').children().remove();
        loadPicture();
    }
    // ********************向数据库添加一行新的数据：End(Begin at line392)********************

});
