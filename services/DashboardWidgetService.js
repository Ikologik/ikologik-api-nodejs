const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const axios = require("axios");
const IkologikException = require("../IkologikException");

class DashboardWidgetService extends AbstractIkologikInstallationService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
		this.jwtHelper = jwtHelper;
	}

	// Actions

	getUrlByCustomerAndInstallationAndDashboard(customer, installation, dashboard) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/dashboard/${dashboard}/widget`;
	}

	async list(customer, installation, dashboard) {
		try {
			const url = this.getUrlByCustomerAndInstallationAndDashboard(customer, installation, dashboard);
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while listing by customer, installation and dashboard");
		}
	}

	async search(customer, installation, dashboard, search) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndDashboard(customer, installation, dashboard)}/search`;
			const response = await axios.post(url, search, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while searching by customer, installation and dashboard");
		}
	}

	async create(customer, installation, dashboard, obj) {
		try {
			const url = this.getUrlByCustomerAndInstallationAndDashboard(customer, installation, dashboard);
			const response = await axios.post(url, obj, {headers: await this.getHeaders()});
			if (response.status === 201) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while creating by customer, installation and dashboard");
		}
	}

	async update(customer, installation, dashboard, id, obj) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndDashboard(customer, installation, dashboard)}/${id}`;
			const response = await axios.put(url, obj, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating by customer, installation, dashboard and id");
		}
	}

	async delete(customer, installation, dashboard, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndDashboard(customer, installation, dashboard)}/${id}`;
			const response = await axios.delete(url, {headers: await this.getHeaders()});
			if (response.status === 204) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while deleting by customer, installation, dashboard and id");
		}
	}

}

module.exports = DashboardWidgetService;
