const IkologikApiCredentials = require("../IkologikApiCredentials");
const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const Search = require("../domain/Search");
const axios = require("axios");
const IkologikException = require("../IkologikException");

const jwtHelper = new IkologikApiCredentials();

class BatchTraceService extends  AbstractIkologikInstallationService{
    constructor(jwtHelper) {
        super(jwtHelper);
    }

    // CRUD actions
    getUrl(customer, installation,batch){
        return `${this.jwtHelper.getUrl()}/api/v2/customer/${customer}/installation/${installation}/batch/${batch}/batchtrace`;
    }
    async getById(customer, installation, batch, id ){
        try{
            const response = await axios.get(`${this.getUrl(customer, installation, batch)}/${id}`, { headers : await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        } catch (e) {
            return new IkologikException(`Error while searching the batchTrace with id ${id}`);
        }
    }

    async list(customer, installation, batch){
        try{
            const response = await axios.get(this.getUrl(customer, installation, batch), { headers : await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        } catch (e) {
            return new IkologikException("Error while listing  the batchTrace");
        }
    }

    async search(customer, installation, batch, search){
        try{
            const response = await axios.post(`${this.getUrl(customer, installation, batch)}/search`, search, {headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while searching for a batchTrace");
        }
    }

    async create(customer, installation, batch, obj){
        try{
            const response = await axios.post(this.getUrl(customer, installation, batch), obj, {headers: await this.getHeaders()});
            if (response.status === 201){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (error) {
            return new IkologikException("Error while creating a batchTrace");
        }
    }

    async update(customer, installation, batch, id, obj){
        try{
            const response = await axios.put(`${this.getUrl(customer, installation, batch)}/${id}`, obj, {headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException(`Error while updating a batchTrace with id: ${id}`);
        }
    }

    async delete(customer,installation, batch, id){
        try{
            const response = await axios.delete(`${this.getUrl(customer, installation, batch)}/${id}`,  {headers: await this.getHeaders()});
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

module.exports = BatchTraceService;