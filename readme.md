<!-- Creacion de una imagen -->
docker build -t hellonode .

<!-- Correr la imagen en un puerto especifico -->
docker run -p 4000:3000 hellonode