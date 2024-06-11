import {getPlanes} from "../controllers/planController.js";
import {Router} from "express";
const router = Router();

//http://localhost:3000/planes (GET Thunderclient)
router.get("/planes", async (req, res) => {
    const planes = await getPlanes();
    res.status(200).json(planes);
});


export default router;