const AbstractIkologikCustomerObject = require("./AbstractIkologikCustomerObject");

class AbstractIkologikInstallationsObject extends AbstractIkologikCustomerObject {
    constructor(customer, installation){
        super(customer);
        this.installation = installation;
    }
}

module.exports = AbstractIkologikInstallationsObject;