import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config.js";

export class User extends Model {}

User.init(
  {
    uid:{
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      primaryKey : true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true 
    },
    displayName: {
      type: DataTypes.STRING,
      allowNull: false,
      allowNull: false
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: false
    }
    
  },
  {
    sequelize,
    modelName: "User",
    tableName: "Users",
    timestamps: false, 
  }
);

export default User;
