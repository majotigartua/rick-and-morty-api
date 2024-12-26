import express from "express";
import router from "./routes/characters-routes.js";
import { message } from "./utils/message.js";
import { RESPONSE_CODE, RESPONSE_MESSAGE } from "./utils/constants.js";

const app = express();

app.use(express.json());

app.use(router);

app.use((request, response, next) => {
  message(response, RESPONSE_CODE.NOT_FOUND, RESPONSE_MESSAGE.NOT_FOUND);
});

export default app;