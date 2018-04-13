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

function createSalesOrder() {
	alert('start createSalesOrder');

	var reSalesOrder = nlapiCreateRecord('salesorder');

	var customerId = nlapiGetRecordId();

	reSalesOrder.setFieldValue('entity', customerId);

	reSalesOrder.selectNewLineItem('item');
	reSalesOrder.setCurrentLineItemValue('item', 'item', '36');
	reSalesOrder.setCurrentLineItemValue('item', 'amount', '7');
	reSalesOrder.commitLineItem('item');

	reSalesOrder.selectNewLineItem('item');
	reSalesOrder.setCurrentLineItemValue('item', 'item', '37');
	reSalesOrder.setCurrentLineItemValue('item', 'amount', '2');
	reSalesOrder.commitLineItem('item');

	alert('submit record createSalesOrder');

	var salesOrderId = nlapiSubmitRecord(reSalesOrder);

	alert('create url createSalesOrder');

	var salesOrderURL = nlapiResolveURL('RECORD', 'salesorder', salesOrderId,
			false);

	alert('open window createSalesOrder');

	window.open(salesOrderURL, '_blank');
}