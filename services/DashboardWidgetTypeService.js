const IkologikApiCredentials = require("../IkologikApiCredentials");
const AbstractIkologikService = require("./AbstractIkologikService");
const Search = require("../domain/Search");

const jwtHelper = new IkologikApiCredentials();

class DashboardWidgetTypeService extends  AbstractIkologikService{
    constructor(jwtHelper) {
        super(jwtHelper);
    }

    // CRUD actions
    getUrl(){
        return `${this.jwtHelper.getUrl()}/api/v2/dashboardwidgettype`;
    }

    async getByName(name){
        const search = new Search();
        search.addFilter("name", "EQ", [name]);
        search.addOrder("name", "ASC");
        search.setPagination(0,1);

        // Query
        const result = await this.search(search);
        if (result && result.length == 1 ){
            return result[0];
        }else{
            return null;
        }
    }

    async getByType(type){
        const search = new Search();
        search.addFilter("name", "EQ", [type]);
        search.addOrder("name", "ASC");
        search.setPagination(0,1);

        // Query
        const result = await this.search(search);
        if (result && result.length == 1 ){
            return result[0];
        }else{
            return null;
        }
    }
}

module.exports = DashboardWidgetTypeService;