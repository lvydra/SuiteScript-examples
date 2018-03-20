function pageInit(type) {
	var supportEmail = nlapiGetFieldText('custentity_sdr_support_email');
	var couponCheckbox = nlapiGetFieldValue('custentity_sdr_apply_coupon');

	if (supportEmail == null || supportEmail == '') {
		var customerEmail = nlapiGetFieldValue('email');
		nlapiSetFieldValue('custentity_sdr_support_email', customerEmail);
	}

	if (couponCheckbox == 'T') {
		nlapiDisableField('custentity_sdr_coupon_code', false);
	} else {
		nlapiDisableField('custentity_sdr_coupon_code', true);
	}

	stop = 'stop';
}