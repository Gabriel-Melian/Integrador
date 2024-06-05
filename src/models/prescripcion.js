class Prescripcion {

    constructor() {
        this.id = null;
        this.idPrestacion = null;
        this.idCliente = null;
        this.idLista = null;
        this.fechaPrestacion = null;
        this.diagnostico = null;
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
    
}
export default Prescripcion;