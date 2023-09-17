<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Installation

1. Clone the repository
2. Install dependencies
3. run `docker-compose up -d` to start the database
4. run `npm run start:dev` to start the server

# Documentation endpoints (Swagger)
[http://localhost:3000/api](http://localhost:3000/api)


# Estrura de carpetas

```
src
├── Common
│   ├── domain
│   │   ├── dto
│   │   │   ├── user-repository.dto.ts // DTO de usuario
│   ├── entities
│   │   ├── user.entity.ts // Entidad de usuario
│   ├── repositories
│   │   ├── orm-user.interface.ts // Interfaz de usuario
│   │   ├── orm-user.repository.ts // Repositorio de usuario
│   ├── infraestructure
│   │   ├── config-database.ts // config db
│   ├── users
│   │   ├── application
│   │   │   ├── usecase
│   │   │   │   ├── create-user.usecase.interface.ts // Interfaz de caso de uso para crear usuario
│   │   │   │   ├── create-user.usecase.ts // Caso de uso para crear usuario
│   │   │   │   ├── get-all-users.usecase.interface.ts // Interfaz de caso de uso para obtener todos los usuarios
│   │   │   │   ├── get-all-users.usecase.ts // Caso de uso para obtener todos los usuarios
│   │   ├── domain
│   │   │   ├── models
│   │   │   │   ├── user-repository.model.ts // Modelo de usuario
│   │   │   ├── repository
│   │   │   │   ├── user.interface.ts // Interfaz de usuario
│   │   │   │   ├── user.repository.ts // Repositorio de usuario
│   │   ├── infraestructure
│   │   │   ├── dto
│   │   │   │   ├── user.dto.ts // DTO de usuario
│   │   │   ├── rest
│   │   │   │   ├── create-user.controller.ts // Controlador para crear usuario
│   │   │   │   ├── get-all-users.controller.ts // Controlador para obtener todos los usuarios
│   │   ├── users.module.ts
├── app.module.ts
├── main.ts