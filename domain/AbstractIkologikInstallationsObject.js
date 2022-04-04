const AbstractIkologikCustomerObject = require("./AbstractIkologikCustomerObject");

class AbstractIkologikInstallationsObject extends AbstractIkologikCustomerObject {

	// Constructor

	constructor(customer, installation) {
		super(customer);
		this.installation = installation;
	}

}

module.exports = AbstractIkologikInstallationsObject;
