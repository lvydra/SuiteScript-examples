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

	var arrInitializations = new Array();
	arrInitializations['customfrom'] = '-120';

	var recTask = nlapiCreateRecord('task', arrInitializations);

	var salesRepId = recCustomer.getFieldValue('salesRepId');
	var stCCEmail = '';

	if (salesRepId != '') {
		recTask.setFieldValue('assigned', salesRepId);

		var recEmployee = nlapiLoadRecord('employee', salesRepId);
		var stSalesRepEmail = recEmployee.getFieldValue('email');

		if (stSalesRepEmail != '') {
			stCCEmail = stSalesRepEmail;
		}
	} else {
		stCCEmail = null;
	}

	var stEmail = recCustomer.getFieldValue('email');

	if (stEmail != '') {
		nlapiSendEmail(
				userId,
				stEmail,
				'Welcome to SuiteDreams',
				'Welcome. We are glad for you to be a customer of SuiteDreams.',
				stCCEmail, null, arrRecordsForAttach);
	}

	recTask.setFieldValue('message', 'Please take care of this customer.');
	recTask.setFieldValue('company', customerId);
	recTask.setFieldText('priority', 'High');

	var stStartDate = recTask.getFieldValue('startdate');
	var dtStartDate = nlapiStringToDate(stStartDate);
	var dtDueDate = mlapiAddDays(dtStartDate, 30);
	var stDueDate = nlapiDateToString(dtDueDate);

	redTask.setFieldValue('duedate', stDueDate);

	nlapiSubmitRecord(recTask);
}