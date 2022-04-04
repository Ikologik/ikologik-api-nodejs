const AbstractIkologikInstallationsObject = require("./AbstractIkologikInstallationsObject");

class Dashboard extends AbstractIkologikInstallationsObject {

	// Constructor

	constructor(customer, installation) {
		super(customer, installation);
		this.name = null;
	}

}

module.exports = Dashboard;
