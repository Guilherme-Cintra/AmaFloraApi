import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config.js";

export class Plante_recherchee extends Model {}

Plante_recherchee.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    plantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "Plant",
        key: "id",
      },
    },

    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "User",
        key: "uid",
      },
    },
    date: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: "Plante_recherchee",
    tableName: "Plante_recherchee",
    timestamps: false,
  }
);

export default Plante_recherchee;
