'use strict';
module.exports = (sequelize, DataTypes) => {
  const Behaviour = sequelize.define('Behaviour', {
    document: DataTypes.JSONB
  }, {});
  Behaviour.associate = function(models) {
    // associations can be defined here
  };
  return Behaviour;
};