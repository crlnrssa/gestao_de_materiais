import { Router } from "express";
import { UsersController } from "./controllers/UsersController";
import { MaterialsController } from "./controllers/MaterialsController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router()

routes.post('/registro', new UsersController().create)
routes.post('/login', new UsersController().login)
routes.post('/materiais', new MaterialsController().create)

routes.get('/profile', authMiddleware, new UsersController().getProfile)

export default routes