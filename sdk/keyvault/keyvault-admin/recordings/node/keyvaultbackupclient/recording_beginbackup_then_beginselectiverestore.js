let nock = require('nock');

module.exports.hash = "1741f9883764e3713bc64f6dc321f389";

module.exports.testInfo = {"uniqueName":{},"newDate":{}}

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .post('/backup')
  .query(true)
  .reply(401, "", [ 'content-type',
  'application/json; charset=utf-8',
  'x-ms-server-latency',
  '1',
  'x-content-type-options',
  'nosniff',
  'www-authenticate',
  'Bearer authorization="https://login.windows-ppe.net/azure_tenant_id", resource="https://managedhsm-int.azure-int.net"',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '0',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'',
  'cache-control',
  'no-cache' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .post('/backup', {"storageResourceUri":"https://uri.blob.core.windows.net/backup","token":"blob_storage_sas_token"})
  .query(true)
  .reply(202, {"status":"InProgress","statusDetails":null,"error":{"code":null,"message":null,"innererror":null},"startTime":1599782936,"endTime":null,"jobId":"031503ecfab448b89844985614a319f9","azureStorageBlobContainerUri":null}, [ 'server',
  'Kestrel',
  'date',
  'Fri, 11 Sep 2020 00:08:56 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'azure-asyncoperation',
  'https://eastus2.keyvault_name.managedhsm.azure.net/backup/031503ecfab448b89844985614a319f9/pending',
  'x-ms-keyvault-region',
  'EASTUS',
  'Retry-After',
  '0',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '755',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/031503ecfab448b89844985614a319f9/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"031503ecfab448b89844985614a319f9","startTime":1599782936,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:08:57 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '505',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/031503ecfab448b89844985614a319f9/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"031503ecfab448b89844985614a319f9","startTime":1599782936,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:08:58 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '528',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/031503ecfab448b89844985614a319f9/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"031503ecfab448b89844985614a319f9","startTime":1599782936,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:00 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '541',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/031503ecfab448b89844985614a319f9/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"031503ecfab448b89844985614a319f9","startTime":1599782936,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:03 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '521',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/031503ecfab448b89844985614a319f9/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"031503ecfab448b89844985614a319f9","startTime":1599782936,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:05 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '549',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/031503ecfab448b89844985614a319f9/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":null,"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"031503ecfab448b89844985614a319f9","startTime":1599782936,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:08 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '216',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '574',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/backup/031503ecfab448b89844985614a319f9/pending')
  .query(true)
  .reply(200, {"azureStorageBlobContainerUri":"https://uri.blob.core.windows.net/backup/mhsm-keyvault_name-2020091100085704","endTime":1599782949,"error":null,"jobId":"031503ecfab448b89844985614a319f9","startTime":1599782936,"status":"Succeeded","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:10 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '257',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '541',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .put('/keys/rsa-1/restore', {"sasTokenParameters":{"storageResourceUri":"https://uri.blob.core.windows.net/backup","token":"blob_storage_sas_token"},"folder":"mhsm-keyvault_name-2020091100085704"})
  .query(true)
  .reply(202, {"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"84150e9335a94e2eb4493789a5c82473","startTime":1599782951,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'date',
  'Fri, 11 Sep 2020 00:09:11 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'azure-asyncoperation',
  'https://eastus2.keyvault_name.managedhsm.azure.net/restore/84150e9335a94e2eb4493789a5c82473/pending',
  'x-ms-keyvault-region',
  'EASTUS',
  'Retry-After',
  '0',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '796',
  'content-length',
  '180',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/restore/84150e9335a94e2eb4493789a5c82473/pending')
  .query(true)
  .reply(200, {"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"84150e9335a94e2eb4493789a5c82473","startTime":1599782951,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:12 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '180',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '615',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/restore/84150e9335a94e2eb4493789a5c82473/pending')
  .query(true)
  .reply(200, {"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"84150e9335a94e2eb4493789a5c82473","startTime":1599782951,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:12 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '180',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '539',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/restore/84150e9335a94e2eb4493789a5c82473/pending')
  .query(true)
  .reply(200, {"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"84150e9335a94e2eb4493789a5c82473","startTime":1599782951,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:15 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '180',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '580',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/restore/84150e9335a94e2eb4493789a5c82473/pending')
  .query(true)
  .reply(200, {"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"84150e9335a94e2eb4493789a5c82473","startTime":1599782951,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:18 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '180',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '554',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/restore/84150e9335a94e2eb4493789a5c82473/pending')
  .query(true)
  .reply(200, {"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"84150e9335a94e2eb4493789a5c82473","startTime":1599782951,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:20 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '180',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '565',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/restore/84150e9335a94e2eb4493789a5c82473/pending')
  .query(true)
  .reply(200, {"endTime":null,"error":{"code":null,"innererror":null,"message":null},"jobId":"84150e9335a94e2eb4493789a5c82473","startTime":1599782951,"status":"InProgress","statusDetails":null}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:22 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '180',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '522',
  'content-security-policy',
  'default-src \'self\'' ]);

nock('https://eastus2.keyvault_name.managedhsm.azure.net:443', {"encodedQueryParams":true})
  .get('/restore/84150e9335a94e2eb4493789a5c82473/pending')
  .query(true)
  .reply(200, {"endTime":1599782964,"error":null,"jobId":"84150e9335a94e2eb4493789a5c82473","startTime":1599782951,"status":"Succeeded","statusDetails":"Number of successful key versions restored: 0, Number of key versions could not overwrite: 4"}, [ 'server',
  'Kestrel',
  'x-ms-build-version',
  '1.0.20200909-2-c73be597-develop',
  'date',
  'Fri, 11 Sep 2020 00:09:25 GMT',
  'cache-control',
  'no-cache',
  'x-content-type-options',
  'nosniff',
  'x-ms-keyvault-region',
  'EASTUS',
  'x-ms-request-id',
  '58dd65a2-f2a6-11ea-a492-0242ac120009',
  'content-type',
  'application/json; charset=utf-8',
  'x-frame-options',
  'SAMEORIGIN',
  'content-length',
  '233',
  'strict-transport-security',
  'max-age=31536000; includeSubDomains',
  'x-ms-keyvault-network-info',
  'addr=108.226.109.105',
  'x-ms-server-latency',
  '528',
  'content-security-policy',
  'default-src \'self\'' ]);
