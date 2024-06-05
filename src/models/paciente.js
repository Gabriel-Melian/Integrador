class Paciente {

    constructor() {
        this.id = null;
        this.nombre = null;
        this.apellido = null;
        this.dni = null;
        this.fechaNac = null;
        this.email = null;
        this.sexo = null;
        this.idObraSocial = null;
    }
    validateModel(model) {
        const keys = Object.keys(model);
        for (let key of keys) {
            if (key !== 'id' && (model[key] === null || model[key] === '')) {
                return false;
            }
        }
        return true;
    }
    setNombre(nombre){
        this.nombre= nombre;
    }
}
export default Paciente;