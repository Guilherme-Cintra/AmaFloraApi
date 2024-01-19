import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config.js";

export class Identification extends Model {}

Identification.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
  
    userId: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: "User",
        key: "uid",
      },
    },
    imageDidentification: {
        type: DataTypes.STRING,
        allowNull: true
    },
    nomScientifique: {
        type:DataTypes.STRING,
        allowNull: false
    },
    dateDidentification: {
        type:DataTypes.DATE,
        allowNull: false
    }
  },
  {
    sequelize,
    modelName: "Identification",
    tableName: "Identification",
    timestamps: false, // Pas de createdAt/updatedAt
  }
);

export default Identification;
