const AbstractIkologikService = require("./AbstractIkologikService");
const Search = require("../domain/Search");

class CustomerService extends AbstractIkologikService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrl() {
		return `${this.jwtHelper.url}/api/v2/customer`;
	}

	async getByName(name) {
		// Prepare filter
		const search = new Search();
		search.addFilter("name", "EQ", [name]);
		search.addOrder("name", "ASC");

		// Query
		const result = await this.search(search);
		if (result && result.length === 1) {
			return result[0];
		} else {
			return null;
		}
	}

}

module.exports = CustomerService;
