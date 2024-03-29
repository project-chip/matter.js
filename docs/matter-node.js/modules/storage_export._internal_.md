[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / [storage/export](storage_export.md) / \<internal\>

# Module: \<internal\>

## Table of contents

### Type Aliases

- [SupportedComplexStorageTypes](storage_export._internal_.md#supportedcomplexstoragetypes)
- [SupportedStorageBaseTypes](storage_export._internal_.md#supportedstoragebasetypes)

## Type Aliases

### SupportedComplexStorageTypes

Ƭ **SupportedComplexStorageTypes**: ([`SupportedStorageBaseTypes`](storage_export._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](storage_export._internal_.md#supportedcomplexstoragetypes))[] \| \{ `[key: string]`: [`SupportedStorageBaseTypes`](storage_export._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](storage_export._internal_.md#supportedcomplexstoragetypes) \| ``null`` \| `undefined`;  } \| [[`SupportedStorageBaseTypes`](storage_export._internal_.md#supportedstoragebasetypes), [`SupportedStorageBaseTypes`](storage_export._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](storage_export._internal_.md#supportedcomplexstoragetypes) \| ``null`` \| `undefined`][] \| `Map`\<[`SupportedStorageBaseTypes`](storage_export._internal_.md#supportedstoragebasetypes), [`SupportedStorageBaseTypes`](storage_export._internal_.md#supportedstoragebasetypes) \| [`SupportedComplexStorageTypes`](storage_export._internal_.md#supportedcomplexstoragetypes)\> \| ``null`` \| `undefined`

Supported combined types to stringify the data for the storage that can be used as values.

#### Defined in

packages/matter.js/dist/esm/storage/StringifyTools.d.ts:26

___

### SupportedStorageBaseTypes

Ƭ **SupportedStorageBaseTypes**: `string` \| `number` \| `boolean` \| `bigint` \| [`ByteArray`](util_export.md#bytearray) \| [`AttributeId`](exports_datatype.md#attributeid) \| [`CaseAuthenticatedTag`](exports_datatype.md#caseauthenticatedtag) \| [`ClusterId`](exports_datatype.md#clusterid) \| [`CommandId`](exports_datatype.md#commandid) \| [`DataVersion`](exports_datatype.md#dataversion) \| [`DeviceTypeId`](exports_datatype.md#devicetypeid) \| [`EndpointNumber`](exports_datatype.md#endpointnumber) \| [`EntryIndex`](exports_datatype.md#entryindex) \| [`EventId`](exports_datatype.md#eventid) \| [`EventNumber`](exports_datatype.md#eventnumber) \| [`FabricId`](exports_datatype.md#fabricid) \| [`FabricIndex`](exports_datatype.md#fabricindex) \| [`FieldId`](exports_datatype.md#fieldid) \| [`GroupId`](exports_datatype.md#groupid) \| [`NodeId`](exports_datatype.md#nodeid) \| [`VendorId`](exports_datatype.md#vendorid)

Supported base types to stringify the data for the storage that can be used as keys and also values.

#### Defined in

packages/matter.js/dist/esm/storage/StringifyTools.d.ts:24
