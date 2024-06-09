class Usuario {

    constructor() {
        this.id = null;
        this.nombre = null;
        this.apellido = null;
        this.password = null;
        this.email = null;
        this.dni = null;
        this.rol = null;
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
export default Usuario;