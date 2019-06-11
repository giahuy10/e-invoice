'use strict';
module.exports = (sequelize, DataTypes) => {
  const Faqs = sequelize.define('Faqs', {
    questionName: DataTypes.STRING,
    answer: DataTypes.TEXT,
    state: DataTypes.INTEGER
  }, {});
  Faqs.associate = function(models) {
    // associations can be defined here
  };
  return Faqs;
};
