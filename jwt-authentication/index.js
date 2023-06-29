import dotenv from "dotenv";
dotenv.config();

import { createJWT } from "./common/jwt.js";

import express from "express";
const app = express();

app
  .get("/", (req, res) => {
    res.status(202).sendFile("/front-end/login.html", { root: process.cwd() });
  })
  .post("/", express.urlencoded(), createJWT, (req, res) => {
    res.status(404).send("The credentials are wrong! ");
  });

app.listen(process.env.PORT);
