import { Router } from "express";
import {Matematica} from "../controllers";
const routes = Router();

routes.get('/sum', Matematica.somar);
routes.get('/dif', Matematica.subtrair);

export default routes;