const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const axios = require("axios");
const IkologikException = require("../IkologikException");
const Search = require("../domain/Search");

class DataImportService extends AbstractIkologikInstallationService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Crud actions

	getUrlByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/dataimporttype/${dataImportType}/dataimport`;
	}

	async listByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType) {
		try {
			const url = this.getUrlByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType);
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while listing  the dataimport");
		}
	}

	async getByCustomerAndInstallationAndDataImportTypeAndId(customer, installation, dataImportType, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType)}/${id}`;
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while getting dataimport with id: " + id);
		}
	}

	async searchByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType, search) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType)}/search`;
			const response = await axios.post(url, search, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while searching for a dataimport");
		}
	}

	async createByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType, obj) {
		try {
			const url = this.getUrlByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType);
			const response = await axios.post(url, obj, {headers: await this.getHeaders()});
			if (response.status === 201) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while creating a dataimport");
		}
	}

	async updateByCustomerAndInstallationAndDataImportTypeAndId(customer, installation, dataImportType, id, obj) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType)}/${id}`;
			const response = await axios.put(url, obj, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating a dataimport");
		}
	}

	async deleteByCustomerAndInstallationAndDataImportTypeAndId(customer, installation, dataImportType, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType)}/${id}`;
			const response = await axios.delete(url, {headers: await this.getHeaders()});
			if (response.status === 204) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while deleting a dataimport");
		}
	}

	async updateStatusByCustomerAndInstallationAndDataImportTypeAndId(customer, installation, dataImportType, id, status) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType)}/${id}/status`;
			const response = await axios.put(url, status, {headers: await this.getHeaders({'Content-Type': 'text/plain'})});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while getting the update status for dataimport with id: " + id);
		}
	}

	async updateErrorByCustomerAndInstallationAndDataImportTypeAndId(customer, installation, dataImportType, id, error) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType)}/${id}/error`;
			const response = await axios.put(url, error, {headers: await this.getHeaders({'Content-Type': 'text/plain'})});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while getting the update error for dataimport with id: " + id);
		}
	}

	async getByCustomerAndInstallationAndDataImportTypeAndName(customer, installation, dataImportType, name) {
		// Prepare search
		const search = new Search();
		search.addFilter("name", "EQ", [name]);
		search.addOrder("name", "ASC");

		// Query
		const result = await this.searchByCustomerAndInstallationAndDataImportType(customer, installation, dataImportType, search);
		if (result && result.length === 1) {
			return result[0];
		} else {
			return null;
		}
	}

}

module.exports = DataImportService;
