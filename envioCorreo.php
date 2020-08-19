<?php
// re-envío de un correo desde un website utilizando solo PHP
$destino= "mikecolmenaresg@gmail.com";
$nombre = $_POST["nombre"];
$telefono = $_POST["telefono"];
$correo = $_POST["correo"];
$mensaje = $_POST["mensaje"];

$contenido ="nombre: " . $nombre . "\nCorreo: " . $correo. "\nTeléfono: " . $telefono . "\nMensaje: " . $mensaje;

mail($destino,"contacto", $contenido);


