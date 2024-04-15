[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [storage/export](storage_export.md) / \<internal\>

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

[packages/matter.js/src/storage/StringifyTools.ts:52](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StringifyTools.ts#L52)

___

### SupportedStorageBaseTypes

Ƭ **SupportedStorageBaseTypes**: `string` \| `number` \| `boolean` \| `bigint` \| [`ByteArray`](util_export.md#bytearray) \| [`AttributeId`](datatype_export.md#attributeid) \| [`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag) \| [`ClusterId`](datatype_export.md#clusterid) \| [`CommandId`](datatype_export.md#commandid) \| [`DataVersion`](datatype_export.md#dataversion) \| [`DeviceTypeId`](datatype_export.md#devicetypeid) \| [`EndpointNumber`](datatype_export.md#endpointnumber) \| [`EntryIndex`](datatype_export.md#entryindex) \| [`EventId`](datatype_export.md#eventid) \| [`EventNumber`](datatype_export.md#eventnumber) \| [`FabricId`](datatype_export.md#fabricid) \| [`FabricIndex`](datatype_export.md#fabricindex) \| [`FieldId`](datatype_export.md#fieldid) \| [`GroupId`](datatype_export.md#groupid) \| [`NodeId`](datatype_export.md#nodeid) \| [`VendorId`](datatype_export.md#vendorid)

Supported base types to stringify the data for the storage that can be used as keys and also values.

#### Defined in

[packages/matter.js/src/storage/StringifyTools.ts:28](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/storage/StringifyTools.ts#L28)
