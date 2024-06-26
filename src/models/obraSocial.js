class ObraSocial {

    constructor() {
        this.id = null;
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
    setPlan(nombre){
        this.nombre = nombre;
    }
}
export default ObraSocial;