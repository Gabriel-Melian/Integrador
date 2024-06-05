class Categoria {

    constructor() {
        this.id = null;
        this.idMedicamento = null;
        this.descripcion = null;
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
export default Categoria;