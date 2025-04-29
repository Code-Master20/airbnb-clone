const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");
const favoriteDataPath = path.join(rootDir, "data", "favorites.json");
// const registeredHomes = [];

module.exports = class favorite {
  static addToFavorites(homeId, callback) {
    favorite.getFavorites((favorites) => {
      if (favorites.includes(homeId)) {
        callback(" Home is Already Added to Favorites");
      } else {
        favorites.push(homeId);
        fs.writeFile(favoriteDataPath, JSON.stringify(favorites), callback);
      }
    });
  }

  static getFavorites(callback) {
    fs.readFile(favoriteDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }
};
