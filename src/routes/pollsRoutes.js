import { Router } from "express";
import { postPoll } from "../controllers/pollsControllers.js";

const router = Router();

router.post("/poll", postPoll);

export default router;