const AbstractIkologikInstallationsObject = require("./AbstractIkologikInstallationsObject");

class BatchTrace extends AbstractIkologikInstallationsObject {
    constructor(customer, installation) {
        super(customer, installation);
        this.batch = null;
        this.date = null;
        this.code = null;
        this.type = null;
        this.description = null;
    }
}


module.exports = BatchTrace;
