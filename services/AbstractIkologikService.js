const axios = require('axios');
const IkologikException = require("../IkologikException");

class AbstractIkologikService {

	// Constructor

	constructor(jwtHelper) {
		this.jwtHelper = jwtHelper;
	}

	// Actions

	async getHeaders(default_headers = null) {
		let headers = {
			'Content-Type': 'application/json', 'Authorization': `Bearer ${await this.jwtHelper.getJwt()}`
		}
		if (default_headers !== null) {
			headers = {...headers, ...default_headers};
		}
		return headers;
	}

	getUrl() {
	}

	async getById(id) {
		try {
			const url = `${this.getUrl()}/${id}`;
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while getting by id");
		}
	}

	async list() {
		try {
			const url = this.getUrl();
			const response = await axios.get(url, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while listing");
		}
	}

	async search(search) {
		try {
			const url = `${this.getUrl()}/search`;
			const response = await axios.post(url, search, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while searching");
		}
	}

	async create(obj) {
		try {
			const url = this.getUrl();
			const response = await axios.post(url, obj, {headers: await this.getHeaders()});
			if (response.status === 201) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while creating");
		}
	}

	async updateById(id, obj) {
		try {
			const url = `${this.getUrl()}/${id}`;
			const response = await axios.put(url, obj, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating by id");
		}
	}

	async deleteById(id) {
		try {
			const url = `${this.getUrl()}/${id}`;
			const response = await axios.delete(url, {headers: await this.getHeaders()});
			if (response.status === 204) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while deleting by id");
		}
	}

}

module.exports = AbstractIkologikService;
