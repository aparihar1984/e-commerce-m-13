// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // Defining the columns as instructed by the requirements given on the assignment page
    // Defining the id column
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    },
    // Defining the product_name column
    product_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    // Defining the price column
    price: {
        type: DataTypes.DECIMAL(10,2),
        allowNull: false,
        validate: {
            isDecimal: true
        }
    },
    // Defining the stock column
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 10,
        validate: {
            isNumeric: true
        }
    },
    // Defining the category_id column
    // Foreign Key
    category_id: {
        type: DataTypes.INTEGER,
        references: {
            // This references the `category` model, which we set in `Category.js` as its `modelName` property
            model: "category",
            key: "id"
        }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
