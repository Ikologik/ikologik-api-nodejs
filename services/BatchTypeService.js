const IkologikApiCredentials = require("../IkologikApiCredentials");
const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const Search = require("../domain/Search");
const axios = require("axios");
const IkologikException = require("../IkologikException");

const jwtHelper = new IkologikApiCredentials();

class BatchTypeService extends  AbstractIkologikInstallationService{
    constructor(jwtHelper) {
        super(jwtHelper);
    }

    // CRUD actions
    getUrl(customer, installation){
        return `${this.jwtHelper.getUrl()}/api/v2/customer/${customer}/installation/${installation}/batchtype`;
    }

    async getByName(customer, installation, name ){
        const search = new Search();
        search.addFilter("name", "EQ", [name]);
        search.addOrder("name", "ASC");

        // Query
        const result = await this.search(customer, installation, search);
        if (result && result.length === 1 ){
            return result[0];
        }else{
            return new IkologikException("Error while querying a batch by name");
        }
    }
}

module.exports = BatchTypeService;