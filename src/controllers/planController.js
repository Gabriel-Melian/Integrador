import Plan from "../models/plan.js";
import { conn } from "../models/db.js";

export async function getPlanes() {
    const query = "SELECT * FROM plan";
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