//External Module
const express = require("express");
const storeCont = require("../Controllers/storeCont");

const storeRouter = express.Router();

storeRouter.get("/", storeCont.getIndex);
storeRouter.get("/bookings", storeCont.getBookings);
storeRouter.get("/homes-list", storeCont.getHomesList);
storeRouter.get("/favorites", storeCont.getFavorites);
storeRouter.get("/homes/:homeId", storeCont.getHomeDetails);
storeRouter.post("/favorites", storeCont.postAddToFavorites);

exports.storeRouter = storeRouter;
