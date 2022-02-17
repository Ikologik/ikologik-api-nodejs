const AbstractIkologikInstallationsObject = require("./AbstractIkologikInstallationsObject");

class Customer extends AbstractIkologikInstallationsObject{
    constructor() {
        super();
        this.name = null;

        this.address1 = null;
        this.address2 = null;
        this.address3 = null;
        this.address4 = null;
        this.address5 = null;
        this.vat = null;

        this.portalSettings = new CustomerPortalSettings();
        this.securitySettings = new CustomerSecuritySettings();
        this.storageSettings = new CustomerStorageSettings();
        this.defaultFieldSettings = new CustomerDefaultFieldSettings();
        this.newsSettings = new CustomerNewsSettings();
        this.moduleSettings = new CustomerModuleSettings();

    }
}

class CustomerPortalSettings{
    constructor() {
        this.domain = null;
        this.contactEmail = null;
        this.invoiceEmail = null;
        this.supportEmail = null;
        this.supportUrl = 'https://support.ikologik.com';

        this.termsActive = false;
        this.termsUrl = null;
    }
}

class CustomerSecuritySettings{
    constructor() {
        this.emailAsUsername = true;
        this.passwordLevel = 'MEDIUM';
        this.passwordLength = 8;

        this.passwordResetRequired = null;
        this.passwordExpiration = false;
        this.passwordExpirationDays = 180;
        this.passwordHistory = 5;

        this.mfaActive = false;
        this.mfaRequired = false;
    }
}

class CustomerStorageSettings{
    constructor() {
        this.database = null;
        this.passwordLevel = 'MEDIUM';
        this.retentionPolicy = 'PROD_5YEAR';
    }
}

class CustomerDefaultFieldSettings{
    constructor() {
        this.nameActive = true;
        this.distributorActive = false;
        this.descriptionActive = false;
        this.address1Active = false;
        this.address2Active = false;
        this.address3Active = false;
        this.address4Active = true;
        this.address5Active = true;

        this.installationFieldTypeSelection = [];

        this.availabilityAlertsActive = true;
        this.operationalAlertsActive = true;
        this.connectivityAlertsActive = true;
        this.maintenanceAlertsActive = true;
    }
}

class CustomerNewsSettings{
    constructor() {
        this.enabled = false;
        this.newsUrl = null;
    }
}

class CustomerModuleSettings{
    constructor() {
        this.allowAdvancedStatus = false;
        this.allowNews = false;
        this.allowTicketing = false;
        this.allowAcademy = false;
        this.allowDistributors = false;
        this.allowCertifications = false;
        this.allowBatches = false;
        this.allowDataImport = false;
    }
}

module.exports = Customer;