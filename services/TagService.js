const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");

class TagService extends AbstractIkologikInstallationService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrlByCustomerAndInstallation(customer, installation) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/tag`;
	}

}

module.exports = TagService;
