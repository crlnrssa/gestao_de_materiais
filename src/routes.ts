import { Router } from "express";
import { UsersController } from "./controllers/UsersController";
import { MaterialsController } from "./controllers/MaterialsController";

const routes = Router()

routes.post('/registro', new UsersController().create)
routes.post('/materiais', new MaterialsController().create)

export default routes