const AbstractIkologikInstallationService = require("./AbstractIkologikInstallationService");
const axios = require("axios");
const IkologikException = require("../IkologikException");

class TagAlertTypeService extends AbstractIkologikInstallationService {

	// Constructor

	constructor(jwtHelper) {
		super(jwtHelper);
	}

	// Actions

	getUrlByCustomerAndInstallationAndTag(customer, installation, tag) {
		return `${this.jwtHelper.url}/api/v2/customer/${customer}/installation/${installation}/tag/${tag}/tagalerttype/update`;
	}

	async update(customer, installation, tag, obj) {
		try {
			const response = await axios.post(this.getUrl(customer, installation, tag), obj, {headers: await this.getHeaders()});
			if (response.status === 200) {
				return response.data;
			} else {
				throw new IkologikException("Request returned status " + toString(response.status));
			}
		} catch (e) {
			throw new IkologikException("Error while updating the tagalert type");
		}
	}

}

module.exports = TagAlertTypeService;
