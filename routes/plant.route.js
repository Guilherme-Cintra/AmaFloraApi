import { Router } from "express"
import { createPlant, deletePlant, getPlantById } from "../controller/plant.controller.js";
const plantRouter = Router()
plantRouter.post('/create', createPlant);
plantRouter.get('/getPlant', getPlantById);
plantRouter.delete('/delete/:id', deletePlant) 
export default plantRouter //Exporter le router