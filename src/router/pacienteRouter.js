import { getPacientes, getPaciente, desactivarPaciente, getPacienteDni, guardarPaciente } from "../controllers/pacienteController.js";//Importar cada metodo
import { Router } from "express";

const router = Router();

router.get("/pacientes", async (req, res) => {//http://localhost:3000/pacientes (GET Thunderclient)
    const pacientes = await getPacientes();
    console.log(pacientes);
    res.status(200).json(pacientes);
});

router.post("/pacientes/nuevo", async (req, res) => {//http://localhost:3000/nuevo (POST Thunderclient)
    const paciente = req.body;
    const result = await guardarPaciente(paciente);
    res.status(200).json(result);
});

router.get("/pacientes/:id", async (req, res) => {//http://localhost:3000/pacientes/2 (GET Thunderclient)
    const id = req.params.id;//params mapea los parametros que vienen en la url
    const paciente = await getPaciente(id);
    res.status(200).json(paciente);
});

export default router;


//router.delete("/pacientes/:id", desactivarPaciente);
//router.put("/pacientes/:id", updatePaciente);
//router.patch("/pacientes/:id", updatePaciente);//Actualiza 1 solo atributo que vos le envies.