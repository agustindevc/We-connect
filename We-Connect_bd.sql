CREATe schema weConnect_bd;

use weConnect_bd;

CREATe TABLE usuario (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    seudonimo VARCHAR(50),
    apellido VARCHAR(100),
    email VARCHAR(100) NOT NULL UNIQUE,
    contraseña VARCHAR(255) NOT NULL,
    telefono VARCHAR(15),
    area_trabajo VARCHAR(100),
    premium BOOLEAN DEFAULT FALSE,
    rol ENUM('demandante', 'oferente', 'admin') NOT NULL, -- hay tres tipos de usuario
    foto_perfil VARCHAR(255)
);

CREATE TABLE categoria (
    id_categoria INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL UNIQUE,
    descripcion TEXT
);

CREATE TABLE producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    imagen VARCHAR(255),
    id_categoria INT NOT NULL,
	fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- se establecen la fecha y hora del sistema actual
    id_oferente INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria),
    FOREIGN KEY (id_oferente) REFERENCES usuario(id_usuario)
);

CREATE TABLE servicio (
    id_servicio INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    imagen VARCHAR(255),
    id_categoria INT NOT NULL,
    fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP, 
    oferente_id INT NOT NULL,
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria),
    FOREIGN KEY (oferente_id) REFERENCES usuario(id_usuario)
);

CREATE TABLE producto_servicio (
    id_producto_servicio INT AUTO_INCREMENT PRIMARY KEY, -- Producto o servicio
    nombre VARCHAR(100) NOT NULL,
    descripcion TEXT NOT NULL,
    precio DECIMAL(10, 2) NOT NULL,
    stock INT DEFAULT 0,
    imagen VARCHAR(255),
    id_categoria INT NOT NULL,
    fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP, -- se establecen la fecha y hora del sistema actual YYYY-MM-DD HH::MM:SS
    id_oferente INT NOT NULL,
    tipo ENUM('producto', 'servicio') NOT NULL, -- dos tipos
    FOREIGN KEY (id_categoria) REFERENCES categoria(id_categoria),
    FOREIGN KEY (id_oferente) REFERENCES usuario(id_usuario)
);

ALTER TABLE producto_servicio ADD INDEX (id_categoria);
ALTER TABLE producto_servicio ADD INDEX (id_oferente);

CREATE TABLE oferta (
    id_oferta INT AUTO_INCREMENT PRIMARY KEY,
    id_producto_servicio INT NOT NULL,
    descuento DECIMAL(5, 2) CHECK (descuento BETWEEN 0 AND 100), -- 5 números en total máximo 2 de llos después del punto decimal
    fecha_inicio DATE NOT NULL,
    fecha_fin DATE NOT NULL,
    descripcion TEXT,
    FOREIGN KEY (id_producto_servicio) REFERENCES producto_servicio(id_producto_servicio),
    CONSTRAINT check_fecha CHECK (fecha_fin >= fecha_inicio) -- restriccion fecha fin sea mayor a fecha de inicio
);

CREATE TABLE valoracion (
    id_resena INT AUTO_INCREMENT PRIMARY KEY,
    id_producto_servicio INT NOT NULL,
    id_usuario INT NOT NULL,
    calificacion INT CHECK (calificacion BETWEEN 1 AND 5), -- valores entre 1 y 5 (estrellas)
    comentario TEXT,
	fecha_agregado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_producto_servicio) REFERENCES producto_servicio(id_producto_servicio),
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario) ON DELETE CASCADE
);

CREATE TABLE chat (
    id_mensaje INT AUTO_INCREMENT PRIMARY KEY,
    id_oferente INT NOT NULL,
    id_demandante INT NOT NULL,
    mensaje TEXT NOT NULL,
    fecha_envio TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_oferente) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_demandante) REFERENCES usuario(id_usuario)
);

CREATE TABLE transaccion (
    id_transaccion INT AUTO_INCREMENT PRIMARY KEY,
    id_oferente INT NOT NULL,
    id_demandante INT NOT NULL,
    id_producto_servicio INT NOT NULL, 
    fecha_transaccion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    cantidad DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (id_oferente) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_demandante) REFERENCES usuario(id_usuario),
    FOREIGN KEY (id_producto_servicio) REFERENCES producto_servicio(id_producto_servicio)
);

CREATE TABLE pago (
    id_pago INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    cantidad DECIMAL(10, 2) NOT NULL, -- numero de hasta 10 digitos dos de llos despues del punto decimal
    metodo_pago VARCHAR(50), -- Por ejemplo: 'Tarjeta', 'efectivo'
    fecha_pago TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);

CREATE TABLE notificacion (
    id_notificacion INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    mensaje TEXT NOT NULL,
    leido BOOLEAN DEFAULT FALSE,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);


DROP TABLE notificacion, pago, transaccion, chat, valoracion, oferta, producto_servicio, categoria, usuario;