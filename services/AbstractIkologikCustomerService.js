const axios = require('axios');
const AbstractIkologikService = require("./AbstractIkologikService");
const IkologikException = require("../IkologikException");

class AbstractIkologikCustomerService extends AbstractIkologikService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
		this.jwtHelper = jwtHelper;
	}

	// Actions

	getUrlByCustomer(customer) {
	}

	async getByCustomerAndId(customer, id) {
		try {
			const url = `${this.getUrlByCustomer(customer)}/${id}`;
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while getting by customer and id");
		}
	}

	async listByCustomer(customer) {
		try {
			const url = this.getUrlByCustomer(customer);
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while listing by customer");
		}
	}

	async searchByCustomer(customer, search) {
		try {
			const url = `${this.getUrlByCustomer(customer)}/search`;
			const response = await axios.post(url, search, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while searching by customer");
		}
	}

	async createByCustomer(customer, obj) {
		try {
			const url = this.getUrlByCustomer(customer);
			const response = await axios.post(url, obj, {headers: await this.getHeaders()});
			if (response.status === 201) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while creating by customer");
		}
	}

	async updateByCustomerAndId(customer, id, obj) {
		try {
			const url = `${this.getUrlByCustomer(customer)}/${id}`;
			const response = await axios.put(url, obj, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating by customer and id");
		}
	}

	async deleteByCustomerAndId(customer, id) {
		try {
			const url = `${this.getUrlByCustomer(customer)}/${id}`;
			const response = await axios.delete(url, {headers: await this.getHeaders()});
			if (response.status === 204) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while deleting by customer and id");
		}
	}

}

module.exports = AbstractIkologikCustomerService;
