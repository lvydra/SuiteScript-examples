function pageInit(type) {
	// set value to field by field id
	nlapiSetFieldValue('custentity_sdr_employee_code', 'A');

	// get field text by field id
	var supervisorName = nlapiGetFieldText('supervisor');
	// get field value by field id
	var supervisorId = nlapiGetFieldValue('supervisor');
	// disabling field by field id
	nlapiDisableField('fax', true);

	var supervisorInfoAlert = '';
	supervisorInfoAlert += 'Your supervisor is ' + supervisorName + '\n';
	supervisorInfoAlert += 'Internal Id:' + supervisorId;
	alert(supervisorInfoAlert);

	stop = 'stop';
}