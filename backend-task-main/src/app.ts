import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

import * as middlewares from "./middlewares";

import MessageResponse from "./interfaces/MessageResponse";
import router from "./routes";

require("dotenv").config();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  credentials: true,
};
app.use(morgan("dev"));
app.use(helmet());
app.use(cors(corsOptions));
app.use(express.json());

app.get<{}, MessageResponse>("/", (req, res) => {
  res.json({
    message: "Go To /api/v1",
  });
});

app.use("/api/v1", router);

app.use(middlewares.notFound);
app.use(middlewares.errorHandler);

export default app;
