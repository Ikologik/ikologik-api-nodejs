const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const Search = require("../domain/Search");

class DashboardService extends AbstractIkologikInstallationService {

	// Constructors

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrlByCustomerAndInstallation(customer, installation) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/dashboard`;
	}

	async getByName(customer, installation, name) {
		const search = new Search();
		search.addFilter("name", "EQ", [name]);
		search.addOrder("name", "ASC");
		search.setPagination(0, 1);

		// Query
		const result = await this.searchByCustomerAndInstallation(customer, installation, search);
		if (result && result.length === 1) {
			return result[0];
		} else {
			return null;
		}
	}

}

module.exports = DashboardService;
