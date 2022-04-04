const AbstractIkologikInstallationsObject = require("./AbstractIkologikInstallationsObject");

class DataImport extends AbstractIkologikInstallationsObject {

	// Constructor

	constructor(customer, installation) {
		super(customer, installation);
		this.name = null;
		this.status = null;
		this.active = null;
		this.parameters = {};
	}

}

module.exports = DataImport;
