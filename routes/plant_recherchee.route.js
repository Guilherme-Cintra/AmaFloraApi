import Router from 'express';
import { createRecherche, deleteAllFromUser, deleteRecherche, getAllRecherchesFromUser } from '../controller/plante_recherchee.controller.js';
const rechercheRouter = Router()

rechercheRouter.post('/create', createRecherche)
rechercheRouter.get('/historique', getAllRecherchesFromUser)
rechercheRouter.delete('/delete/:id', deleteRecherche)
rechercheRouter.delete('/deleteAll/', deleteAllFromUser)

export default rechercheRouter