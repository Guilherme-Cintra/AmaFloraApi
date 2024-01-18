import { Router } from "express";
import { createIdentification, deleteIdentifications, deleteOneIdentification, getAllIdentifications } from "../controller/identification.controller.js";
const identificationRouter = Router()

identificationRouter.get('/:uid', getAllIdentifications)
identificationRouter.post('/', createIdentification)
identificationRouter.delete('/delete/:id',deleteOneIdentification)
identificationRouter.delete('/deleteAll', deleteIdentifications)

export default identificationRouter