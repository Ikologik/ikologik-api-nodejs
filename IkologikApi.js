const IkologikApiCredentials = require("./IkologikApiCredentials");
const AlertService = require("./services/AlertService");
const AlertTypeService = require("./services/AlertTypeService");
const BatchService = require("./services/BatchService");
const BatchFieldTypeService = require("./services/BatchFieldTypeService");
const BatchTypeService = require("./services/BatchTypeService");
const CustomerService = require("./services/CustomerService");
const DashboardService = require("./services/DashboardService");
const DashboardWidgetService = require("./services/DashboardWidgetService");
const DashboardWidgetTypeService = require("./services/DashboardWidgetTypeService");
const DataImportService = require("./services/DataImportService");
const DataImportTypeService = require("./services/DataImportTypeService");
const InstallationService = require("./services/InstallationService");
const ReportService = require("./services/ReportService");
const ReportTypeService = require("./services/ReportTypeService");
const TagService = require("./services/TagService");
const TagAlertTypeService = require("./services/TagAlertTypeService");
const BatchTraceService = require("./services/BatchTraceService");

class IkologikApi {

	// Constructor

	constructor(url, username, password) {
		this.apiCredentials = new IkologikApiCredentials(url, username, password);
		this.alert = new AlertService(this.apiCredentials);
		this.alertType = new AlertTypeService(this.apiCredentials);
		this.batch = new BatchService(this.apiCredentials);
		this.batchFieldType = new BatchFieldTypeService(this.apiCredentials);
		this.batchTrace = new BatchTraceService(this.apiCredentials);
		this.batchType = new BatchTypeService(this.apiCredentials);
		this.customer = new CustomerService(this.apiCredentials);
		this.dashboard = new DashboardService(this.apiCredentials);
		this.dashboardWidget = new DashboardWidgetService(this.apiCredentials);
		this.dashboardWidgetType = new DashboardWidgetTypeService(this.apiCredentials);
		this.dataImport = new DataImportService(this.apiCredentials);
		this.dataImportType = new DataImportTypeService(this.apiCredentials);
		this.installation = new InstallationService(this.apiCredentials);
		this.report = new ReportService(this.apiCredentials);
		this.reportType = new ReportTypeService(this.apiCredentials);
		this.tag = new TagService(this.apiCredentials);
		this.tagAlertType = new TagAlertTypeService(this.apiCredentials);
	}

	// Actions

	login() {
		return this.apiCredentials.getJwt();
	}

}

module.exports = IkologikApi;
