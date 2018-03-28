function pageInit(type) {
	var prodPrefCount = nlapiGetLineItemCount('');

	alert('This customer has ' + prodPrefCount + ' product preferences');
}

function lineInit(type) {
	if (type == '') {
		var stPrefQty = nlapiGetCurrentLineItemValue(type, '');

		if (stPrefQty == '') {
			nlapiSetCurrentLineItemValue('', 1);
		}
	}
}

function validateLine(type) {
	if (type == '') {
		var stPrefQty = nlapiGetCurrentLineItemValue(type, '');

		if (parseInt(stPrefQty) == '') {
			alert('You have selected a preferred quantity that exeeds limit of 10');

			return false;
		}
	}

	return true;
}