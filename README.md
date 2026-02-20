## Trabajo Práctico Final(Camejo) – 2C 2025  
## Facultad de Ingeniería – Universidad de Buenos Aires

## Integrantes:

- Gonzalo Lujan
- Matías Urbani
- Franco Emanuel Campos
- Bautista Reinaldo Lopez
  
# Agencia Secreta – O.W.C.A.

Este proyecto consiste en la gestión de una agencia secreta O.W.C.A.

El sistema permite administrar:
- Agentes
- Villanos
- Misiones
  
## Como iniciar
desde el directorio del proyecto
* `docker compose down -v` para cerrar contenedores anteriores
* `docker compose up --build` para buildear y lanzar tanto la pagina como el backend
* `docker compose up --build -d database` para buildear y lanzar solo la database
* `docker compose up --build -d api` para buildear y lanzar la api
* `docker compose up --build -d web` para buildear y lanzar la pagina
