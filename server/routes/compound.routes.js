module.exports = app => {
  const compounds = require("../controllers/compound.controller.js");

  var router = require("express").Router();

  // Create a new compound
  router.post("/", compounds.create);

  // Retrieve all compounds
  router.get("/", compounds.findAll);

  // Retrieve all published compounds
  // router.get("/published", compounds.findAllPublished);

  // Retrieve a single compound with id
  router.get("/:id", compounds.findOne);

  // Update a compound with id
  router.put("/:id", compounds.update);

  // Delete a compound with id
  router.delete("/:id", compounds.delete);

  // Delete all compounds
  router.delete("/", compounds.deleteAll);

  app.use('/api/compounds', router);
};
