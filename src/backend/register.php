<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
require 'config.php';

$data = json_decode(file_get_contents("php://input"), true);

if (
    empty($data['nombre']) ||
    empty($data['seudonimo']) ||
    empty($data['email']) ||
    empty($data['contraseña'])
) {
    http_response_code(400);
    echo json_encode(["error" => "Faltan datos obligatorios"]);
    exit;
}

$hashedPassword = password_hash($data['contraseña'], PASSWORD_DEFAULT);

$sql = "INSERT INTO usuario (nombre, seudonimo, email, contraseña) VALUES (?, ?, ?, ?)";

$stmt = $conn->prepare($sql);

try {
    $stmt->execute([
        $data['nombre'],
        $data['seudonimo'],
        $data['email'],
        $hashedPassword
    ]);
    echo json_encode(["success" => "Usuario registrado correctamente"]);
} catch(PDOException $e) {
    http_response_code(500);
    echo json_encode(["error" => "Error al registrar: " . $e->getMessage()]);
}
?>