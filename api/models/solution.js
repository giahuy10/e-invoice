'use strict';
module.exports = (sequelize, DataTypes) => {
  const Solution = sequelize.define('Solution', {
    client: DataTypes.STRING,
    clientLogo: DataTypes.STRING,
    softwareName: DataTypes.STRING,
    solutionName: DataTypes.STRING
  }, {});
  Solution.associate = function(models) {
    // associations can be defined here
  };
  return Solution;
};