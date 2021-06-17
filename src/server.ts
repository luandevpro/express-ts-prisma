import "dotenv/config";

import App from "./app";

import Homeontroller from "./controller/home/home.controller";

const app = new App([new Homeontroller()]);

app.listen();
