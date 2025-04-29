const express = require("express");
const hostCont = require("../Controllers/hostCont");
// const imagePath = "./images/nature.jpg"; // Default image path

const hostRouter = express.Router();

hostRouter.get("/add-home", hostCont.getAddHome);
hostRouter.get("/host-homes-list", hostCont.getHomes);

// Change this line:
hostRouter.post("/add-home", hostCont.postAddHome);

exports.hostRouter = hostRouter;
