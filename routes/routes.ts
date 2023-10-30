import express, { Router, Express, Request, Response } from "express";
import {StartServerUI, RoutesUI} from "../interfaces/routes/RoutesUIs";
import { Server, IncomingMessage, ServerResponse } from "http";
import RoutesControllers from "../controllers/RoutesControllers";

const app = express();
const router = express.Router();
const routesControllers = new RoutesControllers();


class HttpRoutes implements RoutesUI {
    protected router: Router
    protected app: Express

    constructor(router: Router, app: Express){
     this.app = app 
     this.router = router
    }

    routes(): Router {
     this.router.get('/', routesControllers.get);        
     return this.app.use(this.router)
    }
}



class StartServer implements StartServerUI {
    private routerClass: HttpRoutes
    private app: Express

    constructor(Routes: HttpRoutes, app: Express){
      this.routerClass = Routes
      this.app = app
    }

    startServer(): Server<typeof IncomingMessage, typeof ServerResponse> {
      this.routerClass.routes();
      return this.app.listen(3000, () => console.log(`server rodando`));
    }
}



const httpRoutes = new HttpRoutes(router, app);
new StartServer(httpRoutes, app).startServer()