const AbstractIkologikInstallationsObject = require("./AbstractIkologikInstallationsObject");

class AlertType extends AbstractIkologikInstallationsObject {

	// Constructor

	constructor(customer, installation) {
		super(customer, installation);
		this.severity = null;
		this.message = null;
		this.autoAchnowledge = null;
		this.active = null;
		this.timeoutActivation = null;
		this.activationMessageEnabled = null;
		this.timeoutDeactivation = null;
		this.deactivationMessageEnabled = null;
		this.deactivationMessage = null;
		this.availabilityRelated = null;
		this.operationRelated = null;
		this.connectivitiyRelated = null;
		this.criteria = null;
		this.notificationReceivers = null;
		this.notificationMessageLanguage = null;
		this.notificationMessageRepeat = null;
	}

}

module.exports = AlertType;
