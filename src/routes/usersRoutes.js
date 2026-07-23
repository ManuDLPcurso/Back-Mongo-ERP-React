import {Router} from "express";
import { createUser } from './../controllers/usersControllers.js';

const router = Router();

router.post("/add-user", createUser);


export default router;
