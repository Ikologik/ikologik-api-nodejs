const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const axios = require("axios");
const IkologikException = require("../IkologikException");

class ReportService extends AbstractIkologikInstallationService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrlByCustomerAndInstallationAndReportType(customer, installation, reportType) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/reporttype/${reportType}/report`;
	}

	async getByCustomerAndInstallationAndReportTypeAndId(customer, installation, reportType, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndReportType(customer, installation, reportType)}/${id}`;
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while getting by customer, installation, report type and id");
		}
	}

	async listByCustomerAndInstallationAndReportType(customer, installation, reportType) {
		try {
			const url = this.getUrlByCustomerAndInstallationAndReportType(customer, installation, reportType);
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while listing by customer, installation and report type");
		}
	}

	async searchByCustomerAndInstallationAndReportType(customer, installation, reportType, search) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndReportType(customer, installation, reportType)}/search`;
			const response = await axios.post(url, search, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while searching by customer, installation and report type");
		}
	}

	async buildByCustomerAndInstallationAndReportType(customer, installation, reportType) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndReportType(customer, installation, reportType)}/build`;
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating by customer, installation, report type and id");
		}
	}

	async createByCustomerAndInstallationAndReportType(customer, installation, reportType, obj) {
		try {
			const url = this.getUrlByCustomerAndInstallationAndReportType(customer, installation, reportType);
			const response = await axios.post(url, obj, {headers: await this.getHeaders()});
			if (response.status === 201) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while creating by customer, installation and report type");
		}
	}

	async updateByCustomerAndInstallationAndReportTypeAndId(customer, installation, reportType, id, obj) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndReportType(customer, installation, reportType)}/${id}`;
			const response = await axios.post(url, obj, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating by customer, installation, report type and id");
		}
	}

	async deleteByCustomerAndInstallationAndReportTypeAndId(customer, installation, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndReportType(customer, installation, reportType)}/${id}`;
			const response = await axios.delete(url, {headers: await this.getHeaders()});
			if (response.status === 204) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while deleting by customer, installation, report type and id");
		}
	}

	async updateStatusByCustomerAndInstallationAndReportTypeAndId(customer, installation, reportType, id, status) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndReportType(customer, installation, reportType)}/${id}/status`;
			const response = await axios.put(url, status, {headers: await this.getHeaders({'Content-Type': 'text/plain'})});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating status by customer, installation, report type and id");
		}
	}

	async uploadByCustomerAndInstallationAndReportTypeAndId(customer, installation, reportType, id) {
		try {
			const url = `${this.getUrlByCustomerAndInstallationAndReportType(customer, installation, reportType)}/${id}/upload`;
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while uploading by customer, installation, report type and id");
		}
	}

}

module.exports = ReportService;
