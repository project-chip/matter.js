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
| `fabricId` | `bigint` |
| `fabricIndex` | `number` |
| `identityProtectionKey` | [`ByteArray`](util.md#bytearray-1) |
| `intermediateCACert` | [`ByteArray`](util.md#bytearray-1) \| `undefined` |
| `keyPair` | [`KeyPair`](crypto.md#keypair) |
| `label` | `string` |
| `nodeId` | `bigint` |
| `operationalCert` | [`ByteArray`](util.md#bytearray-1) |
| `operationalId` | [`ByteArray`](util.md#bytearray-1) |
| `operationalIdentityProtectionKey` | [`ByteArray`](util.md#bytearray-1) |
| `rootCert` | [`ByteArray`](util.md#bytearray-1) |
| `rootNodeId` | `bigint` |
| `rootPublicKey` | [`ByteArray`](util.md#bytearray-1) |
| `rootVendorId` | `number` |
| `scopedClusterData` | `Map`<`number`, `Map`<`string`, [`SupportedStorageTypes`](storage.md#supportedstoragetypes)\>\> |

#### Defined in

packages/matter.js/dist/cjs/fabric/Fabric.d.ts:15
