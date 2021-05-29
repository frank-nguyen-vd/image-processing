import express from 'express';
import usersController from './users';
import productsController from './products';

const routes = express.Router();

routes.use('/users', usersController);
routes.use('/products', productsController);

export default routes;
