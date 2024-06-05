class Profesional {

    constructor() {
        this.id = null;
        this.nombre = null;
        this.apellido = null;
        this.dni = null;
        this.email = null;
        this.password = null;
        this.profesion = null;
        this.especialidad = null;
        this.matricula = null;
        this.estado = 1;
        this.matricula = null;
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
export default Profesional;