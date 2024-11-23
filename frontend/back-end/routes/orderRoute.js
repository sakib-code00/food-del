import express from "express"
import authMiddleware from "../middleware/auth.js"
import { palceOrder } from "../controllers/orderController.js"

const orderRouter = express.Router();

orderRouter.post("/place", authMiddleware,palceOrder);

export default orderRouter;