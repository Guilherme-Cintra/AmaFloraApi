import { Router } from "express";
import { createFav, deleteFav, deleteWishList, getWishList } from "../controller/wishlist.controller.js";

const wishRouter = Router()

wishRouter.get('/', getWishList)
wishRouter.post('/', createFav)
wishRouter.delete('/delete/:id',deleteFav)
wishRouter.delete('/deleteAll/', deleteWishList)

export default wishRouter