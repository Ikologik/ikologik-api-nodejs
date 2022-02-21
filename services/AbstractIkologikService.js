const axios = require('axios');
const IkologikException = require("../IkologikException");
const IkologikApiCredentials = require("../IkologikApiCredentials");

const jwtHelper = new IkologikApiCredentials();

class AbstractIkologikService{
    constructor(jwtHelper) {
        this.jwtHelper = jwtHelper;
    }

    // Crud actions
    async getHeaders(default_headers=null) {
        let headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${await this.jwtHelper.getJwt()}`
        }
        if (default_headers !== null) {
            headers = {...headers, ...default_headers};
        }
        return headers;
    }
    // getHeaders(default_headers=null){
    //     return new Promise ((resolve, reject) => {
    //         this.jwtHelper.getJwt()
    //             .then((jwt) => {
    //                 let headers = {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${jwt}`
    //                 }
    //                 if (default_headers !== null){
    //                     headers = {...headers, ...default_headers};
    //                 }
    //                 resolve(headers);
    //             }).catch(reject);
    //     });
    // }
    getUrl(){}

    async getById(id){
        try{
            const response = await axios.get(this.getUrl()+`/${id}`, { headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else {
                return new IkologikException("Request returned status" + toString(response.status));
            }
        } catch (e) {
            return new IkologikException("Error while getting by id");
        }
    }

    async list() {
        try{
            const response = await axios.get(this.getUrl(), { headers : await this.getHeaders()});
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
    // list() {
    //     return new Promise((resolve, reject) => {
    //         this.getHeaders()
    //             .then((headers) => {
    //                 axios.get(this.getUrl(), {headers})
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

    async search(search){
        try{
            const response = await axios.post(this.getUrl(), search, {headers: await this.getHeaders()})
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while searching");
        }
    }

    async create(obj){
        try{
            const response = await axios.post(this.getUrl(), obj, {headers: await this.getHeaders()});
            if (response.status === 201){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (error) {
            return new IkologikException("Error while creating");
        }
    }

    async update(id, obj){
        try{
            const response = await axios.put(this.getUrl()+`/${id}`, obj, {headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while updating");
        }
    }

    async delete(id){
        try{
            const response = await axios.delete(`${this.getUrl()}/${id}`,  {headers: await this.getHeaders()});
            if (response.status === 204){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while deleting");
        }
    }


}

module.exports = AbstractIkologikService;