import Admin from "../models/usuario.js";
import { conn } from "../models/db.js";

export async function getAdmin(id) {
    const query = "SELECT * FROM usuario WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        if(result.length === 0) return [];
        //console.log(result);
        const [rows] = result;
        return rows;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}