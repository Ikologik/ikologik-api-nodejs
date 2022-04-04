const AbstractIkologikInstallationsObject = require("./AbstractIkologikInstallationsObject");

class DashboardWidget extends AbstractIkologikInstallationsObject {

	// Constructor

	constructor(customer, installation, dashboard) {
		super(customer, installation);
		this.dasboard = dashboard;
		this.dashboardWidgetType = null;
		this.type = null;
		this.order = null;
		this.parameters = {};
	}

}

module.exports = DashboardWidget;
