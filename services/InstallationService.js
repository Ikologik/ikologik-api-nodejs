const IkologikApiCredentials = require("../IkologikApiCredentials");
const AbstractIkologikCustomerService = require("./AbstractIkologikCustomerService");
const IkologikException = require("../IkologikException");
const axios = require("axios");

const jwtHelper = new IkologikApiCredentials();

class InstallationService extends AbstractIkologikCustomerService{
    constructor(jwtHelper) {
        super(jwtHelper);
    }

    // Crud actions
    getUrl(customer, installation, dataImportType){
        return `${this.jwtHelper.getUrl()}/api/v2/customer/${customer}/installation/`;
    }

    async search(customer, search){
        try{
            const response = await axios.post(`${this.getUrl(customer)}/search`, search, {headers: await this.getHeaders()});
            if (response.status === 200){
                const result = response.data;
                return result;
            } else{
                return new IkologikException ("Request returned status" + toString(response.status));
            }
        }catch (e) {
            return new IkologikException("Error while searching for a dataimport");
        }
    }
}

module.exports = InstallationService;