import { Router } from "express";
import { messages } from "./index.js";
import indexRouter from "./index.js";

const newRouter = Router();

newRouter.get("/", (req, res) => {
  res.render("form");
  // res.send("new Page");
});

newRouter.post("/", (req, res) => {
  // res.render("form");
  const user = req.body.user;
  const message = req.body.message;

  messages.push({
    text: message,
    user: user,
    added: new Date(),
  });

  res.redirect("/");
});

newRouter.get("/:index", (req, res) => {
  const index = Number(req.params.index);
  const message = messages[index];
  res.render("index", { title: "your message", messages: [message] });
});

export default newRouter;
