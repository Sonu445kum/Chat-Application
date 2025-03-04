import express from "express";

import { protect } from "../middleware/protect.middleware.js";
import { getUserForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/allUsers",protect,getUserForSidebar);

export default router;