import { Router } from "express";
import { IndexController } from "../controllers/index.controller";

export class IndexRoute {
  path = "/";
  router = Router();
  indexController = new IndexController();
  constructor() {
    this.init();
  }
  init() {
    this.router.get(`${this.path}`, this.indexController.getIndex);
  }
}
