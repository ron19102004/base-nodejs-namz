import express from "express";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import { IndexRoute } from "./routes/index.route";
export class App {
  app = express();
  constructor() {
    console.log("Con cac");
    this.init();
  }

  init() {
    this.setUp();
    this.setUpRouter();
    this.run();
  }
  setUp() {
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());
  }
  run() {
    let port = 8080;
    this.app.listen(port, () => {
      console.log("Chạy thành công http://localhost:" + port);
    });
  }
  setUpRouter() {
    this.app.use("/", new IndexRoute().router);
  }
}
