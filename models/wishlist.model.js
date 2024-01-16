import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config.js";

export class WishList extends Model {}

WishList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
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
  },
  {
    sequelize,
    modelName: "WishList",
    tableName: "WishList",
    timestamps: false, // Pas de createdAt/updatedAt
  }
);

export default WishList;
