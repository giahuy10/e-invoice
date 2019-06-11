'use strict';
module.exports = (sequelize, DataTypes) => {
  const News = sequelize.define('News', {
    title: DataTypes.STRING,
    description: DataTypes.TEXT,
    state: DataTypes.INTEGER,
    thumbnail: DataTypes.STRING,
    slug: DataTypes.STRING
  }, {});
  News.associate = function(models) {
    // associations can be defined here
  };
  return News;
};
