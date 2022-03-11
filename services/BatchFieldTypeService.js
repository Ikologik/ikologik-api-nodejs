const IkologikApiCredentials = require("../IkologikApiCredentials");
const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const Search = require("../domain/Search");
const axios = require("axios");
const IkologikException = require("../IkologikException");

const jwtHelper = new IkologikApiCredentials();

class BatchFieldTypeService extends  AbstractIkologikInstallationService{
    constructor(jwtHelper) {
        super(jwtHelper);
    }

    // CRUD actions
    getUrl(customer, installation, batchType){
        return `${this.jwtHelper.getUrl()}/api/v2/customer/${customer}/installation/${installation}/batchtype/${batchType}/fieldtype`;
    }

    async getById(customer, installation, batchType, id ){
        try{
            const response = await axios.get(`${this.getUrl(customer, installation, batchType)}/${id}`, { headers : await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        } catch (e) {
            return new IkologikException("Error while searching the batchTypeFieldID");
        }
    }

    async list(customer, installation, batchType){
        try{
            const response = await axios.get(this.getUrl(customer, installation, batchType), { headers : await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        } catch (e) {
            return new IkologikException("Error while listing  the batchTypefield");
        }
    }

    async search(customer, installation, batchType, search){
        try{
            const response = await axios.post(`${this.getUrl(customer, installation, batchType)}/search`, search, {headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while searching for a batchTypefield");
        }
    }

    async create(customer, installation, batchType, obj){
        try{
            const response = await axios.post(this.getUrl(customer, installation, batchType), obj, {headers: await this.getHeaders()});
            if (response.status === 201){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (error) {
            return new IkologikException("Error while creating a batchTypefield");
        }
    }

    async update(customer, installation, batchType, obj){
        try{
            const response = await axios.put(`${this.getUrl(customer, installation, batchType)}/${obj.id}`, obj, {headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while updating a batchTypefield");
        }
    }

    async delete(customer,installation, batchType, id){
        try{
            const response = await axios.delete(`${this.getUrl(customer, installation, batchType)}/${id}`,  {headers: await this.getHeaders()});
            if (response.status === 204){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while deleting a batchTypefield");
        }
    }
}

module.exports = BatchFieldTypeService;