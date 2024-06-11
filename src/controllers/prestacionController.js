import Prestacion from "../models/prestacion.js";
import { conn } from "../models/db.js";


export async function getPrestaciones() {
    const query = "SELECT * FROM prestaciones";
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