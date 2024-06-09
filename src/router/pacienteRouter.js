import { getPacientes, getPaciente,
    desactivarPaciente, activarPaciente,
    getPacienteDni, guardarPaciente, modificarPaciente 
} from "../controllers/pacienteController.js";//Importar cada metodo
import { Router } from "express";

const router = Router();

router.get("/pacientes", async (req, res) => {
    const pacientes = await getPacientes();
    //console.log(pacientes);
    pacientes.forEach(paciente => {
        paciente.fechaNac = new Date(paciente.fechaNac).toLocaleDateString();
        paciente.estadoStr = (paciente.estado === 1) ? "Activo" : "Inactivo";
        paciente.sexoStr = (paciente.sexo === "Masculino") ? "M" : "F";
    })
    res.status(200).json(pacientes);
});

//http://localhost:3000/pacientes (GET Thunderclient)
router.get("/pacientes", async (req, res) => {
    const pacientes = await getPacientes();
    console.log(pacientes);
    res.status(200).json(pacientes);
});

//http://localhost:3000/pacientes/nuevo (POST Thunderclient)
router.post("/pacientes/nuevo", async (req, res) => {
    const paciente = req.body;
    const result = await guardarPaciente(paciente);
    res.status(200).json(result);
});
/*{
    "nombre": "Juan",
    "apellido": "Pérez",
    "dni": "42382977",
    "fechaNac": "1990-01-03",
    "email": "juanPerez@gmail.com",
    "sexo": "Masculino",
    "idObraSocial": 1
}*/

//http://localhost:3000/pacientes/2 (GET Thunderclient)
router.get("/pacientes/:id", async (req, res) => {
    const id = req.params.id;//params mapea los parametros que vienen en la url
    const paciente = await getPaciente(id);
    res.status(200).json(paciente);
});

//http://localhost:3000/pacientes/desactivar/2 (PATCH Thunderclient)
router.patch("/pacientes/desactivar/:id", async (req, res) => {
    const id = req.params.id;
    const paciente = req.body;
    const result = await desactivarPaciente(id, paciente);
    res.status(200).json(result);
});

//http://localhost:3000/pacientes/activar/2 (PATCH Thunderclient)
router.patch("/pacientes/activar/:id", async (req, res) => {
    const id = req.params.id;
    const paciente = req.body;
    const result = await activarPaciente(id, paciente);
    res.status(200).json(result);
});

//localhost:3000/pacientes/update/4 (PUT Thunderclient)
router.put("/pacientes/update/:id", async (req, res) => {
    const id = req.params.id;
    const { nombre, apellido, dni, fechaNac, email, sexo, idObraSocial } = req.body;
    const paciente = { id, nombre, apellido, dni, fechaNac, email, sexo, idObraSocial };
    try {
        const result = await modificarPaciente(paciente);
        res.status(200).json({ message: 'Paciente actualizado exitosamente', result });
    } catch (error) {
        res.status(500).json({ message: 'Error al actualizar el paciente', error });
    }
});
/*{
    "nombre": "Oscar",
    "apellido": "Pérez",
    "dni": "42382977",
    "fechaNac": "1990-01-03",
    "email": "oscarPerez@gmail.com",
    "sexo": "Masculino",
    "idObraSocial": 1
}*/

export default router;