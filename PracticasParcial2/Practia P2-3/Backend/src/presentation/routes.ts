import { Router } from 'express';


import {  CategoryRoutes  } from './Category/routes';
import {  ServiceRoutes  } from './Service/routes';
import {  ProductRoutes  } from './Product/routes';

export class AppRoutes {


  static get routes(): Router {

    const router = Router();

    router.use('/api/category', CategoryRoutes.routes );
    router.use('/api/service', ServiceRoutes.routes );
    router.use('/api/product', ProductRoutes.routes );

    return router;
  }


}

