-- entidad 1
CREATE TABLE agentes (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    especie VARCHAR(50) NOT NULL,
    fecha_de_ingreso DATE DEFAULT,
    estado VARCHAR(20) NOT NULL,
    nivel_de_habilidad INT NOT NULL,
    imagen_url VARCHAR(200)
);

-- entidad 2
CREATE TABLE villanos (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    edad INT NOT NULL,
    ocupacion VARCHAR(50),
    ubicacion VARCHAR(100),
    estado VARCHAR(20) NOT NULL,
    apodo VARCHAR(50) NULL,
    imagen_url VARCHAR(200)
);

-- entidad 3
CREATE TABLE misiones (
    id SERIAL PRIMARY KEY,
    id_agente INT REFERENCES agentes(id),
    id_villano INT NOT NULL REFERENCES villanos(id),
    titulo VARCHAR(100) NOT NULL,
    descripcion VARCHAR(250),
    estado VARCHAR(20) NOT NULL,
    coste INT,
    nivel_de_dificultad INT NOT NULL,
    imagen_url VARCHAR(200)
);