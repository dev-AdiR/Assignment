const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize
  .sync()
  .then(() => {
    console.log("Synced db.");
    require("./parseCSV")();
  })
  .catch((err) => {
    console.log("Failed to sync db: " + err.message);
  });

require("./routes/compound.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
