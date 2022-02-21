const axios = require('axios');
const IkologikApiCredentials = require("../IkologikApiCredentials");
const AbstractIkologikService = require("./AbstractIkologikService");
const IkologikException = require("../IkologikException");

const jwtHelper = new IkologikApiCredentials();

class AbstractIkologikCustomerService extends AbstractIkologikService{
    constructor(jwtHelper) {
        super(jwtHelper);
        this.jwtHelper = jwtHelper;
    }

    // Crud actions
    getUrl(customer){}

    async getById(customer, id){
        try{
            const response = await axios.get(this.getUrl(customer)+`/${id}`, { headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        } catch (e) {
            return new IkologikException("Error while getting customer with id: " +id);
        }
    }
    async list(customer) {
        try {
            const response = await axios.get(this.getUrl(customer), {headers: await this.getHeaders()});
            if (response.status === 200) {
                const result = response.data;
                return result;
            } else {
                return new IkologikException("Request returned status" + toString(response.status));
            }
        } catch (e) {
            return new IkologikException("Error while listing customer");
        }
    }
    // list(customer) {
    //     return new Promise((resolve, reject) => {
    //         this.getHeaders()
    //             .then((headers) => {
    //                 axios.get(this.getUrl(customer), {headers})
    //                     .then((response) => {
    //                         if (response.status === 200) {
    //                             resolve(response.data);
    //                         } else {
    //                             reject('Request returned status' + toString(response.status));
    //                         }
    //                     }).catch(reject);
    //             }).catch(reject);
    //     });
    // }


    async search(customer, search){
        try{
            const response = axios.post(this.getUrl(customer), search, {headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while searching for a customer");
        }
    }

    async create(customer, obj){
        try{
            const response = await axios.post(this.getUrl(customer), obj, {headers: await this.getHeaders()});
            if (response.status === 201){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (error) {
            return new IkologikException("Error while creating a customer");
        }
    }

    async update(customer, id, obj){
        try{
            const response = await axios.put(`${this.getUrl(customer)}/${id}`, obj, {headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while updating a customer");
        }
    }

    async delete(customer, id){
        try{
            const response = await axios.delete(`${this.getUrl(customer)}/${id}`,  {headers: await this.getHeaders()});
            if (response.status === 204){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while deleting a customer");
        }
    }
}

module.exports = AbstractIkologikCustomerService;