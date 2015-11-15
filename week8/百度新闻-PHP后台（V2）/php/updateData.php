<?php
    // 接收前端ajax的数据推送，更新一行数据 //
    header("Content-type: text/html; charset=utf-8"); 
    $dbc = mysqli_connect("localhost", "root", "", "baidu_news"); //连接数据库
    if(!$dbc){
        die("could not connect: ".mysqli_error());
    }
    else{
        $table_name = mysqli_real_escape_string($dbc, $_REQUEST['table_name']);
        // 【推荐】版块
        if($table_name=='recommend'){
            $news_id = mysqli_real_escape_string($dbc, $_REQUEST['news_id']);
            $news_title = mysqli_real_escape_string($dbc, $_REQUEST['news_title']);
            $news_link = mysqli_real_escape_string($dbc, $_REQUEST['news_link']);
            $news_time = mysqli_real_escape_string($dbc, $_REQUEST['news_time']);
            $news_source = mysqli_real_escape_string($dbc, $_REQUEST['news_source']);
            $news_image = mysqli_real_escape_string($dbc, $_REQUEST['news_image']);
            $query = "UPDATE $table_name SET news_title = '$news_title', news_link = '$news_link', news_time = '$news_time', news_source = '$news_source', news_image = '$news_image' WHERE news_id = '$news_id'";
        }
        // 【本地】版块
        elseif($table_name=='local'){
            $news_id = mysqli_real_escape_string($dbc, $_REQUEST['news_id']);
            $news_title = mysqli_real_escape_string($dbc, $_REQUEST['news_title']);
            $news_main = mysqli_real_escape_string($dbc, $_REQUEST['news_main']);
            $news_link = mysqli_real_escape_string($dbc, $_REQUEST['news_link']);
            $news_time = mysqli_real_escape_string($dbc, $_REQUEST['news_time']);
            $news_source = mysqli_real_escape_string($dbc, $_REQUEST['news_source']);
            $query = "UPDATE $table_name SET news_title = '$news_title', news_main = '$news_main', news_link = '$news_link', news_time = '$news_time', news_source = '$news_source' WHERE news_id = '$news_id'";
        }
        // 【图片】版块
        elseif ($table_name=='picture') {
            $news_id = mysqli_real_escape_string($dbc, $_REQUEST['news_id']);
            $news_title = mysqli_real_escape_string($dbc, $_REQUEST['news_title']);
            $news_link = mysqli_real_escape_string($dbc, $_REQUEST['news_link']);
            $news_image = mysqli_real_escape_string($dbc, $_REQUEST['news_image']);
            $news_like = mysqli_real_escape_string($dbc, $_REQUEST['news_like']);
            $query = "UPDATE $table_name SET news_title = '$news_title', news_link = '$news_link', news_image = '$news_image', news_like = '$news_like' WHERE news_id = '$news_id'";
        }
        // 【百家、娱乐、社会、军事、科技、互联网、体育】版块
        else{
            $news_id = mysqli_real_escape_string($dbc, $_REQUEST['news_id']);
            $news_title = mysqli_real_escape_string($dbc, $_REQUEST['news_title']);
            $news_link = mysqli_real_escape_string($dbc, $_REQUEST['news_link']);
            $news_time = mysqli_real_escape_string($dbc, $_REQUEST['news_time']);
            $news_image = mysqli_real_escape_string($dbc, $_REQUEST['news_image']);
            $query = "UPDATE $table_name SET news_title = '$news_title', news_link = '$news_link', news_image = '$news_image', news_time = '$news_time' WHERE news_id = '$news_id'";          
        }
        // 执行数据更新操作
        mysqli_query($dbc, "set names utf8");
        $result = mysqli_query($dbc, $query);
        // 错误提示
        if(!$result){
            die('Error: '.mysqli_error());
        }
    }
    mysqli_close($dbc); //关闭数据库连接
?>