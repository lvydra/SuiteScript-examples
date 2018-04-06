function beforeSubmit() {
	var recCustomer = nlapiGetNewRecord();

	var stCustomerId = recCustomer.getFieldValue('entityid');
	var stType = recCustomer.getFieldValue('isperson');
	var stSalesRep = recCustomer.getFieldValue('salesrep');
	var stEmail = recCustomer.getFieldValue('email');
	var stPhone = recCustomer.getFieldValue('phone');

	nlapiLogExecution('DEBUG', 'Customer Id', stCustomerId);
	nlapiLogExecution('DEBUG', 'Type', stType);
	nlapiLogExecution('DEBUG', 'Sales rep', stSalesRep);
	nlapiLogExecution('DEBUG', 'Email', stEmail);
	nlapiLogExecution('DEBUG', 'Phone', stPhone);

	var context = nlapiGetContext();

	nlapiLogExecution('DEBUG', 'User role', context.getRole());
	nlapiLogExecution('DEBUG', 'User location', context.getLocation());
}

function afterSubmit() {
	var recCustomer = nlapiGetNewRecord();

	var stCustomerId = recCustomer.getFieldValue('entityid');
	var stEmail = recCustomer.getFieldValue('email');

	var arrRecordsForAttach = {
		entity : stCustomerId
	};

	var context = nlapiGetContext();
	var userId = context.getUser();

	if (stEmal != '') {
		nlapiSendEmail(userId, stEmail, 'Welcome!',
				'Welcome. We are glad for you to be here.', null, null,
				arrRecordsForAttach);
	}
}