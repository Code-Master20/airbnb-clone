const fs = require("fs");
const path = require("path");
const rootDir = require("../utils/pathUtils");
const homeDataPath = path.join(rootDir, "data", "homes.json");
// const registeredHomes = [];

module.exports = class home {
  constructor(
    houseName,
    houseAddress,
    housePrice,
    houseLocation,
    imagePath1,
    mainHall,
    kitchenHall,
    bedRoom,
    bathRoom,
    balcony,
    ownerImage,
    houseDescription
  ) {
    this.houseName = houseName;
    this.houseAddress = houseAddress;
    this.housePrice = housePrice;
    this.houseLocation = houseLocation;
    this.imagePath1 = imagePath1;
    this.mainHall = mainHall;
    this.kitchenHall = kitchenHall;
    this.bedRoom = bedRoom;
    this.bathRoom = bathRoom;
    this.balcony = balcony;
    this.ownerImage = ownerImage;
    this.houseDescription = houseDescription;
  }

  save() {
    this.id = Math.random().toFixed(11).toString();
    home.fetchAll((registeredHomes) => {
      registeredHomes.push(this);
      fs.writeFile(homeDataPath, JSON.stringify(registeredHomes), (err) => {
        if (err) {
          console.log("Error Occurred While Saving Home Data");
        } else {
          console.log("Home Data Saved Successfully");
        }
      });
    });
  }

  static fetchAll(callback) {
    fs.readFile(homeDataPath, (err, data) => {
      callback(!err ? JSON.parse(data) : []);
    });
  }

  static findById(homeId, callback) {
    this.fetchAll((homes) => {
      const homeFound = homes.find((home) => home.id === homeId);
      callback(homeFound);
    });
  }
};
