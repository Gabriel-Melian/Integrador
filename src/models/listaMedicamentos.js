class ListaMedicamentos {

    constructor() {
        this.id = null;
        this.idMedicamento = null;
        this.idPrescripcion = null;
        this.dosis = null;
        this.duracion = null;
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
    
}
export default ListaMedicamentos;