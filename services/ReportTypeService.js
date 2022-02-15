const IkologikApiCredentials = require("../IkologikApiCredentials");
const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");

const jwtHelper = new IkologikApiCredentials();

class ReportTypeService extends  AbstractIkologikInstallationService{
    constructor(jwtHelper) {
        super(jwtHelper);
    }

    // CRUD actions
    getUrl(customer, installation){
        return `${this.jwtHelper.getUrl()}/api/v2/customer/${customer}/installation/${installation}/reporttype`;
    }

}

module.exports = ReportTypeService;