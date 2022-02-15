const AbstractIkologikObject = require("./AbstractIkologikObject");

class AbstractIkologikCustomerObject extends AbstractIkologikObject {
    constructor(customer){
        super();
        this.customer = customer;
    }
}

module.exports = AbstractIkologikCustomerObject;