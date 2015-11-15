<?php
// 根据前端ajax请求，从数据库删除一行数据(适用于所有版块)
header("Content-type: text/html; charset=utf-8"); 
$dbc = mysqli_connect("localhost", "root", "", "baidu_news"); //连接数据库
if(!$dbc){
  die("could not connect: ".mysqli_error());
}else{
  $news_id = mysqli_real_escape_string($dbc, $_REQUEST['news_id']); //获取需删除数据行的id
  $table_name = mysqli_real_escape_string($dbc, $_REQUEST['table_name']); //获取需删除数据所在的数据表名称
  
  // 执行删除数据行操作
  $query = "DELETE FROM $table_name WHERE news_id = '$news_id'";
  $result = mysqli_query($dbc, $query);

  // 删除数据失败，返回错误提示
  if(!$result){
    die('Error: '.mysqli_error());
  }
}
mysqli_close($dbc); //关闭数据库连接
?>