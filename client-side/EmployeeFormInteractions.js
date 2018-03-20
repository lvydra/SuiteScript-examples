function pageInit(type) {
	alert("Hello World");

	nlapiSetFieldValue('custentity_sdr_employee_code', 'A');

	var supervisorName = nlapiGetFieldText('supervisor');
	var supervisorId = nlapiGetFieldValue('supervisor');

	var supervisorInfoAlert = '';
	supervisorInfoAlert += 'Your supervisor is ' + supervisorName + '\n';
	supervisorInfoAlert += 'Internal Id:' + supervisorId;
	alert(supervisorInfoAlert);

	nlapiDisableField('fax', true);

	stop = 'stop';
}