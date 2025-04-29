const Home = require("../models/homeMod");
const favorite = require("../models/favoriteMod");

exports.getIndex = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/index", {
      pageTitle: "airbnb Homes",
      registeredHomes,
    });
  });
};

exports.getHomesList = (req, res, next) => {
  Home.fetchAll((registeredHomes) => {
    res.render("store/homes-list", {
      registeredHomes,
      pageTitle: "homes-list",
    });
  });
};

exports.getBookings = (req, res, next) => {
  res.render("store/bookings", {
    pageTitle: "my-bookings-home",
  });
};

exports.getFavorites = (req, res, next) => {
  favorite.getFavorites((favorites) => {
    Home.fetchAll((registeredHomes) => {
      const favoriteHomes = registeredHomes.filter((home) =>
        favorites.includes(home.id)
      );
      res.render("store/favorite-lists", {
        favoriteHomes,
        pageTitle: "my-favorites-home",
      });
    });
  });
};

exports.postAddToFavorites = (req, res, next) => {
  favorite.addToFavorites(req.body.id, (error) => {
    if (error) {
      console.log("Error while marking favorite", error);
    }
    res.redirect("/favorites");
  });
  // console.log("HOME.ID", req.body);
};

exports.getHomeDetails = (req, res, next) => {
  const homeId = req.params.homeId;
  Home.findById(homeId, (home) => {
    if (!home) {
      res.redirect("/homes-list");
    } else {
      // console.log("At Home Details", home);
      res.render("store/homes-details", {
        pageTitle: "home-details",
        home: home, // you probably want to pass the home object here
        // homeId,
      });
    }
  });
};
