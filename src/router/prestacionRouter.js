import {getPrestaciones} from "../controllers/prestacionController.js";
import {Router} from "express";
const router = Router();

//localhost:3000/prestaciones (GET Thunderclient)
router.get("/prestaciones", async (req, res) => {
    const prestaciones = await getPrestaciones();
    res.status(200).json(prestaciones);
})

export default router;