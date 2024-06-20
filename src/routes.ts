import { Router } from "express";
import { UsersController } from "./controllers/UsersController";
import { MaterialsController } from "./controllers/MaterialsController";
import { authMiddleware } from "./middlewares/authMiddleware";

const routes = Router()

routes.post('/registro', new UsersController().create)
routes.post('/login', new UsersController().login)
routes.post('/materiais', authMiddleware, new MaterialsController().create)

routes.put('/materiais/:id', authMiddleware, new MaterialsController().update)

routes.get('/users/:id', authMiddleware, new UsersController().getUserById)

routes.delete('/materiais/:id', authMiddleware, new MaterialsController().delete)

export default routes