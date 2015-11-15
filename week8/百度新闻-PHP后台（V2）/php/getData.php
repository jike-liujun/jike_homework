<?php
	// 根据前端ajax请求，从数据库读取数据并推送至前端 //
	header('content-type:application/json; charset=utf8'); 
	$dbc = mysqli_connect("localhost", "root", "", "baidu_news"); //连接数据库 
	if(!$dbc){
		die("could not connect: ".mysqli_error());
	}else{ 
		$table_name = mysqli_real_escape_string($dbc, $_REQUEST['table_name']);
	    mysqli_query($dbc, "set names utf8");
	    $query = "select * from $table_name";
	    $result = mysqli_query($dbc, $query);
	    if(!$result){
	    	die('Error: '.mysqli_error());
	    }else{
	    	$arr = array();
	    	// 【推荐】版块
	    	if($table_name=='recommend'){
	    		while($row = mysqli_fetch_array($result)){
	    	        array_push($arr, array("news_id"=>urlencode($row['news_id']),"news_title"=>urlencode($row['news_title']),"news_time"=>urlencode($row['news_time']), "news_image"=>urlencode($row['news_image']), "news_source"=>urlencode($row['news_source']), "news_link"=>urlencode($row['news_link'])));
	    		}
	    	}
	    	// 【本地】版块
	    	elseif($table_name=='local'){
	    		while($row = mysqli_fetch_array($result)){
	    			array_push($arr, array("news_id"=>urlencode($row['news_id']),"news_title"=>urlencode($row['news_title']),"news_main"=>urlencode($row['news_main']),"news_time"=>urlencode($row['news_time']), "news_link"=>urlencode($row['news_link']), "news_source"=>urlencode($row['news_source'])));

	    		}
	    	}
	    	// 【图片】版块
	    	elseif ($table_name=='picture') {
	    		while($row = mysqli_fetch_array($result)){
	    			array_push($arr, array("news_id"=>urlencode($row['news_id']),"news_title"=>urlencode($row['news_title']),"news_image"=>urlencode($row['news_image']),"news_like"=>urlencode($row['news_like']), "news_link"=>urlencode($row['news_link'])));

	    		}
	    	}
	    	// 【百家、娱乐、社会、军事、科技、互联网、体育】版块
	    	else{
	      		while($row = mysqli_fetch_array($result)){
					array_push($arr, array("news_id"=>urlencode($row['news_id']),"news_title"=>urlencode($row['news_title']),"news_time"=>urlencode($row['news_time']),
					"news_image"=>urlencode($row['news_image']), "news_link"=>urlencode($row['news_link'])));
	      		}
	      	}
	    }
	echo urldecode(json_encode($arr)); //php输出json格式的字符数据(字符串形式)
	}
	mysqli_close($dbc); //关闭数据库连接
?>
