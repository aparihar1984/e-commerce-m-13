const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // Defining the columns as instructed by the requirements given on the assignment page
    // Defining the id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // Defining the product_id column
    product_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "product",
            key: "id"
        }
    },
    // Defining the tag_id column
    tag_id: {
        type: DataTypes.INTEGER,
        references: {
            model: "tag",
            key: "id"
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
