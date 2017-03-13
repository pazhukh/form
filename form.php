<?php
parse_str($_POST['formData'], $query);
$sendTo = trim($query['sendTo']);
// $sendTo = 'pazhukhjob@gmail.com';
$name = $query['name'];
$email = $query['email'];
$phone = $query['phone'];
$date = $query['date'];

$message = '<html><body>';
$message .= '<p>';
$message .= "Клієнт замовив примірку";
$message .= '</p>';
$message .= 'Дата:';
$message .= $date;
$message .= "<br>Ім'я: ";
$message .= $name;
$message .= '<br>Email: ';
$message .= $email;
$message .= '<br>Телефон: ';
$message .= $phone;
$message .= '</p>';
$message .= '</body></html>';




$subject = 'Примірка';
$headers = "From: <$email>\r\n";
$headers.= "MIME-Version: 1.0\r\n";
$headers.= "Content-Type: text/html; charset=utf-8\r\n";

if (mail($sendTo, $subject, $message, $headers)) {
	echo 'done';
} 
?>
