import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/UserController';
import ProviderController from './app/controllers/ProviderController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import AppointmentController from './app/controllers/AppointmentController';
import authMiddleware from './app/middlewares/auth';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

// todas as rotas apartir daqui passam pelo middleware de autorização
routes.use(authMiddleware);

routes.put('/users', UserController.update);

routes.post('/appointments', AppointmentController.store);

// rota de upload de imagem
routes.post('/files', upload.single('file'), FileController.store);

routes.get('/providers', ProviderController.index);

export default routes;
