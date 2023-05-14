[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / fabric

# Module: fabric

## Table of contents

### Classes

- [Fabric](../classes/fabric.Fabric.md)
- [FabricBuilder](../classes/fabric.FabricBuilder.md)
- [FabricManager](../classes/fabric.FabricManager.md)
- [FabricNotFoundError](../classes/fabric.FabricNotFoundError.md)

### Type Aliases

- [FabricJsonObject](fabric.md#fabricjsonobject)

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

[packages/matter.js/src/fabric/Fabric.ts:23](https://github.com/project-chip/matter.js/blob/5bdbf8d/packages/matter.js/src/fabric/Fabric.ts#L23)
