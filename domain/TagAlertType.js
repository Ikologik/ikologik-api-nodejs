const AbstractIkologikObject = require("./AbstractIkologikObject");

class TagAlertType extends AbstractIkologikObject {

	// Constructor

	constructor() {
		super();
		this.meter = null;
		this.value = null;
		this.type = null;
		this.severity = null;
		this.message = null;
		this.autoAcknowledge = null;
		this.active = null;
		this.activationMessageEnabled = null;
		this.activationMessage = null;
		this.deactivationMessageEnabled = null;
		this.deactivationMessage = null;
		this.availabilityRelated = null;
		this.operationRelated = null;
		this.connectivityRelated = null;
		this.notificationReceivers = null;
	}

}

module.exports = TagAlertType;
