import express from "express";
import { signup , login, logout} from "../controllers/userCreation.controller.mjs";

// creating a express router instance object

const router = express.Router();

// first router -> /user/signup
router.post("/signup",signup);

router.post("/login",login);

router.post("/logout",logout);

export default router;
