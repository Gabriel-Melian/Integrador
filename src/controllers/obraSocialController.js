import ObraSocial from "../models/obraSocial.js";
import { conn } from "../models/db.js";

export async function getObrasSociales() {
    const query = "SELECT * FROM obrasocial";
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