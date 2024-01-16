import { Router } from "express"
import { destroyUser, enregistrerUser} from "../controller/user.controller.js";


const utilisateurRouter = Router()

  
//Créé ou trouve un utilisateur par son uid fourni par google. Renvoie les infos de l'utilisateur
utilisateurRouter.post('/login/', enregistrerUser)

//Suppresion d'un utilisateur
utilisateurRouter.delete('/delete/:uid', destroyUser) 

export default utilisateurRouter //Exporter le router