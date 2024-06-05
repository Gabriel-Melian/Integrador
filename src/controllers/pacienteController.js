import Paciente from "../models/paciente.js";
import { conn } from "../models/db.js";

export async function getPacientes() {//Consulta para seleccionar todos los pacientes.
    const query = "SELECT * FROM paciente";
    try {
        const result = await conn.execute(query);
        if(result.length === 0) return [];
        console.log(result);
        const [rows] = result;
        return rows;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}
//Consultar,guardar, buscar paciente por id,nombre,dni.