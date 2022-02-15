const IkologikApiCredentials = require("../IkologikApiCredentials");
const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const Search = require("../domain/Search");

const jwtHelper = new IkologikApiCredentials();

class BatchService extends  AbstractIkologikInstallationService{
    constructor(jwtHelper) {
        super(jwtHelper);
    }

    // CRUD actions
    getUrl(customer, installation){
        return `${this.jwtHelper.getUrl()}/api/v2/customer/${customer}/installation/${installation}/batch`;
    }

    getByCode(customer, installation, batchType, code ){
        const search = new Search();
        search.addMultipleFilters([("batchType", "EQ", [batchType]), ("code", "EQ", [code])]);
        search.addOrder("batchType", "ASC");

        // Query
        const result = this.search(customer, installation, search);
        if (result && result.length == 1 ){
            return result[0];
        }else{
            return null;
        }
    }
}

module.exports = BatchService;