import {getAdmin} from "../controllers/adminController.js";
import {getProfesionales} from "../controllers/profesionalController.js";
import {getMedicamentos} from "../controllers/medicamentosController.js";
import {Router} from "express";
const router = Router();

//http://localhost:3000/admin (GET Thunderclient)
router.get("/admin", async (req, res) => {
    const admin = await getAdmin(1);
    const profesionales = await getProfesionales();
    const medicamentos = await getMedicamentos();
    profesionales.forEach(profesional => {
        profesional.estadoStr = (profesional.estado === 1) ? "Activo" : "Inactivo";
    })
    medicamentos.forEach(medicamento => {
        medicamento.estadoStr = (medicamento.estado === 1) ? "Activo" : "Inactivo";
    })
    //const medicamentos = await getMedicamentos();
    res.status(200).render("layoutAdmin", {admin: admin, profes: profesionales, medicamentos: medicamentos});
});



export default router;