<?php
$to = "theenglish.post1@gmail.com";
$subject = "ЗАБОР ".$_POST['sort']." ".$_POST['city'];
$message = $_POST['phone']." "."\r\n"  ;
$message .= " Длина: ".$_POST['length']." "."\r\n" ;
$message .= " Высота: ".$_POST['height']." "."\r\n" ;
$message .= " Ворот: ".$_POST['gates']." "."\r\n" ;
$message .= " Калиток: ".$_POST['gate']." "."\r\n" ;
$message .= " Вопрос клиента: ".$_POST['message']." "."\r\n" ;
$message .= " Согласен на передачу данных: ".$_POST['policy']." "."\r\n" ;
$from = "admin@montazhmy1.ru";
$headers = "From: $from";
mail($to,$subject,$message,$headers);
echo "Mail Sent.";
?>
<!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<meta http-equiv="refresh" content="3; url=index.html">
<title>Спасибо! Мы свяжемся с вами!</title>
<meta name="generator">
<script type="text/javascript">
setTimeout('location.replace("/")', 3000);
/*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
</script> 
</head>
<body>
<h1>Спасибо! Мы свяжемся с вами!</h1>
</body>
</html>