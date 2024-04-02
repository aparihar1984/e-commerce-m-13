const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Category extends Model {}

Category.init(
  {
    // Defining the columns as instructed by the requirements given on the assignment page
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement:true
    },
    category_name: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    timestamps: false,
    // freezeTableName must be set to true, otherwise sequelize will convert it to the plural value.
    freezeTableName: true,
    underscored: true,
    modelName: 'category',
  }
);

module.exports = Category;
