// import important parts of sequelize library
const { Model, DataTypes, ConnectionError } = require("sequelize");

// import our database connection from config.js
const connection = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Category extends Model {}

// set up fields and rules for Product model
Category.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    categoryName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "category",
  }
);

module.exports = Category;
