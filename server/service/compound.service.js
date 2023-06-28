const db = require("../models");
const compound = db.compounds;

String.prototype.sendAsMessage = function () {
  return {
    message: this,
  };
};

exports.create = async (data) => {
  const result = await compound.create(data);
  return Promise.resolve(result);
};

exports.findAll = async (condition) => {
  const data = await compound.findAll(condition);
  return Promise.resolve(data);
};

// Find a single compound with an id
exports.findOne = async (id) => {
  const data = await compound.findByPk(id);
  if (data) {
    return Promise.resolve(data);
  } else {
    return Promise.reject(
      `Cannot find compound with id=${id}.`.sendAsMessage()
    );
  }
};

// Update a compound by the id in the request
exports.update = async (id, body) => {
  const num = await compound.update(
    { ...body, dateModified: new Date() },
    {
      where: { id: id },
    }
  );

  if (num[0] === 1) {
    return Promise.resolve("compound was updated successfully".sendAsMessage());
  } else {
    return Promise.reject(
      `Cannot update compound with id=${id}. Maybe compound was not found or req.body is empty!`.sendAsMessage()
    );
  }
};

// Delete a compound with the specified id in the request
exports.destroy = async (id) => {
  const num = await compound.destroy({
    where: { id: id },
  });

  if (num === 1) {
    return Promise.resolve("compound was deleted successfully".sendAsMessage());
  } else {
    return Promise.reject(
      `Cannot delete compound with id=${id}. Maybe compound was not found!`.sendAsMessage()
    );
  }
};

// Delete all compounds from the database.
exports.deleteAll = async () => {
  const nums = await compound.destroy({
    where: {},
    truncate: false,
  });

  if (nums) {
    return Promise.resolve(
      `${nums} compounds were deleted successfully!`.sendAsMessage()
    );
  }
};

exports.bulkCreate = async (data) => {
  if (!Array.isArray(data)) {
    return Promise.reject("data must be an array");
  }
  return compound.bulkCreate(data);
};
