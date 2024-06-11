import prescripcion from "../models/prescripcion.js";
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

export async function getPrescripcion(idProf) {//Buscar por id de Profesional
    const query = "SELECT * FROM prescripcion WHERE idProfesional = ?";
    try {
        const result = await conn.execute(query, [idProf]);
        if(result.length === 0) return console.log('El ID Profesional ' + idProf + ' no existe');
        //console.log(result);
        const [rows] = result;
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

