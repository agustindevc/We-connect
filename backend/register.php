<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

require(__DIR__ . 'configHost.php');

// Recibe y limpia los datos del formulario
$data = json_decode(file_get_contents("php://input"), true);
$nombre    = trim($data['nombre'] ?? '');
$alias = trim($data['alias'] ?? '');
$email     = trim($data['email'] ?? '');
$contrasena = $data['contrasena'] ?? '';

// Validación básica
if (!$nombre || !$alias || !$email || !$contrasena) {
    http_response_code(400);
    echo json_encode(["error" => "Error al registrar el patatón"]);
    exit;
}

$hashedPassword = password_hash($contrasena, PASSWORD_DEFAULT);

$sql = "INSERT INTO usuario (nombre, alias, email, contrasena) VALUES ('$nombre', '$alias', '$email', '$hashedPassword')";
$stmt = $_conexion->prepare($sql);

try {
    $stmt->execute([
        $nombre,
        $alias,
        $email,
        $hashedPassword
    ]);
    echo json_encode(["success" => "Usuario registrado correctamente"]);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error al registrar: " . $e->getMessage()]);
}
?>
