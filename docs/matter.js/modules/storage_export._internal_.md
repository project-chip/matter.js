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

[packages/matter.js/src/storage/StringifyTools.ts:39](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/storage/StringifyTools.ts#L39)

___

### SupportedStorageBaseTypes

Ƭ **SupportedStorageBaseTypes**: `string` \| `number` \| `boolean` \| `bigint` \| [`ByteArray`](util_export.md#bytearray) \| [`AttributeId`](datatype_export.md#attributeid) \| [`ClusterId`](datatype_export.md#clusterid) \| [`CommandId`](datatype_export.md#commandid) \| [`EndpointNumber`](datatype_export.md#endpointnumber) \| [`EventId`](datatype_export.md#eventid) \| [`FabricId`](datatype_export.md#fabricid) \| [`FabricIndex`](datatype_export.md#fabricindex) \| [`GroupId`](datatype_export.md#groupid) \| [`NodeId`](datatype_export.md#nodeid) \| [`VendorId`](datatype_export.md#vendorid)

Supported base types to stringify the data for the storage that can be used as keys and also values.

#### Defined in

[packages/matter.js/src/storage/StringifyTools.ts:21](https://github.com/project-chip/matter.js/blob/c15b1068/packages/matter.js/src/storage/StringifyTools.ts#L21)
