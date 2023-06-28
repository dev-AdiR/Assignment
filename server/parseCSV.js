const csv = require("csv-parser");
const fs = require("fs");
const path = require("path");
const { bulkCreate, findAll } = require("./service/compound.service");
const results = [];

const checkAndInsertDataToDb = async () => {
  let data = await findAll();
  if (data.length < 1) {
    fs.createReadStream(path.join(__dirname, "./compound.csv"))
      .pipe(csv())
      .on("data", (data) => {
        results.push(data);
      })
      .on("end", () => {
        bulkCreate(results)
          .then((result) => console.log("Successfully added csv to database"))
          .catch((error) => console.log("errorR", error));
      });
  }
  return;
};

module.exports = checkAndInsertDataToDb;
