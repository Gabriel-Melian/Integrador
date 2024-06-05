class Prestacion {

    constructor() {
        this.id = null;
        this.estudio = null;
        this.parteCuerpo = null;
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
export default Prestacion;