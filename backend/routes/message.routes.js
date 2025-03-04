import express from "express";
import {sendMessage,getMessage} from "../controllers/message.controller.js";
import {protect} from "../middleware/protect.middleware.js";

const router = express.Router();

router.get("/:id",protect,getMessage);
router.post("/send/:id",protect,sendMessage);


export default router;