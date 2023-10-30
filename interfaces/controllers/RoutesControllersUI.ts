import {Response, Request } from "express";

export interface RoutesControllersUI {
  get(req: Request, res: Response): Response<any, Record<string, any>>;
}