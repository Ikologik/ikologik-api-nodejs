const https = require('https');
const axios = require('axios');
const IkologikException = require('./IkologikException');

class IkologikApiCredentials {

	// Constructor

	constructor(url, username, password) {
		this.url = url;
		this.username = username;
		this.password = password
		this.jwt = null;
		this.jwtExpirationDate = null;
	}

	// Actions

	async getJwt() {
		try {
			if (this.jwt === null || this.jwtExpirationDate < (new Date().getTime() * 1000)) {
				// Prepare the headers
				const headers = {
					'Content-Type': 'application/json'
				}

				// Prepare the data
				const data = {
					'username': this.username, 'password': this.password
				};

				// Selectively ignore SSL when AXIOS requests
				const agent = new https.Agent({
					rejectUnauthorized: false
				});

				// Execute
				const url = `${this.url}/api/v2/auth/login`;
				const response = await axios.post(url, data, {headers: headers, httpsAgent: agent})
				if (response.status === 200) {
					const result = response.data;
					this.jwt = result.accessToken;
					this.jwtExpirationDate = result.expiresAt;
					return this.jwt;
				} else {
					throw new IkologikException("Request returned status " + toString(response.status));
				}
			} else {
				return this.jwt;
			}
		} catch {
			throw new IkologikException("Error while getting jwt token");
		}
	}

}

module.exports = IkologikApiCredentials;
