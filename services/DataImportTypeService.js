const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const Search = require("../domain/Search");

class DataImportTypeService extends AbstractIkologikInstallationService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrlByCustomerAndInstallation(customer, installation) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/dataimporttype`;
	}

	async getByCustomerAndInstallationAndName(customer, installation, name) {
		// Prepare filter
		const search = new Search();
		search.addFilter("name", "EQ", [name]);
		search.addOrder("name", "ASC");

		// Query
		const result = await this.searchByCustomerAndInstallation(customer, installation, search);
		if (result && result.length === 1) {
			return result[0];
		} else {
			return null;
		}
	}

}

module.exports = DataImportTypeService;
