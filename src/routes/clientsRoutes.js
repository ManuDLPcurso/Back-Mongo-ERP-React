import { Router } from "express"
import * as controller from "../controllers/clientsController.js"
import { authMiddleware } from "../middleware/authMiddleware.js";
    
const router =Router()

router.get("/", controller.getClients);
router.post("/add-clients",authMiddleware,controller.createClient);
router.put("/edit-client/:_id",authMiddleware,controller.updateClient);
router.delete("/delete-client/:_id",authMiddleware,controller.deleteClient);

export default router;