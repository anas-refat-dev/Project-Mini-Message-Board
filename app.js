import path from "node:path";
import { fileURLToPath } from "node:url";
import express from "express";

import indexRouter from "./routes/index.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use("/", indexRouter);

app.listen(3000, () => {
  console.log("app is listening");
});
