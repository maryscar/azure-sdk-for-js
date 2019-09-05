let nock = require('nock');

module.exports.testInfo = {"share":"share156767537404005625","dir":"dir156767537446808323","file":"file156767537486701123","now":"2019-09-05T09:22:54.868Z"}

nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767537404005625')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:22:54 GMT',
  'ETag',
  '"0x8D731E2A1CE3918"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'e4ae7ddd-b01a-0000-16cb-63f783000000',
  'x-ms-client-request-id',
  '28644a80-9c08-4930-b4c0-1b7f02283fbf',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Thu, 05 Sep 2019 09:22:54 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767537404005625/dir156767537446808323')
  .query(true)
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:22:54 GMT',
  'ETag',
  '"0x8D731E2A20BE902"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '892bb8b6-601a-0095-39cb-631f36000000',
  'x-ms-client-request-id',
  '8f9b70b5-bd1e-40a8-b288-028040b51904',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-05T09:22:54.7273986Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:22:54.7273986Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:22:54.7273986Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'Directory',
  'x-ms-file-id',
  '13835128424026341376',
  'x-ms-file-parent-id',
  '0',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 05 Sep 2019 09:22:54 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .put('/share156767537404005625/dir156767537446808323/file156767537486701123')
  .reply(201, "", [ 'Content-Length',
  '0',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:22:54 GMT',
  'ETag',
  '"0x8D731E2A2215D40"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '1289cdc8-401a-0059-70cb-637000000000',
  'x-ms-client-request-id',
  '9549f31b-a9e4-4058-8846-14ecd3bbe441',
  'x-ms-version',
  '2019-02-02',
  'x-ms-file-change-time',
  '2019-09-05T09:22:54.8680000Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:22:54.8680000Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:22:54.8680000Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'ReadOnly | Hidden | System | Archive | Temporary | Offline | NotContentIndexed | NoScrubData',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'x-ms-request-server-encrypted',
  'true',
  'Date',
  'Thu, 05 Sep 2019 09:22:54 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .get('/share156767537404005625/dir156767537446808323/file156767537486701123')
  .reply(200, ["0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000"], [ 'Cache-Control',
  'fileCacheControl',
  'Content-Length',
  '512',
  'Content-Type',
  'fileContentType',
  'Content-Encoding',
  'fileContentEncoding',
  'Content-Language',
  'fileContentLanguage',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:22:54 GMT',
  'Accept-Ranges',
  'bytes',
  'ETag',
  '"0x8D731E2A2215D40"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '3fe452ea-401a-0134-58cb-633a46000000',
  'x-ms-client-request-id',
  '265dc4c3-edd6-4a5b-ace3-c0e0b04bbbf3',
  'x-ms-version',
  '2019-02-02',
  'x-ms-meta-key1',
  'vala',
  'x-ms-meta-key2',
  'valb',
  'Content-Disposition',
  'fileContentDisposition',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-05T09:22:54.8680000Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:22:54.8680000Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:22:54.8680000Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'ReadOnly | Hidden | System | Archive | Temporary | Offline | NotContentIndexed | NoScrubData',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-meta-key1,x-ms-meta-key2,Content-Type,Content-Encoding,Content-Language,Cache-Control,Last-Modified,ETag,Content-Disposition,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Accept-Ranges,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 05 Sep 2019 09:22:54 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .head('/share156767537404005625/dir156767537446808323/file156767537486701123')
  .reply(200, [], [ 'Cache-Control',
  'fileCacheControl',
  'Content-Length',
  '512',
  'Content-Type',
  'fileContentType',
  'Content-Encoding',
  'fileContentEncoding',
  'Content-Language',
  'fileContentLanguage',
  'Last-Modified',
  'Thu, 05 Sep 2019 09:22:54 GMT',
  'ETag',
  '"0x8D731E2A2215D40"',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  '40a8182e-f01a-00e5-5acb-63a6c1000000',
  'x-ms-client-request-id',
  '5c9bd14a-1263-4b64-88df-f0db4c0c87ce',
  'x-ms-version',
  '2019-02-02',
  'x-ms-meta-key1',
  'vala',
  'x-ms-meta-key2',
  'valb',
  'Content-Disposition',
  'fileContentDisposition',
  'x-ms-type',
  'File',
  'x-ms-server-encrypted',
  'true',
  'x-ms-file-change-time',
  '2019-09-05T09:22:54.8680000Z',
  'x-ms-file-last-write-time',
  '2019-09-05T09:22:54.8680000Z',
  'x-ms-file-creation-time',
  '2019-09-05T09:22:54.8680000Z',
  'x-ms-file-permission-key',
  '1237041589013461953*8787082347076103240',
  'x-ms-file-attributes',
  'ReadOnly | Hidden | System | Archive | Temporary | Offline | NotContentIndexed | NoScrubData',
  'x-ms-file-id',
  '13835093239654252544',
  'x-ms-file-parent-id',
  '13835128424026341376',
  'Access-Control-Expose-Headers',
  'x-ms-request-id,x-ms-client-request-id,Server,x-ms-version,x-ms-meta-key1,x-ms-meta-key2,Content-Type,Content-Encoding,Content-Language,Cache-Control,Last-Modified,ETag,Content-Disposition,x-ms-type,x-ms-server-encrypted,x-ms-file-change-time,x-ms-file-last-write-time,x-ms-file-creation-time,x-ms-file-permission-key,x-ms-file-attributes,x-ms-file-id,x-ms-file-parent-id,Content-Length,Date,Transfer-Encoding',
  'Access-Control-Allow-Origin',
  '*',
  'Date',
  'Thu, 05 Sep 2019 09:22:55 GMT',
  'Connection',
  'close' ]);


nock('https://fakestorageaccount.file.core.windows.net:443', {"encodedQueryParams":true})
  .delete('/share156767537404005625')
  .query(true)
  .reply(202, "", [ 'Content-Length',
  '0',
  'Server',
  'Windows-Azure-File/1.0 Microsoft-HTTPAPI/2.0',
  'x-ms-request-id',
  'bfc8e0e8-301a-0101-58cb-635652000000',
  'x-ms-client-request-id',
  'b8a86fe8-772e-4e0a-bc96-31069cddcbe4',
  'x-ms-version',
  '2019-02-02',
  'Date',
  'Thu, 05 Sep 2019 09:22:55 GMT',
  'Connection',
  'close' ]);
