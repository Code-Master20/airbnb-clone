const express = require("express");
const { storeRouter } = require("./Routes/storeRouter");
const { hostRouter } = require("./Routes/hostRouter");
const Controllers = require("./Controllers/ErrorContt");

const app = express();
app.set("view engine", "ejs");
app.set("views", "views"); // all lowercase

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Add this line for JSON data

app.use(storeRouter);
app.use("/host", hostRouter);

app.use(Controllers.pageNotFound);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
