[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/fabric

# Module: exports/fabric

## Table of contents

### Classes

- [Fabric](../classes/exports_fabric.Fabric.md)
- [FabricBuilder](../classes/exports_fabric.FabricBuilder.md)
- [FabricManager](../classes/exports_fabric.FabricManager.md)
- [FabricNotFoundError](../classes/exports_fabric.FabricNotFoundError.md)

### Type Aliases

- [FabricJsonObject](exports_fabric.md#fabricjsonobject)

## Type Aliases

### FabricJsonObject

Ƭ **FabricJsonObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](exports_datatype.md#fabricid) |
| `fabricIndex` | [`FabricIndex`](exports_datatype.md#fabricindex) |
| `identityProtectionKey` | [`ByteArray`](util_export.md#bytearray-1) |
| `intermediateCACert` | [`ByteArray`](util_export.md#bytearray-1) \| `undefined` |
| `keyPair` | [`BinaryKeyPair`](crypto_export.md#binarykeypair) |
| `label` | `string` |
| `nodeId` | [`NodeId`](exports_datatype.md#nodeid) |
| `operationalCert` | [`ByteArray`](util_export.md#bytearray-1) |
| `operationalId` | [`ByteArray`](util_export.md#bytearray-1) |
| `operationalIdentityProtectionKey` | [`ByteArray`](util_export.md#bytearray-1) |
| `rootCert` | [`ByteArray`](util_export.md#bytearray-1) |
| `rootNodeId` | [`NodeId`](exports_datatype.md#nodeid) |
| `rootPublicKey` | [`ByteArray`](util_export.md#bytearray-1) |
| `rootVendorId` | [`VendorId`](exports_datatype.md#vendorid) |
| `scopedClusterData` | `Map`<`number`, `Map`<`string`, [`SupportedStorageTypes`](storage_export.md#supportedstoragetypes)\>\> |

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:15
