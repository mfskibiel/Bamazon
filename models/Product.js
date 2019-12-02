module.exports = function(sequelize, DataTypes) {
  var Product = sequelize.define("Product", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true
    },
    product: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    department: {
      type: DataTypes.STRING,
      allowNull: 0
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: 0
    },
    stock_quantity: {
      type: DataTypes.INTEGER,
      allowNull: 0
    }
  });
  return Product;
};
