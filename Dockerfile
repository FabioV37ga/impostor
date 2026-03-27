# Usa Node leve
FROM node:20

# Define diretório de trabalho
WORKDIR /app

# Copia apenas o package do frontend primeiro (melhor cache)
COPY frontend/package*.json ./frontend/

# Instala dependências
WORKDIR /app/frontend
RUN npm ci

# Volta pra raiz e copia o restante
WORKDIR /app
COPY . .

# Build do frontend
WORKDIR /app/frontend
RUN npm run build

# Instala um servidor simples pra servir os arquivos estáticos
RUN npm install -g serve

# Porta padrão do Render
EXPOSE 10000

# Serve o build
CMD ["serve", "-s", "dist", "-l", "10000"]