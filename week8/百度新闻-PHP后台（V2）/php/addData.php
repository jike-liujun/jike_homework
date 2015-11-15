<?php
	// 接收前端ajax的数据推送，添加一行数据到数据库 //
	header("Content-type: text/html; charset=utf-8"); 
	$dbc = mysqli_connect("localhost", "root", "", "baidu_news"); //连接数据库
	if(!$dbc){
		die("could not connect: ".mysqli_error());
	}
    else{
		$table_name = mysqli_real_escape_string($dbc, $_REQUEST['table_name']);
		// 【推荐】版块
        if($table_name=='recommend'){
        	$news_title = mysqli_real_escape_string($dbc, $_REQUEST['news_title']);
			$news_image = mysqli_real_escape_string($dbc, $_REQUEST['news_image']);
			$news_time = mysqli_real_escape_string($dbc, $_REQUEST['news_time']);
  			$news_source = mysqli_real_escape_string($dbc, $_REQUEST['news_source']);
			$news_link = mysqli_real_escape_string($dbc, $_REQUEST['news_link']);
			$query = "INSERT INTO recommend (news_title, news_image, news_time, news_source, news_link) VALUES ('$news_title','$news_image','$news_time','$news_source','$news_link')";
        }
        // 【本地】版块
        elseif($table_name=='local'){
        	$news_title = mysqli_real_escape_string($dbc, $_REQUEST['news_title']);
    		$news_main = mysqli_real_escape_string($dbc, $_REQUEST['news_main']);
   			$news_source = mysqli_real_escape_string($dbc, $_REQUEST['news_source']);
    		$news_time = mysqli_real_escape_string($dbc, $_REQUEST['news_time']);
    		$news_link = mysqli_real_escape_string($dbc, $_REQUEST['news_link']);
    		$query = "INSERT INTO local (news_title, news_main, news_time, news_source, news_link) VALUES ('$news_title','$news_main','$news_time','$news_source', '$news_link')";
        }
        // 【图片】版块
        elseif ($table_name=='picture') {
        	$news_title = mysqli_real_escape_string($dbc, $_REQUEST['news_title']);
    		$news_image = mysqli_real_escape_string($dbc, $_REQUEST['news_image']);
    		$news_like = mysqli_real_escape_string($dbc, $_REQUEST['news_like']);
    		$news_link = mysqli_real_escape_string($dbc, $_REQUEST['news_link']);
    		$query = "INSERT INTO picture (news_title, news_image, news_like, news_link) VALUES ('$news_title','$news_image','$news_like', '$news_link')";
        }
        // 【百家、娱乐、社会、军事、科技、互联网、体育】版块
        else{
        	$news_title = mysqli_real_escape_string($dbc, $_REQUEST['news_title']);
			$news_image = mysqli_real_escape_string($dbc, $_REQUEST['news_image']);
			$news_time = mysqli_real_escape_string($dbc, $_REQUEST['news_time']);
			$news_link = mysqli_real_escape_string($dbc, $_REQUEST['news_link']);
			$query = "INSERT INTO $table_name (news_title, news_image, news_time, news_link) VALUES ('$news_title','$news_image','$news_time','$news_link')";
        }
        // 执行数据插入操作
        mysqli_query($dbc, "set names utf8");
    	$result = mysqli_query($dbc, $query);
        // 错误提示
	    if(!$result){
	    	die('Error: '.mysqli_error());
	    }
	}
	mysqli_close($dbc); //关闭数据库连接
?>