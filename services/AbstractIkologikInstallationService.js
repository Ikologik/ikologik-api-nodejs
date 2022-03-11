const AbstractIkologikCustomerService = require("./AbstractIkologikCustomerService");
const IkologikApiCredentials = require("../IkologikApiCredentials");
const IkologikException = require("../IkologikException");
const axios = require("axios");


const jwtHelper = new IkologikApiCredentials();

class AbstractIkologikInstallationService extends AbstractIkologikCustomerService{
    constructor(jwtHelper) {
        super(jwtHelper);
        this.jwtHelper = jwtHelper;
    }

    // Crud actions
    getUrl(customer, installation){}

    async getById(customer,installation, id){
        try{
            const response = await axios.get(this.getUrl(customer, installation)+`/${id}`, { headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        } catch (e) {
            return new IkologikException("Error while getting installation with id: " +id);
        }
    }

    async list(customer, installation){
        try{
            const response = await axios.get(this.getUrl(customer, installation), { headers : await this.getHeaders()})
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        } catch (e) {
            return new IkologikException("Error while querying a list");
        }
    }

    async search(customer, installation, search){
        try{
            const response = await axios.post(`${this.getUrl(customer, installation)}/search`, search, {headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while searching for an installation");
        }
    }

    async create(customer, installation, obj){
        try{
            const response = await axios.post(this.getUrl(customer, installation), obj, {headers: await this.getHeaders()});
            if (response.status === 201){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while creating an installation");
        }
    }

    async update(customer, installation, id, obj){
        try{
            const response = await axios.put(`${this.getUrl(customer, installation)}/${id}`, obj, {headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while updating an installation");
        }
    }

    async delete(customer,installation, id){
        try{
            const response = await axios.delete(`${this.getUrl(customer, installation)}/${id}`,  {headers: await this.getHeaders()});
            if (response.status === 204){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while deleting an installation");
        }
    }
}

module.exports = AbstractIkologikInstallationService;