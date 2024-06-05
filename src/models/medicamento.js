class Medicamento {

    constructor() {
        this.id = null;
        this.nombre = null;
        this.concentracion = null;
        this.formaFarm = null;
        this.presentacion = null;
        this.estado = null;
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
export default Medicamento;