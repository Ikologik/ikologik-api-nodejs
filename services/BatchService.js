const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const Search = require("../domain/Search");

class BatchService extends AbstractIkologikInstallationService {

	// Constructors

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrlByCustomerAndInstallation(customer, installation) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/batch`;
	}

	async getByCustomerAndInstallationAndBatchTypeAndCode(customer, installation, batchType, code) {
		// Prepare filter
		const search = new Search();
		search.addMultipleFilters([["batchType", "EQ", [batchType]], ["code", "EQ", [code]]]);
		search.addOrder("batchType", "ASC");

		// Query
		const result = await this.searchByCustomerAndInstallation(customer, installation, search);
		if (result && result.length === 1) {
			return result[0];
		} else {
			return null;
		}
	}

}

module.exports = BatchService;
