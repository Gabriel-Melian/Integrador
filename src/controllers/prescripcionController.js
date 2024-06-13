import Prescripcion from "../models/prescripcion.js";
import { guardarPaciente } from "./pacienteController.js";
import { conn } from "../models/db.js";

export async function getPrescripciones() {
    const query = "SELECT * FROM prescripcion";
    try {
        const result = await conn.execute(query);
        if(result.length === 0) return [];
        //console.log(result);
        const [rows] = result;
        return rows;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function getPrescripcionesProf(idProf) {
    const query = `
        SELECT p.id, p.idPaciente, p.idPrestacion, p.fechaPrestacion, p.idProfesional, p.diagnostico, p.idMedicamento, p.dosis, p.duracion,
            pr.nombre AS nombreProfesional, pr.apellido AS apellidoProfesional,
            pa.nombre AS nombrePaciente, pa.apellido AS apellidoPaciente,
            pres.estudio AS estudio,
            med.nombre AS nombreMedicamento
        FROM prescripcion p
        JOIN profesionales pr ON p.idProfesional = pr.id
        JOIN paciente pa ON p.idPaciente = pa.id
        JOIN prestaciones pres ON p.idPrestacion = pres.id
        JOIN medicamentos med ON p.idMedicamento = med.id
        WHERE p.idProfesional = ?;
    `;
    try {
        const [rows] = await conn.execute(query, [idProf]);
        if (rows.length === 0) {
            console.log('No hay prescripciones para el ID Profesional ' + idProf);
            return [];
        }
        return rows;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function guardarPrescripcion(prescripcion) {
    //idPaciente, idPrestacion, fechaPrestacion, idProfesional, diagnostico, idMedicamento, dosis, duracion
    const query = `INSERT INTO prescripcion (idPaciente, idPrestacion, fechaPrestacion, idProfesional, diagnostico, idMedicamento, dosis, duracion)
                   VALUES (?, ?, now(), ?, ?, ?, ?, ?)`;
    try {
        const result = await conn.execute(query, [
            prescripcion.idPaciente,
            prescripcion.idPrestacion,
            prescripcion.idProfesional,
            prescripcion.diagnostico,
            prescripcion.idMedicamento,
            prescripcion.dosis,
            prescripcion.duracion
        ]);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

