<?php
// ----------------------------config-------------------------- //
$adminemail="admin@site.ru";
$date=date("d.m.y");
$time=date("H:i");
$referer = $_SERVER['HTTP_REFERER'];
//---------------------------------------------------------------------- //

// Get data from form
$name = filter_input(INPUT_POST, 'name', FILTER_SANITIZE_STRING);
$surname = filter_input(INPUT_POST, 'surname', FILTER_SANITIZE_STRING);
$msg = filter_input(INPUT_POST, 'message', FILTER_SANITIZE_STRING);

// send letter to admin
if (($name || $surname) && $msg) {
	$subject = "=?utf-8?B?".base64_encode("$date $time Сообщение от $name $surname")."?=";
	mail($adminemail, $subject, $msg);
	header('Location: sent.html');
} else {
	header('Location: ' . $referer);
}
