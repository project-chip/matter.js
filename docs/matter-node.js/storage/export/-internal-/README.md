[**@project-chip/matter-node.js**](../../../README.md) • **Docs**

***

[@project-chip/matter-node.js](../../../modules.md) / [storage/export](../README.md) / \<internal\>

# \<internal\>

## Type Aliases

### SupportedComplexStorageTypes

> **SupportedComplexStorageTypes**: ([`SupportedStorageBaseTypes`](README.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](README.md#supportedcomplexstoragetypes))[] \| `object` \| [[`SupportedStorageBaseTypes`](README.md#supportedstoragebasetypes), [`SupportedStorageBaseTypes`](README.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](README.md#supportedcomplexstoragetypes) \| `null` \| `undefined`][] \| `Map`\<[`SupportedStorageBaseTypes`](README.md#supportedstoragebasetypes), [`SupportedStorageBaseTypes`](README.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](README.md#supportedcomplexstoragetypes)\> \| `null` \| `undefined`

Supported combined types to stringify the data for the storage that can be used as values.

#### Source

packages/matter.js/dist/esm/storage/StringifyTools.d.ts:26

***

### SupportedStorageBaseTypes

> **SupportedStorageBaseTypes**: `string` \| `number` \| `boolean` \| `bigint` \| [`ByteArray`](../../../util/export/README.md#bytearray) \| [`AttributeId`](../../../exports/datatype/README.md#attributeid) \| [`CaseAuthenticatedTag`](../../../exports/datatype/README.md#caseauthenticatedtag) \| [`ClusterId`](../../../exports/datatype/README.md#clusterid) \| [`CommandId`](../../../exports/datatype/README.md#commandid) \| [`DataVersion`](../../../exports/datatype/README.md#dataversion) \| [`DeviceTypeId`](../../../exports/datatype/README.md#devicetypeid) \| [`EndpointNumber`](../../../exports/datatype/README.md#endpointnumber) \| [`EntryIndex`](../../../exports/datatype/README.md#entryindex) \| [`EventId`](../../../exports/datatype/README.md#eventid) \| [`EventNumber`](../../../exports/datatype/README.md#eventnumber) \| [`FabricId`](../../../exports/datatype/README.md#fabricid) \| [`FabricIndex`](../../../exports/datatype/README.md#fabricindex) \| [`FieldId`](../../../exports/datatype/README.md#fieldid) \| [`GroupId`](../../../exports/datatype/README.md#groupid) \| [`NodeId`](../../../exports/datatype/README.md#nodeid) \| [`VendorId`](../../../exports/datatype/README.md#vendorid)

Supported base types to stringify the data for the storage that can be used as keys and also values.

#### Source

packages/matter.js/dist/esm/storage/StringifyTools.d.ts:24
