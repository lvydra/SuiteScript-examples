var nexus = nlapiCreateRecord('nexus');

nexus.setFieldValue('country', 'GB');
nexus.setFieldValue('state', 'Cheshire');

nlapiSubmitRecord(nexus);