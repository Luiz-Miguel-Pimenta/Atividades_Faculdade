import { Router } from "express";
import { feedbackRoutes } from "./feedbackRouter.js";


const router = Router()

router.use("/feedbacks", feedbackRoutes);

export { router }