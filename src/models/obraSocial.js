class ObraSocial {

    constructor() {
        this.id = null;
        this.plan = null;
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
    setPlan(plan){
        this.plan= plan;
    }
}
export default ObraSocial;