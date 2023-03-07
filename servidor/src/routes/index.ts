import { Router, Request, Response } from "express";
import matematica from './matematica';
import data from './data';
import Login from "../controllers/Login";

const routes = Router();

routes.use("/date", data);
routes.use("/math", matematica);
routes.post('/login', Login.login);

routes.use( (req:Request,res:Response) => res.json({error:"Requisição desconhecida"}) );

export default routes;
