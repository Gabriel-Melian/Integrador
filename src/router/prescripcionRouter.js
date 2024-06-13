import {getPrescripciones, getPrescripcionesProf, guardarPrescripcion} from "../controllers/prescripcionController.js";
import {getProfesional} from "../controllers/profesionalController.js";
import {getMedicamentos} from "../controllers/medicamentosController.js";
import {getPrestaciones} from "../controllers/prestacionController.js";
import { getObrasSociales } from "../controllers/obraSocialController.js";
import {getPlanes} from "../controllers/planController.js";
import { guardarPaciente } from "../controllers/pacienteController.js";
import {Router} from "express";
const router = Router();

//http://localhost:3000/prescripciones (GET Thunderclient)
router.get("/prescripciones", async (req, res) => {//Falta obtener prescripciones en base al idProfesional
    const prescripciones = await getPrescripcionesProf(2);
    const profesional = await getProfesional(2);
    //console.log(prescripciones);
    prescripciones.forEach(prescripcion => {
        prescripcion.fechaPrestacion = new Date(prescripcion.fechaPrestacion).toLocaleDateString();
    })
    res.status(200).render("panelPrescripciones", {prescripciones: prescripciones, profesional: profesional} );
});

//http://localhost:3000/prescripcion (GET Thunderclient)
router.get("/prescripcion", async (req, res) => {
    const prescripcion = await getPrescripciones(2);
    const profesional = await getProfesional(2);
    const medicamentos = await getMedicamentos();
    const prestaciones = await getPrestaciones();
    const obrasSociales = await getObrasSociales();
    const planes = await getPlanes();

    const planesPorObraSocial = {};//Ordenar en base al idObra
    planes.forEach(plan => {
        if (!planesPorObraSocial[plan.idObra]) {
            planesPorObraSocial[plan.idObra] = [];
        }
        planesPorObraSocial[plan.idObra].push(plan);
    });

    prescripcion.forEach(prescripcion => {
        prescripcion.fechaPrestacion = new Date(prescripcion.fechaPrestacion).toLocaleDateString();
    })
    res.status(200).render("prescripcion", {prescripciones: prescripcion,
        profesional: profesional, medicamentos: medicamentos, prestaciones: prestaciones,
        obrasSociales: obrasSociales, planesPorObraSocial: planesPorObraSocial});
});

//http://localhost:3000/prescripcion/nueva (POST Thunderclient)
router.post("/prescripcion/nueva", async (req, res) => {
    const paciente = req.body.paciente;
    const prescripcionData = req.body.prescripcion;//const prescripcion = req.body;
    //const result = await guardarPrescripcion(prescripcion);
    //res.status(200).json(result);

    try {
        const pacienteGuardado = await guardarPaciente(paciente);

        //Asigno idPaciente a la prescripcion
        prescripcionData.idPaciente = pacienteGuardado.id;

        //Guardo prescripcion
        const resultado = await guardarPrescripcion(prescripcionData);
        res.status(200).json(resultado);
    } catch (error) {
        res.status(500).json({ error: "Error al guardar la prescripción" });
    }

});

export default router;