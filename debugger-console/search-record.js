// saved search
var arrSearchResult = nlapiSearchRecord('customrecord_sdr_prod_pref',
		'customsearch_sdr_prod_shortages');
stop = 'stop'; // stopper line

// custom search trough scripting
var arrSearchFilters = [
		new nlobjSearchFilter('custrecord_sdr_prod_pref_qty', null,
				'greaterthanorequalto', 2),
		new nlobjSearchFilter('subsidiary',
				'custrecord_sdr_prod_pref_customer', 'anyof', 1) ];

var arrSearchColumns = [
		new nlobjSearchColumn('quantityavailable',
				'custrecord_sdr_prod_pref_item'),
		new nlobjSearchColumn('subsidiary', 'custrecord_sdr_prod_pref_customer'),
		new nlobjSearchColumn('custrecord_sdr_prod_pref_customer'),
		new nlobjSearchColumn('custrecord_sdr_prod_pref_item'),
		new nlobjSearchColumn('custrecord_sdr_prod_pref_qty'),
		new nlobjSearchColumn('email', 'custrecord_sdr_prod_pref_customer') ];

var arrSearchResults = nlapiSearchRecord('customrecord_sdr_prod_pref', null,
		arrSearchFilters, arrSearchColumns);

stop = 'stop'; // stopper line
