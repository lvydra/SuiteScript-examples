function getProductPreferences(type) {
	nlapiLogExecution('DEBUG', 'type', type);
	nlapiLogExecution('DEBUG', 'execution context', nlapiGetContext()
			.getExecutionContext());

	var arrSearchFilters = [
			new nlobjSearchFilter('custrecord_sdr_prod_pref_qty', null,
					'greaterthanorequalto', 2),
			new nlobjSearchFilter('subsidiary',
					'custrecord_sdr_prod_pref_customer', 'anyof', 1) ];

	var arrSearchColumns = [
			new nlobjSearchColumn('quantityavailable',
					'custrecord_sdr_prod_pref_item'),
			new nlobjSearchColumn('subsidiary',
					'custrecord_sdr_prod_pref_customer'),
			new nlobjSearchColumn('custrecord_sdr_prod_pref_customer'),
			new nlobjSearchColumn('custrecord_sdr_prod_pref_item'),
			new nlobjSearchColumn('custrecord_sdr_prod_pref_qty'),
			new nlobjSearchColumn('email', 'custrecord_sdr_prod_pref_customer') ];

	var arrSearchResults = nlapiSearchRecord('customrecord_sdr_prod_pref',
			null, arrSearchFilters, arrSearchColumns);

	for ( var i in arrSearchResults) {
		var searchResult = arrSearchResults[i];

		var stQuantityAvailable = searchResult.getValue(arrSearchColumns[0]);
		var stSubsidiaryId = searchResult.getValue(arrSearchColumns[1]);
		var stSubsidiaryName = searchResult.getText(arrSearchColumns[1]);
		var stCustomerId = searchResult.getValue(arrSearchColumns[2]);
		var stCustomerName = searchResult.getText(arrSearchColumns[2]);
		var stItemId = searchResult.getValue(arrSearchColumns[3]);
		var stItemName = searchResult.getText(arrSearchColumns[3]);
		var stPreferredQty = searchResult.getValue(arrSearchColumns[4]);
		var stEmail = searchResult.getValue(arrSearchColumns[5]);

		nlapiLogExecution('DEBUG', 'searchResult', 'Quantity Available: '
				+ stQuantityAvailable + '\n' + 'Subsidiary Id: '
				+ stSubsidiaryId + '\n' + 'Subsidiary Name: '
				+ stSubsidiaryName + '\n' + 'Customer Id: ' + stCustomerId
				+ '\n' + 'Customer Name: ' + stCustomerName + '\n'
				+ 'Item Id: ' + stItemId + '\n' + 'Item Name: ' + stItemName
				+ '\n' + 'Preferred Quantity: ' + stPreferredQty + '\n'
				+ 'Customer Email: ' + stEmail);
	}
}