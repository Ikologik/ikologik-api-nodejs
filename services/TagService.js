const IkologikApiCredentials = require("../IkologikApiCredentials");
const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const IkologikException = require("../IkologikException");
const axios = require("axios");

const jwtHelper = new IkologikApiCredentials();

class TagService extends  AbstractIkologikInstallationService{
    constructor(jwtHelper) {
        super(jwtHelper);
    }

    // CRUD actions
    getUrl(customer, installation, reportType){
        return `${this.jwtHelper.getUrl()}/api/v2/customer/${customer}/installation/${installation}/tag`;
    }

    async create(customer, installation, obj){
        try{
            const response = await axios.post(this.getUrl(customer, installation, reportType), obj, {headers: await this.getHeaders()});
            if (response.status === 201){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (error) {
            return new IkologikException("Error while creating a tag");
        }
    }
}

module.exports = TagService;