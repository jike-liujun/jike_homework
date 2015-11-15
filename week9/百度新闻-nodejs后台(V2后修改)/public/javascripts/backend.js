// <<<<<<<<<<<<<<<<<<<<<<<<<【百度新闻】后台数据管理>>>>>>>>>>>>>>>>>>>>>>>>>//
$(document).ready(function() {
    // 页面加载时的初始加载版块
    $(window).on('load', function() {
        // 根据localStorage的记录加载对应版块
        var loadCategory = localStorage.backend;
        if (loadCategory) {
            $('#' + loadCategory).click();
        } else {
            $('#recommendTag').click();
        }
    });

    // 定义函数localTime，获取并返回当前系统时间
    function localTime() {
        var now = new Date();
        var year = now.getFullYear();
        var month = now.getMonth() + 1;
        var day = now.getDate();
        var hours = now.getHours();
        var minutes = now.getMinutes();
        var seconds = now.getSeconds();
        var timeString = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes + ':' + seconds;
        return timeString;
    }

    // 定义函数loadDatatables，给表格内容添加datatables智能分页样式
    function loadDatatables(category) {
        var thisTable = category + 'table';
        $('#' + thisTable).dataTable({
            "pagingType": "full_numbers", //显示更多翻页按钮
            "bDestroy": true, //动态刷新数据，重新绑定datatables
            "order": [0, "desc"] //表格数据行按id降序排列
        });
    }
    // 定义函数_loadDatatables，用于接收一个参数并返回一个不带参数的函数，这样setTimeout才能接受带参数的函数。
    function _loadDatatables(category) {
        return function() {
            loadDatatables(category);
        }
    }

    // 点击左侧导航标签时显示该版块内容
    $('.nav-tag').click(function() {
        // 标签栏激活状态切换
        $('.nav-tag').removeClass('active');
        $(this).addClass('active');
        // 版块内容区切换
        $('.mypanel').hide();
        var showBox = $(this).find('a').attr('href');
        $(showBox).show();
        // 设置localStorage，记录当前所在版块
        var currentId = $(this).attr('id');
        localStorage.setItem("backend", currentId);
        // 点击左侧导航标签，适时加载对应版块内容
        var categoryId = showBox.slice(1);
        if (categoryId === 'recommend') {
            loadRecommend();
            setTimeout(_loadDatatables('recommend'), 500); //如果立即刷新，为什么datatables样式无法成功加载？
        } else if (categoryId === 'local') {
            loadLocal();
            setTimeout(_loadDatatables('local'), 500);
        } else if (categoryId === 'picture') {
            loadPicture();
            setTimeout(_loadDatatables('picture'), 500);
        } else {
            loadData(categoryId);
            setTimeout(_loadDatatables(categoryId), 500);
        }
    });


    // ********************页面加载时，后台管理系统从数据库读取数据并填充到表格：Begin(End at line409)********************   

    // 定义函数，用于加载版块数据(适用于【百家、娱乐、社会、军事、科技、互联网、体育】7个版块，不适用于推荐、本地、图片版块)
    function loadData(id) { //id为html文件中的版块id，与数据库中的数据表名称相同
        $.get("/queryAll", {
            category: id
        }, function(data) {
            // 遍历后端nodejs返回的数据(data是由多个json格式数据组成的数组)，每次生成一个tr数据行，并动态添加到table中tbody内
            $.each(data, function(index, cont) {
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
                    var $id = news_id.textContent;
                    var $title = news_title.textContent;
                    var $link = news_link.textContent;
                    var $time = news_time.textContent;
                    var $image = news_image.textContent;
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
                        $.get("/update", {
                            news_id: $id,
                            news_title: update_title,
                            news_link: update_link,
                            news_time: update_time,
                            news_image: update_image,
                            category: id
                        });
                        // 更新数据后重新加载该版块数据
                        window.location.reload();
                    });
                    $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(this_tr).on('click', function() {
                        // 取消更新数据后重新加载该版块数据
                        window.location.reload();
                    });
                });
                $("<td><button class='btn btn-danger btn-sm delete_data'>删 除</button></td>").appendTo(addtr).on('click', function() {
                    // 弹框确认删除数据
                    if (confirm("确定要删除数据吗？")) {
                        // 后端数据库中删除该条数据
                        $.get("/deleteRow", {
                            news_id: $(this).parent().children()[0].textContent,
                        });
                        // 前端表格中删除该条数据
                        $(this).parent().children().remove();
                    }
                });
            });
        });
    }

    // ----------定义函数，用于加载【推荐】版块数据----------
    function loadRecommend() {
        $.get("/queryAll", {
            category: 'recommend'
        }, function(data) {
            // 遍历后端nodejs返回的数据(data是由多个json格式数据组成的数组)，每次生成一个tr数据行，并动态添加到table中tbody内
            $.each(data, function(index, cont) {
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
    // 定义函数，【推荐】版块删除一行数据
    function deleteRecommend() {
        // 弹框确认删除数据
        if (confirm("确定要删除数据吗？")) {
            // 后端数据库中删除该条数据
            $.get("/deleteRow", {
                // news_id: $(this).parent().children()[0].innerText
                news_id: $(this).parent().children()[0].textContent //火狐不支持innerText
            });
            // 前端表格中删除该条数据
            $(this).parent().children().remove();
        }
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
        var $id = news_id.textContent;
        var $title = news_title.textContent;
        var $link = news_link.textContent;
        var $time = news_time.textContent;
        var $source = news_source.textContent;
        var $image = news_image.textContent;
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
            $.get("/update", {
                news_id: $id,
                news_title: update_title,
                news_link: update_link,
                news_time: update_time,
                news_source: update_source,
                news_image: update_image,
                category: 'recommend'
            });
            // 更新数据后重新加载该版块数据
            window.location.reload();
        });
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(this_tr).on('click', function() {
            // 取消更新数据后重新加载该版块数据
            window.location.reload();
        });
    }
    // ----------定义函数，用于加载【本地】版块数据----------
    function loadLocal() {
        $.get("/queryAll", {
            category: 'local'
        }, function(data) {
            // 遍历后端nodejs返回的数据(data是由多个json格式数据组成的数组)，每次生成一个tr数据行，并动态添加到table中tbody内
            $.each(data, function(index, cont) {
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
    // 定义函数，【本地】版块删除一行数据
    function deleteLocal() {
        // 弹框确认删除数据
        if (confirm("确定要删除数据吗？")) {
            // 后端数据库中删除该条数据
            $.get("/deleteRow", {
                news_id: $(this).parent().children()[0].textContent //火狐不支持innerText
            });
            // 前端表格中删除该条数据
            $(this).parent().children().remove();
        }
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
        var $id = news_id.textContent;
        var $title = news_title.textContent;
        var $main = news_main.textContent;
        var $link = news_link.textContent;
        var $time = news_time.textContent;
        var $source = news_source.textContent;
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
            $.get("/update", {
                news_id: $id,
                news_title: update_title,
                news_main: update_main,
                news_link: update_link,
                news_time: update_time,
                news_source: update_source,
                category: 'local'
            });
            // 更新数据后重新加载该版块数据
            window.location.reload();
        });
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(this_tr).on('click', function() {
            // 取消更新数据后重新加载该版块数据
            window.location.reload();
        });
    }

    // ----------定义函数，用于加载【图片】版块数据----------
    function loadPicture() {
        $.get("/queryAll", {
            category: 'picture'
        }, function(data) {
            // 遍历后端nodejs返回的数据(data是由多个json格式数据组成的数组)，每次生成一个tr数据行，并动态添加到table中tbody内
            $.each(data, function(index, cont) {
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
    // 定义函数，【图片】版块删除一行数据
    function deletePicture() {
        // 弹框确认删除数据
        if (confirm("确定要删除数据吗？")) {
            // 后端数据库中删除该条数据
            $.get("/deleteRow", {
                news_id: $(this).parent().children()[0].textContent //火狐不支持innerText
            });
            // 前端表格中删除该条数据
            $(this).parent().children().remove();
        }
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
        var $id = news_id.textContent;
        var $title = news_title.textContent;
        var $link = news_link.textContent;
        var $image = news_image.textContent;
        var $like = news_like.textContent;
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
            $.get("/update", {
                news_id: $id,
                news_title: update_title,
                news_link: update_link,
                news_image: update_image,
                news_like: update_like,
                category: 'picture'
            });
            // 更新数据后重新加载该版块数据
            window.location.reload();
        });
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(this_tr).on('click', function() {
            // 取消更新数据后重新加载该版块数据
            window.location.reload();
        });
    }
    // ********************页面加载时，后台管理系统从数据库读取数据并填充到表格：End(Begin at line73)********************



    // ********************向数据库添加一行新的数据：Begin(End at line571)********************
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
        $("<td><input type='text' id='news_time' name='news_time' placeholder='2015-10-01 10:01:01'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_image' name='news_image'></td>").appendTo(addtr);
        $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(addtr).on('click', function() {
            var $news_title = $('#news_title').val();
            var $news_link = $('#news_link').val();
            var $news_image = $('#news_image').val();
            var $news_time = ($('#news_time').val()) ? $('#news_time').val() : localTime(); //如未输入时间，则获取系统当前时间
            // 将数据推送给后台nodejs程序
            $.get("/addRow", {
                news_title: $news_title,
                news_link: $news_link,
                news_image: $news_image,
                news_time: $news_time,
                category: id
            });
            // 添加数据后重新加载该版块数据
            window.location.reload();
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
        $("<td><input type='text' id='news_time' name='news_time' placeholder='2015-10-01 10:01:01'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_source' name='news_source'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_image' name='news_image'></td>").appendTo(addtr);
        $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(addtr).on('click', addRecommend);
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(addtr).on('click', cancelSave);
    });
    // 定义函数addRecommend，将数据推送给后台nodejs程序
    function addRecommend() {
        var $news_title = $('#news_title').val();
        var $news_link = $('#news_link').val();
        var $news_time = ($('#news_time').val()) ? $('#news_time').val() : localTime(); //如未输入时间，则获取系统当前时间
        var $news_source = $('#news_source').val();
        var $news_image = $('#news_image').val();
        $.get("/addRow", {
            news_title: $news_title,
            news_link: $news_link,
            news_time: $news_time,
            news_source: $news_source,
            news_image: $news_image,
            category: 'recommend'
        });
        // 添加数据后重新加载该版块数据
        window.location.reload();
    }

    // ----------【本地】版块，添加一行新的数据----------
    $('#add-local').click(function() {
        var addtr = $("<tr id='add-tr'>").prependTo($('#local tbody'));
        $("<td>").appendTo(addtr);
        $("<td><input type='text' id='news_title' name='news_title' autofocus></td>").appendTo(addtr);
        $("<td><input type='text' id='news_main' name='news_main'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_link' name='news_link'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_time' name='news_time' placeholder='2015-10-01 10:01:01'></td>").appendTo(addtr);
        $("<td><input type='text' id='news_source' name='news_source'></td>").appendTo(addtr);
        $("<td><button class='btn btn-success btn-sm'>保 存</button></td>").appendTo(addtr).on('click', addLocal);
        $("<td><button class='btn btn-danger btn-sm'>取 消</button></td>").appendTo(addtr).on('click', cancelSave);
    });
    // 将数据推送给后台nodejs程序
    function addLocal() {
        var $news_title = $('#news_title').val();
        var $news_main = $('#news_main').val();
        var $news_time = ($('#news_time').val()) ? $('#news_time').val() : localTime(); //如未输入时间，则获取系统当前时间
        var $news_source = $('#news_source').val();
        var $news_link = $('#news_link').val();
        $.get("/addRow", {
            news_title: $news_title,
            news_main: $news_main,
            news_time: $news_time,
            news_source: $news_source,
            news_link: $news_link,
            category: 'local'
        });
        // 添加数据后重新加载该版块数据
        window.location.reload();
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
    // 将数据推送给后台nodejs程序
    function addPicture() {
        var $news_title = $('#news_title').val();
        var $news_link = $('#news_link').val();
        var $news_image = $('#news_image').val();
        var $news_time = localTime(); //获取系统当前时间
        var $news_like = $('#news_like').val();
        $.get("/addRow", {
            news_title: $news_title,
            news_link: $news_link,
            news_image: $news_image,
            news_like: $news_like,
            news_time: $news_time,
            category: 'picture'
        });
        // 添加数据后重新加载该版块数据
        window.location.reload();
    }
    // ********************向数据库添加一行新的数据：End(Begin at line413)********************

});
