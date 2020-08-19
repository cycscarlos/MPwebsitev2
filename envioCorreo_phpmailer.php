<?php
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

$body ="nombre: " . $nombre . "<br>Teléfono: " . $telefono . "<br>Correo: " . $correo . "<br>Mensaje: " . $mensaje;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

// Instantiation and passing `true` enables exceptions
$mail = new PHPMailer(true);

try {
    //Server settings
    $mail->SMTPDebug = 0;                                    // Enable verbose debug output
    $mail->isSMTP();                                         // Send using SMTP
    $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                // Enable SMTP authentication
    $mail->Username   = 'mikecolmenaresg@gmail.com';         // SMTP username
    $mail->Password   = 'mikecolmenaresg1*';                 // SMTP password
    $mail->SMTPSecure = 'tls';                               // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
    $mail->Port       = 587;                                 // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

    //Recipients
    $mail->setFrom('mikecolmenaresg@gmail.com', '$nombre');
    $mail->addAddress('mikecolmenaresg@gmail.com');          // Add a recipient   

    // Content
    $mail->isHTML(true);                                     // Set email format to HTML
    $mail->Subject = 'Correo enviado desde MP_website';
    $mail->Body    = '$body';
    $mail->CharSet = 'UTF-8';

        $mail->send();
    echo 'El mensaje se envió correctamente';
}catch (Exception $e) {
    echo 'Hubo un error al enviar el mensaje: ', $mail->ErrorInfo;
}

//     $mail->send();
//     echo '<script>
//             alert("El mensaje se envió correctamente");
//             window.history.go(-1);
//           </script>;
// } catch (Exception $e) {
//     echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
// }