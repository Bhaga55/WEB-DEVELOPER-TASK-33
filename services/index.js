const express = require("express");

const AuthenticationRouter = require("../routers/Authentication.routes");

//Creating Api Server
const API_SERVER = express();

//Inject Routes

API_SERVER.use("/auth", AuthenticationRouter);

module.exports = API_SERVER;




