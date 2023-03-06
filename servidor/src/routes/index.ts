import { Router } from 'express';
import data from './data';
import matematica from './matematica';

const routes = Router();

routes.use('/date', data);
routes.use('/math', matematica);

export default routes;