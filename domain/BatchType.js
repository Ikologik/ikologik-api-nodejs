const AbstractIkologikInstallationsObject = require("./AbstractIkologikInstallationsObject");

class BatchType extends AbstractIkologikInstallationsObject {

	// Constructor

	constructor(customer, installation) {
		super(customer, installation);
		this.name = null;
	}

}

module.exports = BatchType;
