const AbstractIkologikInstallationsObject = require("./AbstractIkologikInstallationsObject");

class Alert extends AbstractIkologikInstallationsObject {

	// Constructor

	constructor(customer, installation) {
		super(customer, installation);
		this.alertType = null;
		this.startDate = null;
		this.endDate = null;
		this.active = null;
		this.severity = null;
		this.message = null;
		this.availablilityRelated = null;
		this.operationRelated = null;
		this.connectivityRelated = null;
		this.acknowledgeDate = null;
		this.meters = null;
		this.nrOfComments = null;

	}

}

module.exports = Alert;
