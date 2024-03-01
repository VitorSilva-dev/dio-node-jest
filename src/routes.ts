import { Router } from "express";
import { UsersController } from "./controllers/users.controller";

const routes = Router();
const usersController = new UsersController();

routes.get("/users", usersController.listarUsuario);

routes.post("/users", usersController.criarUsuario);

export { routes };
