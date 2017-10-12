<?
// ----------------------------конфигурация-------------------------- //

$adminemail="admin@site.ru";  // e-mail админа


$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="http://site.ru/index.html";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //



// Принимаем данные с формы

$name=$_POST['name'];

$surname=$_POST['surname'];

$msg=$_POST['message'];





 // Отправляем письмо админу

mail("$adminemail", "$date $time Сообщение
от $name", $surname, "$msg");





// Выводим сообщение пользователю

print "<script language='Javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout('reload()', 6000);
//--></script>

$msg

<p>Сообщение отправлено!</p>";
exit;

 }

?>