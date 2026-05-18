import { Router } from "express";
import { FeedbackController } from "../controllers/feedbackController.js";

const feedbackRoutes = Router();
const feedbackController = new FeedbackController();

feedbackRoutes.post("/enviar", feedbackController.create);
feedbackRoutes.get("/lista", feedbackController.exibir);
feedbackRoutes.get("/dados", feedbackController.getFeedbacks);
feedbackRoutes.post("/remover", feedbackController.remove);


export { feedbackRoutes };