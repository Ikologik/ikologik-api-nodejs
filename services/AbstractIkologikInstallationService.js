const axios = require("axios");
const AbstractIkologikCustomerService = require("./AbstractIkologikCustomerService");
const IkologikException = require("../IkologikException");

class AbstractIkologikInstallationService extends AbstractIkologikCustomerService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
		this.jwtHelper = jwtHelper;
	}

	// Actions

	getUrlByCustomerAndInstallation(customer, installation) {
	}

	async getByCustomerAndInstallationAndId(customer, installation, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallation(customer, installation)}/${id}`;
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while getting by customer, installation and id");
		}
	}

	async listByCustomerAndInstallation(customer, installation) {
		try {
			const url = this.getUrlByCustomerAndInstallation(customer, installation);
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while listing by customer and installation");
		}
	}

	async searchByCustomerAndInstallation(customer, installation, search) {
		try {
			const url = `${this.getUrlByCustomerAndInstallation(customer, installation)}/search`;
			const response = await axios.post(url, search, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while searching by customer and installation");
		}
	}

	async createByCustomerAndInstallation(customer, installation, obj) {
		try {
			const url = this.getUrlByCustomerAndInstallation(customer, installation);
			const response = await axios.post(url, obj, {headers: await this.getHeaders()});
			if (response.status === 201) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while creating by customer and installation");
		}
	}

	async updateByCustomerAndInstallationAndId(customer, installation, id, obj) {
		try {
			const url = `${this.getUrlByCustomerAndInstallation(customer, installation)}/${id}`;
			const response = await axios.put(url, obj, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating by customer, installation and id");
		}
	}

	async deleteByCustomerAndInstallationAndId(customer, installation, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallation(customer, installation)}/${id}`;
			const response = await axios.delete(url, {headers: await this.getHeaders()});
			if (response.status === 204) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while deleting by customer, installation and id");
		}
	}

}

module.exports = AbstractIkologikInstallationService;
