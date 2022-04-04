const axios = require("axios");
const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const IkologikException = require("../IkologikException");

class BatchTraceService extends AbstractIkologikInstallationService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrlByCustomerAndInstallationAndBatch(customer, installation, batch) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/batch/${batch}/batchtrace`;
	}

	async getByCustomerAndInstallationAndBatchAndId(customer, installation, batch, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndBatch(customer, installation, batch)}/${id}`;
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while getting by customer, installation, batch and id");
		}
	}

	async listByCustomerAndInstallationAndBatch(customer, installation, batch) {
		try {
			const url = this.getUrlByCustomerAndInstallationAndBatch(customer, installation, batch);
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while listing by customer, installation and batch");
		}
	}

	async searchByCustomerAndInstallationAndBatch(customer, installation, batch, search) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndBatch(customer, installation, batch)}/search`;
			const response = await axios.post(url, search, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while searching by customer, installation and batch");
		}
	}

	async createByCustomerAndInstallationAndBatch(customer, installation, batch, obj) {
		try {
			const url = this.getUrlByCustomerAndInstallationAndBatch(customer, installation, batch);
			const response = await axios.post(url, obj, {headers: await this.getHeaders()});
			if (response.status === 201) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while creating by customer, installation and batch");
		}
	}

	async updateByCustomerAndInstallationAndBatchAndId(customer, installation, batch, id, obj) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndBatch(customer, installation, batch)}/${id}`;
			const response = await axios.put(url, obj, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating by customer, installation and batch");
		}
	}

	async deleteByCustomerAndInstallationAndBatchAndId(customer, installation, batch, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndBatch(customer, installation, batch)}/${id}`;
			const response = await axios.delete(url, {headers: await this.getHeaders()});
			if (response.status === 204) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while deleting by customer, installation, batch and id");
		}
	}

}

module.exports = BatchTraceService;
