module.exports = (sequelize, Sequelize) => {
  const compound = sequelize.define("compound", {
    CompoundName: {
      type: Sequelize.STRING,
    },
    CompoundDescription: {
      type: Sequelize.TEXT,
    },
    strImageSource: {
      type: Sequelize.STRING,
    },
    strImageAttribution: {
      type: Sequelize.STRING,
    },
    dateModified: {
      type: Sequelize.DATE,
      allowNull: true
    },
  });

  return compound;
};
