<?php
    $servidor = "localhost";
    $usuario = "root";
    $contrasena = "";
    $BBDD = "WeConnect_bd";

    //Mysqli ó PDO (nosotros vamos a usar Mysqli)
    //Intenta crear una conexion con la base de datos con los siguientes parámetros y en ese orden
    //sino los recibe, muere.
    $_conexion = new Mysqli($servidor, $usuario, $contrasena, $BBDD)
        or die("Error de conexión");
?>