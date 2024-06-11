import { getObrasSociales } from "../controllers/obraSocialController.js";
import { Router } from "express";
const router = Router();

//http://localhost:3000/obrasSociales (GET Thunderclient)
router.get("/obrasSociales", async (req, res) => {
    const obrasSociales = await getObrasSociales();
    res.status(200).json(obrasSociales);
});

export default router;