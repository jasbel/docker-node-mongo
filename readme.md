<!-- Creacion de una imagen -->
docker build -t hellonode .

<!-- Correr la imagen en un puerto especifico -->
docker run -p 4000:3000 hellonode

<!-- Crear docker componse -->
docker-compose.yml


<!-- # volumes me este util para sincronizacion de mi docker y mi local !TODO:important -->

<!-- Correr docker-compose -->
docker-compose build

<!-- Inicializar docker-compose -->
docker-compose up

<!-- Conexion al bash del contenedor -->
docker exec -it exampleapp bash
> ls -a # ver los archivos actuales y ocultos

<!-- Parar docker-compose -->
docker-compose build