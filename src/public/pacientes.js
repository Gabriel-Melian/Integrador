async function cargarPacientes () {
    const respuesta = await fetch("/pacientes");
    const pacientes = await respuesta.json();
    console.log("Se cargaron los pacientes correctamente!");
    return pacientes;
}

cargarPacientes();

async function crearTabla() {
    const pacientes = await cargarPacientes();
    console.log(pacientes);
    for (const paciente of pacientes) {
        console.log(paciente);
    }
}