const AbstractIkologikCustomerService = require("./AbstractIkologikCustomerService");
const Search = require("../domain/Search");

class DashboardWidgetTypeService extends AbstractIkologikCustomerService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrl() {
		return `${this.jwtHelper.url}/api/v2/dashboardwidgettype`;
	}

	getUrlByCustomer(customer) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/dashboardwidgettype`;
	}

	async getByName(name) {
		// Prepare filter
		const search = new Search();
		search.addFilter("name", "EQ", [name]);
		search.addOrder("name", "ASC");
		search.setPagination(0, 1);

		// Query
		const result = await this.search(search);
		if (result && result.length === 1) {
			return result[0];
		} else {
			return null;
		}
	}

	async getByCustomerAndName(customer, name) {
		// Prepare filter
		const search = new Search();
		search.addFilter("name", "EQ", [name]);
		search.addOrder("name", "ASC");
		search.setPagination(0, 1);

		// Query
		const result = await this.searchByCustomer(customer, search);
		if (result && result.length === 1) {
			return result[0];
		} else {
			return null;
		}
	}

	async getByType(type) {
		// Prepare filter
		const search = new Search();
		search.addFilter("name", "EQ", [type]);
		search.addOrder("name", "ASC");
		search.setPagination(0, 1);

		// Query
		const result = await this.search(search);
		if (result && result.length === 1) {
			return result[0];
		} else {
			return null;
		}
	}

	async getByCustomerAndType(customer, type) {
		// Prepare filter
		const search = new Search();
		search.addFilter("name", "EQ", [type]);
		search.addOrder("name", "ASC");
		search.setPagination(0, 1);

		// Query
		const result = await this.searchByCustomer(customer, search);
		if (result && result.length === 1) {
			return result[0];
		} else {
			return null;
		}
	}

}

module.exports = DashboardWidgetTypeService;
