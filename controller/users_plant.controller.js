// import { DataTypes, Model } from "sequelize";
import Plant from "../models/plant.js";
import User from "../models/user.model.js";
import Plantes_obtenues from "../models/users_plant.js";

export const getAllPlants = async (req, res) => {
  try {
    const uid = req.params.uid;
    const plantes = await Plantes_obtenues.findAll({
      where: {
        userUid: uid,
      },
    });

    if (plantes) {
      const status = "200";
      res.status(200).json(status, plantes);
    } else {
      const status = "404";
      res.status(404).json({ message: "pas de plantes", status });
    }
  } catch (error) {
    res.status(500).json({ message: "Erreur d'obtention des plantes", error });
  }
};

export const createPlant = async (req, res) => {
  try {
    const {
      plantId,
      userUid,
      imageUrl,
      surnom,
      nomReel,
      descriptionPerso,
      heure_notification,
      frequence_notif,
      debut_darrosage_date,
    } = req.body;

    console.log(heure_notification)

    const user = await User.findByPk(userUid);
    if (user) {
      const plant = await Plant.findByPk(plantId);

      if (plant) {
        const planteObtenue = await Plantes_obtenues.create({
          plantId,
          userUid,
          imageUrl,
          surnom,
          nomReel,
          descriptionPerso,
          heure_notification,
          frequence_notif,
          debut_darrosage_date,
        });
        res.status(200).json(planteObtenue);
      } else {
        res.status(500).json({ message: "Plante n'existe pas"});
      }
    } else {
      res.status(500).json({ message: "Utilisateur n'existe pas" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur dans la création de la plante", error });
  }
};

export const updatePlante = async (req, res) => {
  try {
    const id = req.params.id;
    const plante = await Plantes_obtenues.findByPk(id);
    const {
      surnom,
      descriptionPerso,
      heure_notification,
      frequence_notif,
      debut_darrosage_date,
    } = req.body;

    if (plante) {
      await plante.update({ 
        surnom,
        descriptionPerso,
        heure_notification,
        frequence_notif,
        debut_darrosage_date
      });
      res.status(200).json(plante);
    } else {
      res.status(500).json({ message: "Plante non trouvée", error });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur dans la mise à jour de la plante", error });
  }
};

export const deletePlant = async (req, res) => {
  try {
    const id = req.params.id;
    const plante = await Plantes_obtenues.findByPk(id);
    if (plante) {
      await plante.destroy();
      res.status(200).json({ message: "Plante supprimée" });
    } else {
      res.status(500).json({ message: "Plante non trouvée" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur dans suppression de la plante", error });
  }
};
