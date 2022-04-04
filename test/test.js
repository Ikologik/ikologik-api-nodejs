const IkologikApi = require("../IkologikApi.js");

class Test {

	async test() {
		// Prepare the API
		const api = new IkologikApi(
			process.env.URL,
			process.env.USERNAME,
			process.env.PASSWORD
		);

		// Load the id's
		const customerId = process.env.CUSTOMER;
		const installationId = process.env.INSTALLATION;
		const dataImportTypeId = process.env.DATAIMPORTTYPE;
		const dataImportId = process.env.DATAIMPORT;

		// Login
		console.log('## Logging-in ##')
		const jwt = await api.login()
		console.log('')

		// Get customer
		console.log('## Customer ##')
		const customer = await api.customer.getById(customerId)
		console.log(customer.name)
		console.log('')

		// List installations
		console.log('## Installations ##')
		const installations = await api.installation.listByCustomer(customerId)
		for (const installation of installations)
			console.log(installation.name)
		console.log('')

		// List tags
		console.log('## Tags ##')
		const tags = await api.tag.listByCustomerAndInstallation(customerId, installationId)
		for (const tag of tags)
			console.log(tag.name)
		console.log('')

		// List dashboards
		console.log('## Dashboards ##')
		const dashboards = await api.dashboard.listByCustomerAndInstallation(customerId, installationId)
		for (const dashboard of dashboards)
			console.log(dashboard.name)
		console.log('')
	}

}

const test = new Test()
test.test();
