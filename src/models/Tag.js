// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");

// import our database connection from config.js
const connection = require("../config/connection.js");

// Initialize Product model (table) by extending off Sequelize's Model class
class Tag extends Model {}

// set up fields and rules for Product model
Tag.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    tagName: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize: connection,
    timestamps: false,
    freezeTableName: true,
    underscored: false,
    modelName: "tag",
  }
);

module.exports = Tag;
