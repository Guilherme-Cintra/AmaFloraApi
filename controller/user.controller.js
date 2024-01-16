
import User from "../models/user.model.js"



//Créé ou trouve un utilisateur par son uid fourni par google. Renvoie les infos de l'utilisateur
export const enregistrerUser = async (req, res) => {
    try {
      const {uid, email, displayName, profilePicture} = req.body
      const user = await User.findByPk(uid)
      if (user){
        res.status(200).json({message: 'Cet utilisateur existe déjà.',result :user})
      } else {

                //Création du nouvel user
                const nvUser = await User.create({
                  uid,
                    email,
                    displayName,
                    profilePicture,
                })
                // Réponse avec statut 201  et les informations du nouvel 'user'
            res.status(201).json(nvUser);
      }


    } 
    catch (error) {
    // En cas d'erreur, renvoie une réponse d'erreur
    res.status(500).json({ message: 'Erreur lors de la création de l’user', error });
  }
}



// destroy user
export const destroyUser = async (req, res, next) => {


    try {
      //recupérer les données du corps de la requête
      // const { firstName,lastName, password, profilePicture } = req.body;
      // Trouver user par son uid
      const user = await User.findByPk(req.params.uid);
      if (user) {
        //destroy avec sequelize de l'user trouvé
        await user.destroy();
        // Evoie les donées de l'user en json
        res.status(200).json({message: 'Utilisateur supprimé.'});
      } else {
        // Si l'user n'est pas trouvé on envoie le message
        res.status(404).json({ message: 'Utilisateur non trouvé' });
      }
    } catch (error) {
      next(error);
    }
  };