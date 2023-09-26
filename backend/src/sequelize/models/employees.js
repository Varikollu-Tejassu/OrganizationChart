'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Employees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Employees.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type:DataTypes.INTEGER
    },
    employeeName: {
      type: DataTypes.STRING
    },
    positionName: {
      type: DataTypes.STRING
    },
    department: {
      type: DataTypes.STRING
    },
    parentId: {
      type:DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type:DataTypes.DATE
    }
  }, {
    sequelize,
    modelName: 'Employees',
  });
  return Employees;
};