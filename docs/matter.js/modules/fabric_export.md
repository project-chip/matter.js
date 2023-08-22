[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / fabric/export

# Module: fabric/export

## Table of contents

### Classes

- [Fabric](../classes/fabric_export.Fabric.md)
- [FabricBuilder](../classes/fabric_export.FabricBuilder.md)
- [FabricManager](../classes/fabric_export.FabricManager.md)
- [FabricNotFoundError](../classes/fabric_export.FabricNotFoundError.md)

### Type Aliases

- [FabricJsonObject](fabric_export.md#fabricjsonobject)

## Type Aliases

### FabricJsonObject

Ƭ **FabricJsonObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](datatype_export.md#fabricid) |
| `fabricIndex` | [`FabricIndex`](datatype_export.md#fabricindex) |
| `identityProtectionKey` | [`ByteArray`](util_export.md#bytearray-1) |
| `intermediateCACert` | [`ByteArray`](util_export.md#bytearray-1) \| `undefined` |
| `keyPair` | [`BinaryKeyPair`](crypto_export.md#binarykeypair) |
| `label` | `string` |
| `nodeId` | [`NodeId`](datatype_export.md#nodeid) |
| `operationalCert` | [`ByteArray`](util_export.md#bytearray-1) |
| `operationalId` | [`ByteArray`](util_export.md#bytearray-1) |
| `operationalIdentityProtectionKey` | [`ByteArray`](util_export.md#bytearray-1) |
| `rootCert` | [`ByteArray`](util_export.md#bytearray-1) |
| `rootNodeId` | [`NodeId`](datatype_export.md#nodeid) |
| `rootPublicKey` | [`ByteArray`](util_export.md#bytearray-1) |
| `rootVendorId` | [`VendorId`](datatype_export.md#vendorid) |
| `scopedClusterData` | `Map`<`number`, `Map`<`string`, [`SupportedStorageTypes`](storage_export.md#supportedstoragetypes)\>\> |

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:28](https://github.com/project-chip/matter.js/blob/16d5b0d/packages/matter.js/src/fabric/Fabric.ts#L28)
