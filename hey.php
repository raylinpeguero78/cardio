<?php

$host = "localhost";
$username ="root";
$dbname = "cardio";
$password= "";


$conexion = mysqli_connect($host,$username,$password,$dbname);


if (!$conexion) {
    die("Error de conexión: " . mysqli_connect_error());
}

$nombre = $_POST['name'];
$apellido = $_POST['apellido'];
$telefono = $_POST['tel'];
$email = $_POST['email'];
$inicio_reto = $_POST['tiempo-meses'];
$dinero = $_POST['Dinero'];
$libras_quemar = $_POST['Libras'];
$semanas = $_POST['Semanas'];

$sql = "INSERT INTO cardio1 (nombre, apellido, telefono, email, fecha, Dinero, libras, semanas) 
        VALUES ('$nombre', '$apellido', '$telefono', '$email', '$inicio_reto', '$dinero', '$libras', '$semanas')";

if (mysqli_query($conexion, $sql)) {
    echo "Registro exitoso";
} else {
    echo "Error al registrar los datos: " . mysqli_error($conexion);
}

mysqli_close($conexion);








?>