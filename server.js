const express = require("express");
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("../node-auth2-project/auth/auth-router");
const usersRouter = require("../node-auth2-project/users/users-router");

const server = express();

server.use(helmet());
server.use(express.json());
server.use(cors());

server.use("/api/auth", authRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.json({ api: "live" });
});

module.exports = server;
