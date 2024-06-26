import { getProfesional, getProfesionalDni, getProfesionalNombre
    , desactivarProfesional, activarProfesional, 
    getProfesionales
 } from "../controllers/profesionalController.js";
import { getPacientes } from "../controllers/pacienteController.js";
import { Router } from "express";

const router = Router();

//http://localhost:3000/profesional/test (GET Thunderclient)
router.get("/profesional", async (req, res) => {
    const profesional = await getProfesional(2);
    const pacientes = await getPacientes(2);
    //console.log(pacientes);
    //console.log(profesional);
    pacientes.forEach(paciente => {
        paciente.fechaNac = new Date(paciente.fechaNac).toLocaleDateString();
        paciente.estadoStr = (paciente.estado === 1) ? "Activo" : "Inactivo";
        paciente.sexoStr = (paciente.sexo === "Masculino") ? "M" : "F";
    })
    res.status(200).render("layoutMedico", {prof: profesional, pacientes: pacientes});
});

//Consulta BD
//SELECT pr.nombre as nombreProfesional, diagnostico, p.nombre, p.apellido FROM prescripcion
//JOIN paciente as p ON prescripcion.idPaciente = p.id
//JOIN profesionales as pr ON prescripcion.idProfesional = pr.id
//WHERE pr.id = 3;

export default router;