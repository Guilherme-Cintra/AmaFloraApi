import Plant from "../models/plant.js";

export const createPlant = async (req, res) => {
  try {
    //Récupère les informations de la plante par le corps de la requête
    const {
      id,
      imageUrl,
      nomCommun,
      nomScientifique,
      freqEau,
      uniteFreqEau,
      soleil,
      description,
      niveau_de_diff,
    } = req.body;
    const plant = await Plant.findByPk(id);
    //Si la plante est déjà dans la base de données on ne fait rien sinon on créé une nouvelle avec les infos passées par la requête
    if (plant) {
      res.status(201).json({ message: "Plant already exists", plant });
    } else {
      const newPlant = await Plant.create({
        id,
        imageUrl,
        nomCommun,
        nomScientifique,
        freqEau,
        uniteFreqEau,
        soleil,
        description,
        niveau_de_diff,
      });

      res.status(200).json({ message: "Plant created", newPlant });
    }
  } catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res
      .status(500)
      .json({ message: "Erreur lors de la création de l’a plante", error });
  }
};

export const getPlantById = async (req, res) => {
  try {
    const id = req.body.id;
    const plant  = await Plant.findByPk(id)

    if (plant){
      res.status(201).json({plant: plant})
    } else {
      res.status(404).json({message: "Plante n'existe pas"})
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération de la plante",
      error,
    });
  }
}

export const deletePlant = async (req, res) => {
  try {
    const plant = await Plant.findByPk(req.params.id);

    if (plant) {
      await plant.destroy();
      const message = "Plant deleted";
      const status = "OK";
      res.status(200).json({ message, status });
    } else {
      const message = "Plant not found";
      const status = "PASOK";
      res.status(404).json({ message, status });
    }
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la suppression de la plante",
      error,
    });
  }
};
