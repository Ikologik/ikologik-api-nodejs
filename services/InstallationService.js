const AbstractIkologikCustomerService = require("./AbstractIkologikCustomerService");

class InstallationService extends AbstractIkologikCustomerService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrlByCustomer(customer) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/`;
	}

}

module.exports = InstallationService;
