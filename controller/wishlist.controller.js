import { WishList } from "../models/wishlist.model.js";
import Plant from "../models/plant.js";
import User from "../models/user.model.js";

export const createFav = async (req, res) => {
  try {
    const { plantId, userId } = req.body;
    console.log(plantId);
    const plant = await Plant.findByPk(plantId);
    const user = await User.findByPk(userId);

    console.log(plantId);
    if (plant) {
      if (user) {
        const fav = await WishList.create({
          plantId,
          userId,
        });

        res.status(200).json({ message: "Favorit ajouté", fav });
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
      .json({ message: "Erreur lors de la sauvegarde du favorit", error });
  }
};

export const deleteFav = async (req, res) => {
  try {
    const id = req.params.id;
    const fav = await WishList.findAll({
      where: {
        plantId: id,
      },
    });
    if (fav.length > 0) {

      await WishList.destroy({
        where: {
          plantId: id,
        },
      });
      res.status(200).json({ messgae: "Favorit supprimée" });
    } else {
      res.status(404).json({ message: "Favorit non trouvée" });
    }
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res
      .status(500)
      .json({ message: "Erreur lors  de la suppression du favorit", error });
  }
};

export const deleteWishList = async (req, res) => {
  try {
    const uid = req.body.uid;
    const wishlist = await WishList.findAll({
      where: {
        userId: uid,
      },
    });
    if (wishlist.length > 0) {
      await WishList.destroy({
        where: {
          userId: uid,
        },
      });
      res.status(200).json({ message: "favorits supprimés" });
    } else {
      res.status(404).json({ message: "favorits non trouvée" });
    }
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res.status(500).json({
      message: "Erreur lors de la suppression des favorits de l’utilateur",
      error,
    });
  }
};
export const getWishList = async (req, res) => {
  try {
    const uid = req.params.uid;
    const wishList = await WishList.findAll({
      where: {
        userId: uid,
      },
    });

    if (wishList) {
      res.status(200).json({ wishList });
    } else {
      res.status(400).json({ message: "user has no wish list" });
    }
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erreur dans la recherche de la liste de souhaits",
        error,
      });
  }
};
