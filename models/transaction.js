module.exports = function(sequelize, DataTypes) {
    return sequelize.define("transaction", {
        document: DataTypes.JSONB
    })
  }


  const transaction = (sequelize, DataTypes) => {
    const Transaction = sequelize.define('transaction', {
        document: DataTypes.JSONB,
    });
  
    Transaction.associate = models => {
        Transaction.belongsTo(models.User);
    };
  
    return Transaction;
  };
  
  export default transaction;
  