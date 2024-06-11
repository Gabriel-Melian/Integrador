import {getPrescripciones, getPrescripcion} from "../controllers/prescripcionController.js";
import {getProfesional} from "../controllers/profesionalController.js";
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
    //console.log(prescripcion);
    prescripcion.forEach(prescripcion => {
        prescripcion.fechaPrestacion = new Date(prescripcion.fechaPrestacion).toLocaleDateString();
    })
    res.status(200).render("prescripcion", {prescripciones: prescripcion, profesional: profesional});
});


export default router;