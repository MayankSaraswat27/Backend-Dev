import express from "express";
import {alluser} from "../controller/userController.js"

const router = express.Router();

router.get('/user',alluser);

export default router;            
                    