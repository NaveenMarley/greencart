import express from "express";
import authSeller from "../middlewares/authSeller.js";
import { updateCart } from "../controllers/cartController.js";


const cartRouter = express.Router()

cartRouter.post('/update', authSeller, updateCart)

export default cartRouter;