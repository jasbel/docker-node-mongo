# seleccionar node version 14
FROM node:14

# -p si la carpeta no existe que lo cree
RUN mkdir -p /usr/src/app

# para hacercarse o direcciona a la carpeta app
WORKDIR /usr/src/app

# * copi todos los que tengas esee nombre
COPY package*.json ./

RUN npm install

# copiar de directorio actual mas anterior
COPY . .

EXPOSE 3000

# CMD ["node", "src/index.js"]
# CMD ["npm", "start"]
CMD ["npm", "run", "dev"]