"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class doctors extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  doctors.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      speciality: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      isPromoted: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
      },
      fees: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: DataTypes.STRING,
      rating: {
        type: DataTypes.INTEGER,
        defaultValue: 1,
        validate: {
          min: 0,
          max: 5,
        },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "doctors",
    }
  );
  return doctors;
};
