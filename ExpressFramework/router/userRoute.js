import express from "express"
import {userInfo} from "../controller/userController.js";

const router = express.Router()

router.get("/info", userInfo)

export default router;