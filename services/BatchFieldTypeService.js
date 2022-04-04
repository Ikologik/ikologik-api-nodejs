const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const axios = require("axios");
const IkologikException = require("../IkologikException");

class BatchFieldTypeService extends AbstractIkologikInstallationService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrlByCustomerAndInstallationAndBatchType(customer, installation, batchType) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/batchtype/${batchType}/fieldtype`;
	}

	async getByCustomerAndInstallationAndBatchTypeAndId(customer, installation, batchType, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndBatchType(customer, installation, batchType)}/${id}`;
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while getting by customer, installation, batch type and id");
		}
	}

	async listByCustomerAndInstallationAndBatchType(customer, installation, batchType) {
		try {
			const url = this.getUrlByCustomerAndInstallationAndBatchType(customer, installation, batchType);
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while listing by customer, installation and batch type");
		}
	}

	async searchByCustomerAndInstallationAndBatchType(customer, installation, batchType, search) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndBatchType(customer, installation, batchType)}/search`;
			const response = await axios.post(url, search, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while searching by customer, installation and batch type");
		}
	}

	async createByCustomerAndInstallationAndBatchType(customer, installation, batchType, obj) {
		try {
			const url = this.getUrlByCustomerAndInstallationAndBatchType(customer, installation, batchType);
			const response = await axios.post(url, obj, {headers: await this.getHeaders()});
			if (response.status === 201) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while creating by customer, installation and batch type");
		}
	}

	async updateByCustomerAndInstallationAndBatchTypeAndId(customer, installation, batchType, id, obj) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndBatchType(customer, installation, batchType)}/${id}`;
			const response = await axios.put(url, obj, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while listing by customer, installation, batch type and id");
		}
	}

	async deleteByCustomerAndInstallationAndBatchTypeAndId(customer, installation, batchType, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndBatchType(customer, installation, batchType)}/${id}`;
			const response = await axios.delete(url, {headers: await this.getHeaders()});
			if (response.status === 204) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while deleting by customer, installation, batch type and id");
		}
	}

}

module.exports = BatchFieldTypeService;
