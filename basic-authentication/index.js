import dotenv from "dotenv";
dotenv.config();

import { checkAuthorizationHeader } from "./middleware/authController.js";

import express from "express";
const app = express();

app.get("/", checkAuthorizationHeader, (req, res) => {
  console.log(req.get("Authorization"));
  res.status(202).send(req.get("Authorization"));
});

app.listen(process.env.PORT);
