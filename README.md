<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Installation

1. Clone the repository
2. Install the dependencies with `npm install`
3. Run the server with `npm run start:dev`

# Estrura de carpetas

```
src
├── Common
│   ├── DTOs
│   │   ├── create-user.dto.ts // DTO para crear un usuario
│   ├── Entities
│   │   ├── user.entity.ts // Entidad de usuario
│   ├── Repositories
│   │   ├── orm-user.interface.ts // Interfaz de usuario
│   │   ├── orm-user.repository.ts // Repositorio de usuario
├── app.module.ts
├── main.ts