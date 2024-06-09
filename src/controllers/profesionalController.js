import Profesional from "../models/profesional.js";
import { conn } from "../models/db.js";

export async function getProfesionales() {
    const query = "SELECT * FROM profesionales";
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

export async function guardarProfesional(profesional) {//Desestructuracion.
    const query = "INSERT INTO profesionales (nombre, apellido, dni, email, password, profesion, especialidad, matricula) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
    if (profesional === null) return console.log("Error: Profesional es null");
    const values = [profesional.nombre, profesional.apellido, profesional.dni, profesional.email, profesional.password, profesional.profesion, profesional.especialidad, profesional.matricula];
    try {
        const result = await conn.execute(query, values);
        profesional.id = result[0].insertId;
        //console.log(profesional.id);
        const profesionalGuardado = await getProfesional(profesional.id);
        return profesionalGuardado;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function getProfesional(id) {//Buscar por ID
    const query = "SELECT * FROM profesionales WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        if(result.length === 0) return console.log('El ID Profesional ' + id + ' no existe');
        console.log(result);
        const [rows] = result;
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function getProfesionalDni(dni) {//Buscar por DNI
    const query = "SELECT * FROM profesionales WHERE dni = ?";
    try {
        const result = await conn.execute(query, [dni]);
        if(result.length === 0) return console.log('El DNI Profesional ' + dni + ' no existe');
        console.log(result);
        const [rows] = result;
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function getProfesionalNombre(profesional) {//Buscar por nombre
    const query = "SELECT * FROM profesionales WHERE nombre = ?";
    try {
        const result = await conn.execute(query, [profesional]);
        if(result.length === 0) return console.log('El Profesional ' + profesional + ' no existe');
        console.log(result);
        const [rows] = result;
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function desactivarProfesional(id) {
    const query = "UPDATE profesionales SET estado = 0 WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function activarProfesional(id) {
    const query = "UPDATE profesionales SET estado = 1 WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function modificarProfesional(profesional) {
    const { id, nombre, apellido, dni, email, password, profesion, especialidad, matricula, idRefeps, estado } = profesional;
    const query = "UPDATE profesionales SET nombre = ?, apellido = ?, dni = ?, email = ?, profesion = ?, especialidad = ?, matricula = ? WHERE id = ?";
    try {
        const [result] = await conn.execute(query, [nombre, apellido, dni, email, profesion, especialidad, matricula, id]);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}