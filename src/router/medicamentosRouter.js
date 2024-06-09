import {getMedicamentos, getMedicamento, darBaja, darAlta} from "../controllers/medicamentosController.js";
import {Router} from "express";
const router = Router();

//http://localhost:3000/medicamentos (GET Thunderclient)
router.get("/medicamentos", async (req, res) => {
    const medicamentos = await getMedicamentos();
    res.status(200).json(medicamentos);
});

export default router;