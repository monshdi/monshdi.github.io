<?php

$recepient = "dima.monsh@yandex.ru";
$sitename = "СДК Инвест";

$mail = trim($_GET["mail"]);
$phone = trim($_GET["phone"]);
$work = trim($_GET["work"]);

$pagetitle = "Новая заявка с сайта \"$sitename\"";
$message = "Имя: $name \nТелефон: $phone \nУслуга: $work";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");