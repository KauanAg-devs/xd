import { Application, Request, Response} from "express";
import { RoutesControllersUI } from "../interfaces/controllers/RoutesControllersUI";

class RoutesControllers implements RoutesControllersUI {
  get(req: Request, res: Response): Response<any, Record<string, any>> {
    return res.json("oi");
  }
}

export default RoutesControllers