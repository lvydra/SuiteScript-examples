function saveRecord() {
	var recordType = nlapiGetRecordType();

	// Logging data
	if (recordType == 'customer') {
		var stCouponCode = nlapiGetFieldValue('custentity_sdr_coupon_code');
		var stSupportEmail = nlapiGetFieldValue('custentity_sdr_support_email');
		nlapiLogExecution('DEBUG', 'Coupon Code', stCouponCode);
		nlapiLogExecution('DEBUG', 'Support Email', stSupportEmail);
	}

	if (confirm('Are you sure?')) {
		return true;
	} else {
		return false;
	}
}