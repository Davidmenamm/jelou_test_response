# Todo List Backend

This project is a backend API for a Todo List application, built with NestJS, TypeScript, TypeORM, and MySQL 5.7. It uses Docker for containers.

## Requirements
- Docker
- Node.js
- NestJS

## Installation Instructions
1. Navigate to the `code_challenge` directory:
   cd code_challenge

2. Install dependencies:
   npm install

3. Optionally, if you experience any issues with Docker caches, you can clean up Docker:
   docker system prune -af
   docker-compose down -v

4. Build and run the Docker containers:
   docker-compose up --build

5. Create a `.env` file in the root directory with the following content:
   DB_HOST=db
   DB_PORT=3306
   DB_USERNAME=root
   DB_PASSWORD=root
   DB_NAME=todo_db
   PORT=3000

6. Use the following `docker-compose.yml` content:
   version: "3.8"
   services:
     backend:
       container_name: todo-backend
       build:
         context: .
         dockerfile: Dockerfile
       ports:
         - "3000:3000"
       environment:
         - DB_HOST=db
         - DB_PORT=3306
         - DB_USERNAME=root
         - DB_PASSWORD=root
         - DB_NAME=todo_db
       depends_on:
         - db
     db:
       image: mysql:5.7
       container_name: todo-db
       environment:
         MYSQL_ROOT_PASSWORD: root
         MYSQL_DATABASE: todo_db
       ports:
         - "3306:3306"
       volumes:
         - db_data:/var/lib/mysql
   volumes:
     db_data:

7. Ensure this `Dockerfile` is in the root directory:
   FROM node:16
   WORKDIR /app
   COPY package*.json ./
   RUN npm install
   COPY . .
   RUN npm run build
   EXPOSE 3000
   CMD ["npm", "run", "start:prod"]

## Running the Application
After successfully starting the Docker containers, the application will be available at:
- API: http://localhost:3000
- Swagger UI: http://localhost:3000/api

## Thank You
