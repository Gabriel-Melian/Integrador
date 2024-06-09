import Medicamento from "../models/medicamento.js";
import { conn } from "../models/db.js";

export async function getMedicamentos() {
    const query = "SELECT * FROM medicamentos";
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

export async function getMedicamento(id) {//Buscar por id
    const query = "SELECT * FROM medicamentos WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        if(result.length === 0) return console.log('El ID Medicamento ' + id + ' no existe');
        console.log(result);
        const [rows] = result;
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function darBaja(id) {//Dar de Baja
    const query = "UPDATE medicamentos SET estado = 0 WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function darAlta(id) {//Dar de Alta
    const query = "UPDATE medicamentos SET estado = 1 WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}