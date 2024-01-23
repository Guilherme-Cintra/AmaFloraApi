import Identification from "../models/identification.model.js";
import Plant from "../models/plant.js";
import User from "../models/user.model.js";

export const createIdentification = async (req, res) => {
  try {
    const { userId, imageDidentification, nomScientifique } = req.body;
   

      const user = await User.findByPk(userId);
      const dateDidentification = new Date();
      if (user) {
        const identification = await Identification.create({
         
          userId,
          imageDidentification,
          nomScientifique,
          dateDidentification,
        });

        res.status(200).json({
          message: "Identification effectuée avec succès",
          identification,
        });
      } else {
        res.status(404).json({ message: "Utilisateur non trouvé" });
      }
    
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la sauvegarde de l'identification",
      error,
    });
  }
};

export const getAllIdentifications = async (req, res) => {
  try {
    const userId = req.params.uid;
    const user = await User.findByPk(userId);
    if (user) {
      const identifications = await Identification.findAll({
        where: {
          userId: userId,
        },
      });

      if (identifications) {
        res.status(200).json({
          message: "Identifications de l'utilisateur",
          identifications,
        });
      } else {
        res
          .status(404)
          .json({ message: "L'utilisateur n'a pas d'identifications" });
      }
    } else {
      res.status(404).json({ message: "L'utilisateur n'a pas été trouvé" });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération des identifications",
      error,
    });
  }
};

export const deleteIdentifications = async (req, res) => {
  try {
    const uid = req.body.uid;
    const user = await User.findByPk(uid);
    if (user) {
      const identifications = await Identification.findAll({
        where: {
          userId: uid,
        },
      });
      if (identifications.length > 0) {
        await Identification.destroy({
          where: {
            userId: uid,
          },
        });
        res.status(200).json({ message: "identifications supprimées" });
      } else {
        res.status(404).json({ message: "identifications non trouvée" });
      }
    } else {
      res.status(404).json({ message: "Utilisateur non trouvé" });
    }
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res.status(500).json({
      message:
        "Erreur lors de la suppression des identifications de l’utilateur",
      error,
    });
  }
};

export const deleteOneIdentification = async (req, res) => {
  try {
    const id = req.params.id;
    const identification = await Identification.findByPk(id);
    if (identification) {
      await identification.destroy();
      res.status(200).json({ messgae: "identification supprimée" });
    } else {
      res.status(404).json({ message: "identification non trouvée" });
    }
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res.status(500).json({
      message: "Erreur lors  de la suppression de l'identification",
      error,
    });
  }
};
