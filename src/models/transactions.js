module.exports = function(sequelize, DataTypes) {
    return sequelize.define("transactions", {
        document: DataTypes.JSONB
    })
  }