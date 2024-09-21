import sequelize, { DataTypes } from "../db";

const Product = sequelize.define("Product", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  cost: {
    type: DataTypes.DECIMAL,
  },
});

export default Product;
