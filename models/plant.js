import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config.js";

export class Plant extends Model {}

Plant.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nomCommun: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nomScientifique: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    freqEau: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    uniteFreqEau:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    soleil: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    niveau_de_diff: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    modelName: "Plant",
    tableName: "Plant",
    timestamps: false, // Pas de createdAt/updatedAt
  }
);

export default Plant;
