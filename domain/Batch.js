const AbstractIkologikInstallationsObject = require("./AbstractIkologikInstallationsObject");

class Batch extends AbstractIkologikInstallationsObject {
    constructor(customer, installation) {
        super(customer, installation);
        this.batchType = null;
        this.code = null;
        this.description = null;
        this.status = null;
        this.startDate = null;
        this.endDate = null;
        this.active = null;
        this.fields = null;
    }
}

class BatchField {
    constructor() {
        this.stringValue = null;
        this.booleanValue = null;
        this.numberValue = null;
        this.dateValue = null;
        this.timeValue = null;
        this.dateTimeValue = null;
        this.LookupListValue = null;
    }
}

module.exports = Batch;
module.exports = BatchField;