import { getPacientes } from "../controllers/pacienteController.js";
import { Router } from "express";
const router = Router();
router.get("/pacientes", async (req, res) => {
    const pacientes = await getPacientes();
    console.log(pacientes);
    res.status(200).json(pacientes);
});

export default router;
//router.get("/pacientes", getPacientes);
//router.post("/pacientes", savePaciente);
//router.put("/pacientes/:id", updatePaciente);
//router.patch("/pacientes/:id", updatePaciente);//Actualiza 1 solo atributo que vos le envies.