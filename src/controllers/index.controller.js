import { IndexService } from "../services/index.service";

export class IndexController {
  indexService = new IndexService();
  constructor() {}
  getIndex(req, res, next) {
    console(this.indexService);

    res.send("s");
  }
}
