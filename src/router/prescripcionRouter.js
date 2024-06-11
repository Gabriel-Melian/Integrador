import {getPrescripciones, getPrescripcion} from "../controllers/prescripcionController.js";
import {getProfesional} from "../controllers/profesionalController.js";
import {getMedicamentos} from "../controllers/medicamentosController.js";
import {getPrestaciones} from "../controllers/prestacionController.js";
import { getObrasSociales } from "../controllers/obraSocialController.js";
import {getPlanes} from "../controllers/planController.js";
import {Router} from "express";
const router = Router();

//http://localhost:3000/prescripciones (GET Thunderclient)
router.get("/prescripciones", async (req, res) => {
    const prescripciones = await getPrescripciones(3);
    //console.log(prescripciones);
    prescripciones.forEach(prescripcion => {
        prescripcion.fechaPrestacion = new Date(prescripcion.fechaPrestacion).toLocaleDateString();
    })
    res.status(200).render("panelPrescripciones", {prescripciones: prescripciones});
});

//http://localhost:3000/prescripcion (GET Thunderclient)
router.get("/prescripcion", async (req, res) => {
    const prescripcion = await getPrescripciones(3);
    const profesional = await getProfesional(3);
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


export default router;