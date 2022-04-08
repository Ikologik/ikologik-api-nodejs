const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const Search = require("../domain/Search");
const axios = require("axios");

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

	async updateStatusByCustomerAndInstallationAndId(customer, installation, batch, status){
		try{
			const url = `${this.getUrlByCustomerAndInstallation(customer, installation)}/${batch}/status`;
			const response = await axios.put(url, status, {headers: await this.getHeaders({'Content-Type': 'text/plain'})});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status" + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating the status of batch wit id" + batch);
		}
	}
}

module.exports = BatchService;
