function helloWorld(datain) {
	return 'Greetings DemoUser from NetSuite RESTlet Land!';
}

function getRecord(datain) {
	nlapiLogExecution('DEBUG', 'recordtype=' + datain.recordtype);
	nlapiLogExecution('DEBUG', 'id=' + datain.id);

	return nlapiLoadRecord(datain.recordtype, datain.id);
}

function postRecord(datain) {
}

function deleteRecord(datain) {
	nlapiLogExecution('DEBUG', 'recordtype=' + datain.recordtype);
	nlapiLogExecution('DEBUG', 'id=' + datain.id);

	nlapiDeleteRecord(datain.recordtype, datain.id);
}