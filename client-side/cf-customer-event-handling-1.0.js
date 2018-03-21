function fieldChange(type, name) {
	if (name == 'email') {
		var supportEmail = nlapiGetFieldText('custentity_sdr_support_email');

		if (supportEmail == null || supportEmail == '') {
			var customerEmail = nlapiGetFieldValue('email');
			nlapiSetFieldValue('custentity_sdr_support_email', customerEmail,
					false);
		}
	}

	if (name == 'custentity_sdr_apply_coupon') {
		var couponCheckbox = nlapiGetFieldValue('custentity_sdr_apply_coupon');

		if (couponCheckbox == 'T') {
			nlapiDisableField('custentity_sdr_coupon_code', false);
		} else if (couponCheckbox == 'F') {
			nlapiSetFieldValue('custentity_sdr_coupon_code', '', false);
			nlapiDisableField('custentity_sdr_coupon_code', true);
		}

	}
}

function saveRecord() {
	var couponCheckbox = nlapiGetFieldValue('custentity_sdr_apply_coupon');
	var couponCode = nlapiGetFieldValue('custentity_sdr_coupon_code');

	if (couponCheckbox == 'T') {
		if (couponCode.length != 5) {
			alert('Coupon code must have 5 characters!');
			return false;
		}
	}
	return true;
}

function fieldValidation(type, name) {
	if (name = 'custentity_sdr_coupon_code') {
		var couponCode = nlapiGetFieldValue('custentity_sdr_coupon_code');

		if (couponCode.length != 5 && couponCode.length != 0) {
			alert('Coupon code must have 5 characters!');
			return false;
		}
	}

	return true;
}
