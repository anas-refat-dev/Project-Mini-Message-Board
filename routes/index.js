import { Router } from "express";
import newRouter from "./new.js";

const indexRouter = Router();

export const messages = [
  {
    text: "Hi there!",
    user: "Anas",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "khled",
    added: new Date(),
  },
];

indexRouter.get("/", (req, res) => {
  res.render("index", { title: "Mini Messageboard", messages: messages });
});

indexRouter.use("/new", newRouter);

export default indexRouter;
