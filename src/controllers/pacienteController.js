import Paciente from "../models/paciente.js";
import { conn } from "../models/db.js";

export async function getPacientes(idMedico) {//Mostrar pacientes por medico
    const query = `SELECT p.* FROM prescripcion
                JOIN paciente as p ON prescripcion.idPaciente = p.id
                JOIN profesionales as pr ON prescripcion.idProfesional = pr.id
                WHERE pr.id = ?;`;
    try {
        const result = await conn.execute(query, [idMedico]);
        if(result.length === 0) return [];
        console.log(result);
        const [rows] = result;
        return rows;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function guardarPaciente(paciente) {//Insertar paciente. Desestructuracion.
    //Falta validacion.
    const query = "INSERT INTO paciente (nombre, apellido, dni, fechaNac, email, sexo, idObraSocial) VALUES (?, ?, ?, ?, ?, ?, ?)";
    if (paciente === null) return console.log("Error: Paciente es null");
    const values = [paciente.nombre, paciente.apellido, paciente.dni, paciente.fechaNac, paciente.email, paciente.sexo, paciente.idObraSocial];
    try {
        const result = await conn.execute(query, values);
        paciente.id = result[0].insertId;
        //console.log(paciente.id);
        const pacienteGuardado = await getPaciente(paciente.id);
        return pacienteGuardado;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function getPaciente(id) {//Buscar por id
    const query = "SELECT * FROM paciente WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        if(result.length === 0) return console.log('El ID paciente ' + id + ' no existe');
        console.log(result);
        const [rows] = result;
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function getPacienteDni(dni) {//Buscar por DNI
    const query = "SELECT * FROM paciente WHERE dni = ?";
    try {
        const result = await conn.execute(query, [dni]);
        if(result.length === 0) return console.log('El DNI paciente ' + dni + ' no existe');
        console.log(result);
        const [rows] = result;
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function getPacienteNombre(paciente) {//Buscar por nombre
    const query = "SELECT * FROM paciente WHERE nombre = ?";
    try {
        const result = await conn.execute(query, [paciente]);
        if(result.length === 0) return console.log('El Paciente ' + paciente + ' no existe');
        console.log(result);
        const [rows] = result;
        return rows[0];
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function desactivarPaciente(id) {//Desactivado logico de paciente
    const query = "UPDATE paciente SET estado = 0 WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function activarPaciente(id) {//Activado logico de paciente
    const query = "UPDATE paciente SET estado = 1 WHERE id = ?";
    try {
        const result = await conn.execute(query, [id]);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}

export async function modificarPaciente(paciente) {
    const { id, nombre, apellido, dni, fechaNac, email, sexo, idObraSocial } = paciente;
    const query = "UPDATE paciente SET nombre = ?, apellido = ?, dni = ?, fechaNac = ?, email = ?, sexo = ?, idObraSocial = ? WHERE id = ?";
    try {
        const [result] = await conn.execute(query, [nombre, apellido, dni, fechaNac, email, sexo, idObraSocial, id]);
        console.log(result);
        return result;
    } catch (error) {
        console.error("Error executing query:", error);
        throw error;
    }
}