const AbstractIkologikObject = require("./AbstractIkologikObject");

class AbstractIkologikCustomerObject extends AbstractIkologikObject {

	// Constructor

	constructor(customer) {
		super();
		this.customer = customer;
	}

}

module.exports = AbstractIkologikCustomerObject;
