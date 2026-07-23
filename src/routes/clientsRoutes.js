import { Router } from "express"
import * as controller from "../controllers/clientsController.js"
    
const router =Router()

router.get("/", controller.getClients);
router.post("/add-clients", controller.createClient);
router.put("/edit-client/:_id", controller.updateClient);
router.delete("/delete-client/:_id", controller.deleteClient);

export default router;