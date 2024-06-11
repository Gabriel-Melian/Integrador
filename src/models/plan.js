class Plan {

    constructor() {
        this.id = null;
        this.idObra = null;
        this.nombre = null;
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
export default Plan;