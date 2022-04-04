const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");

class AlertService extends AbstractIkologikInstallationService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrlByCustomerAndInstallation(customer, installation) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/alert`;
	}

}

module.exports = AlertService;
