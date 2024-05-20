FROM node:8.10.0

WORKDIR /usr/src/app
COPY package.json /usr/src/app

# Limpiar la caché de npm antes de instalar las dependencias
RUN npm cache clean --force

# Instalar react-hot-loader y otras dependencias
RUN npm install --loglevel verbose

CMD ["npm", "start"]