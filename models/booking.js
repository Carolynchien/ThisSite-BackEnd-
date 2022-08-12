"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Booking.init(
    {
      user_Id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE ",
        references: {
          model: "user",
          key: "id",
        },
      },
      location_Id: {
        type: DataTypes.INTEGER,
        onDelete: "CASCADE",
        references: {
          model: "location",
          key: "id",
        },
      },
      payment: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Booking",
      tableName: 'bookings'
    }
  );
  return Booking;
};