function pageInit(type) {
	alert('INIT');

	var prodPrefCount = nlapiGetLineItemCount('recmachcustrecord_sdr_prod_pref_customer');

	alert('This customer has ' + prodPrefCount + ' product preferences');
}

function lineInit(type) {
	if (type == 'recmachcustrecord_sdr_prod_pref_customer') {
		var stPrefQty = nlapiGetCurrentLineItemValue(type,
				'custrecord_sdr_prod_pref_qty');

		if (stPrefQty == '') {
			nlapiSetCurrentLineItemValue('custrecord_sdr_prod_pref_qty', 1);
		}
	}
}

function validateLine(type) {
	if (type == 'recmachcustrecord_sdr_prod_pref_customer') {
		var stPrefQty = nlapiGetCurrentLineItemValue(type,
				'custrecord_sdr_prod_pref_qty');

		if (parseInt(stPrefQty) > 10) {
			alert('You have selected a preferred quantity that exeeds limit of 10');

			return false;
		}
	}

	return true;
}