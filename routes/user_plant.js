import { Router } from "express"
import { createPlant, deletePlant, getAllPlants, updatePlante } from "../controller/users_plant.controller.js";

const userPlantRouter = Router()
userPlantRouter.post('/create', createPlant);
userPlantRouter.get('/list/:uid', getAllPlants);
userPlantRouter.delete('/delete/:id', deletePlant) 
userPlantRouter.put('/update/:id', updatePlante) 
export default userPlantRouter //Exporter le router