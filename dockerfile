# 1. Utiliser une image Node.js légère
FROM node:18-alpine

# 2. Créer le dossier de l'app dans le conteneur
WORKDIR /usr/src/app

# 3. Copier les fichiers de dépendances
COPY package*.json ./

# 4. Installer les dépendances
RUN npm install --only=production

# 5. Copier le reste du code source
COPY . .

# 6. Exposer le port de l'app
EXPOSE 3000

# 7. Lancer l'application
CMD [ "node", "server.js" ]