FROM node:18

# Установка рабочей директории
WORKDIR /app

# Копирование package файлов
COPY package*.json ./

# Установка зависимостей
RUN npm ci 

# Копирование исходного кода
COPY . .

# Экспорт порта
EXPOSE 3000

# Команда запуска
CMD ["npm", "run", "local"]