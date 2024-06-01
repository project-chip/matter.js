[**@project-chip/matter.js**](../../../README.md) • **Docs**

***

[@project-chip/matter.js](../../../modules.md) / [storage/export](../README.md) / \<internal\>

# \<internal\>

## Type Aliases

### SupportedComplexStorageTypes

> **SupportedComplexStorageTypes**: ([`SupportedStorageBaseTypes`](README.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](README.md#supportedcomplexstoragetypes))[] \| `object` \| [[`SupportedStorageBaseTypes`](README.md#supportedstoragebasetypes), [`SupportedStorageBaseTypes`](README.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](README.md#supportedcomplexstoragetypes) \| `null` \| `undefined`][] \| `Map`\<[`SupportedStorageBaseTypes`](README.md#supportedstoragebasetypes), [`SupportedStorageBaseTypes`](README.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](README.md#supportedcomplexstoragetypes)\> \| `null` \| `undefined`

Supported combined types to stringify the data for the storage that can be used as values.

#### Source

[packages/matter.js/src/storage/StringifyTools.ts:52](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StringifyTools.ts#L52)

***

### SupportedStorageBaseTypes

> **SupportedStorageBaseTypes**: `string` \| `number` \| `boolean` \| `bigint` \| [`ByteArray`](../../../util/export/README.md#bytearray) \| [`AttributeId`](../../../datatype/export/README.md#attributeid) \| [`CaseAuthenticatedTag`](../../../datatype/export/README.md#caseauthenticatedtag) \| [`ClusterId`](../../../datatype/export/README.md#clusterid) \| [`CommandId`](../../../datatype/export/README.md#commandid) \| [`DataVersion`](../../../datatype/export/README.md#dataversion) \| [`DeviceTypeId`](../../../datatype/export/README.md#devicetypeid) \| [`EndpointNumber`](../../../datatype/export/README.md#endpointnumber) \| [`EntryIndex`](../../../datatype/export/README.md#entryindex) \| [`EventId`](../../../datatype/export/README.md#eventid) \| [`EventNumber`](../../../datatype/export/README.md#eventnumber) \| [`FabricId`](../../../datatype/export/README.md#fabricid) \| [`FabricIndex`](../../../datatype/export/README.md#fabricindex) \| [`FieldId`](../../../datatype/export/README.md#fieldid) \| [`GroupId`](../../../datatype/export/README.md#groupid) \| [`NodeId`](../../../datatype/export/README.md#nodeid) \| [`VendorId`](../../../datatype/export/README.md#vendorid)

Supported base types to stringify the data for the storage that can be used as keys and also values.

#### Source

[packages/matter.js/src/storage/StringifyTools.ts:28](https://github.com/project-chip/matter.js/blob/7a8cbb56b87d4ccf34bec5a9a95ab40a1711324f/packages/matter.js/src/storage/StringifyTools.ts#L28)
