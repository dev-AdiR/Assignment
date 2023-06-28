const db = require("../models");
const {
  create,
  findAll,
  findOne,
  update,
  destroy,
  deleteAll,
} = require("../service/compound.service");

// Create and Save a new compound
exports.create = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        message: "Content can not be empty!",
      });
      return;
    }

    const data = await create(req.body);
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the compound.",
    });
  }
};

// Retrieve all compounds from the database.
exports.findAll = async (req, res) => {
  try {
    const data = await findAll({});
    res.send(data);
  } catch (error) {
    res.status(500).send({
      message: err.message || "Some error occurred while retrieving compounds.",
    });
  }
};

// Find a single compound with an id
exports.findOne = async (req, res) => {
  try {
    const id = req.params.id;
    const data = await findOne(id);
    res.send(data);
  } catch (error) {
    res.status(500).send(error);
  }
};

// Update a compound by the id in the request
exports.update = async (req, res) => {
  try {
    const id = req.params.id;
    let response = await update(id, req.body);
    return res.send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Delete a compound with the specified id in the request
exports.delete = async (req, res) => {
  try {
    const id = req.params.id;
    let response = await destroy(id);
    return res.send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};

// Delete all compounds from the database.
exports.deleteAll = async (req, res) => {
  try {
    let response = await deleteAll();
    return res.send(response);
  } catch (error) {
    return res.status(500).send(error);
  }
};
