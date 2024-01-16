import { DataTypes, Model } from "sequelize";
import { sequelize } from "../config/config.js";

export class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      unique: true,
      primaryKey: true,
    },
    plantId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Plant', 
        key: 'id' 
      }
    },
    userUid: {
      type: DataTypes.STRING,
      allowNull: false,
      references: {
        model: 'User', 
        key: 'uid' 
      }
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    surnom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nomReel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descriptionPerso: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    heure_notification: {
      type: DataTypes.TIME,
      allowNull: true,
    },
    frequence_notif: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    debut_darrosage_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    sequelize,
    modelName: "Plante_obtenue",
    tableName: "Plantes_obtenues",
    timestamps: false,
  }
);

export default User;
