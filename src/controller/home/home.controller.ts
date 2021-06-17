import { Router, Request, Response, NextFunction } from "express";
import Controller from "../../interfaces/controller.interface";

class Homeontroller implements Controller {
  public path = "/";
  public router = Router();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.getHome);
  }

  private getHome = async (
    request: Request,
    response: Response,
    next: NextFunction
  ) => {
    response.send({ msg: "ok" });
  };
}

export default Homeontroller;
