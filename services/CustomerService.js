const IkologikApiCredentials = require("../IkologikApiCredentials");
const Search = require("../domain/Search");
const AbstractIkologikService = require("./AbstractIkologikService");

const jwtHelper = new IkologikApiCredentials();

class CustomerService extends  AbstractIkologikService{
    constructor(jwtHelper) {
        super(jwtHelper);
    }

    // CRUD actions
    getUrl(){
        return `${this.jwtHelper.getUrl()}/api/v2/customer`;
    }

    getByName(customer, installation, name ){
        const search = new Search();
        search.addFilter("name", "EQ", [name]);
        search.addOrder("name", "ASC");

        // Query
        const result = this.search(customer, installation, search);
        if (result && result.length == 1 ){
            return result[0];
        }else{
            return null;
        }
    }
}

module.exports = CustomerService;