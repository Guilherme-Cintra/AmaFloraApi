import Plant from "../models/plant.js";
import Plante_recherchee from "../models/plante_recherchee.js";
import User from "../models/user.model.js";

export const getAllRecherchesFromUser = async (req, res) => {
  try {
    const uid = req.params.uid;
    const recherches = await Plante_recherchee.findAll({
      where: {
        userId: uid,
      },
    });

    if (recherches) {
      res.status(200).json({ recherches });
    } else {
      res.status(400).json({ message: "user has no history" });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erreur dans la recherche de l'historique", error });
  }
};
export const createRecherche = async (req, res) => {
  try {
    const { plantId, userId } = req.body;
    const plant = await Plant.findByPk(plantId);
    const user = await User.findByPk(userId);

    const currentDate = new Date();
    if (plant) {
      if (user) {
        const recherche = await Plante_recherchee.create({
          plantId,
          userId,
          date: currentDate,
        });

        res.status(200).json({ message: "Plante recherchée", recherche });
      } else {
        res.status(404).json({ message: "Utilisateur non trouvé" });
      }
    } else {
      res.status(404).json({ message: "Plante non trouvée" });
    }
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res
      .status(500)
      .json({ message: "Erreur lors de la sauvegarde de la recherche", error });
  }
};

export const deleteRecherche = async (req, res) => {
  try {
    const id = req.params.id;
    const recherche = await Plante_recherchee.findByPk(id);
    if (recherche) {
      await recherche.destroy();
      res.status(200).json({ messgae: "recherche supprimée" });
    } else {
      res.status(404).json({ message: "Recherche non trouvée" });
    }
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res.status(500).json({ message: "Erreur lors  de la suppression", error });
  }
};

export const deleteAllFromUser = async (req, res) => {
  try {
    const uid = req.body.uid;
    const recherches = await Plante_recherchee.findAll({
      where: {
        userId: uid,
      },
    });
    if (recherches.length > 0) {
      await Plante_recherchee.destroy({
          where: {
              userId: uid,
          },
      });
      res.status(200).json({ message: "recherches supprimées" });
  } else {
      res.status(404).json({ message: "Recherches non trouvée" });
  }
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res.status(500).json({
      message: "Erreur lors de la suppression des recherches de l’utilateur",
      error,
    });
  }
};
