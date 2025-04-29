const Home = require("../models/homeMod");

exports.getAddHome = (req, res, next) => {
  res.render("host/add-home", { pageTitle: "Add Home To  AirBnB" });
};

exports.getHomes = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("host/host-homes-list", {
      pageTitle: "Registered Homes",
      registeredHomes,
    });
  });
};

exports.postAddHome = (req, res, next) => {
  const {
    houseName,
    houseAddress,
    housePrice,
    houseLocation,
    houseDescription,
  } = req.body;

  // ✅ Declare imagePath BEFORE using it
  const imagePath1 = "/images/house1.jpg"; // Default image path
  const mainHall = "/images/src/MainHall/mainHall1.jpg"; // Default main hall image path
  const kitchenHall = "/images/src/Kitchen/kitchenRoom1.jpg"; // Default kitchen image path
  const bedRoom = "/images/src/bedRoom/bedRoom1.jpg"; // Default bedroom image path
  const bathRoom = "/images/src/bathRoom/bathroom1.jpg"; // Default bathroom image path
  const balcony = "/images/src/balcony/balcony1.jpeg";
  const ownerImage = "/images/src/NurRehman.JPG"; // Default owner image path

  const newHome = new Home(
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
  );

  newHome.save();

  res.render("host/home-added-success", { pageTitle: "Register Home" });
};
