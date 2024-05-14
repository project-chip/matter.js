[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / fabric/export

# Module: fabric/export

## Table of contents

### Enumerations

- [FabricAction](../enums/fabric_export.FabricAction.md)

### Classes

- [Fabric](../classes/fabric_export.Fabric.md)
- [FabricBuilder](../classes/fabric_export.FabricBuilder.md)
- [FabricManager](../classes/fabric_export.FabricManager.md)
- [FabricNotFoundError](../classes/fabric_export.FabricNotFoundError.md)
- [FabricTableFullError](../classes/fabric_export.FabricTableFullError.md)
- [PublicKeyError](../classes/fabric_export.PublicKeyError.md)

### Type Aliases

- [ExposedFabricInformation](fabric_export.md#exposedfabricinformation)
- [FabricJsonObject](fabric_export.md#fabricjsonobject)

## Type Aliases

### ExposedFabricInformation

Ƭ **ExposedFabricInformation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](datatype_export.md#fabricid) |
| `fabricIndex` | [`FabricIndex`](datatype_export.md#fabricindex) |
| `label` | `string` |
| `nodeId` | [`NodeId`](datatype_export.md#nodeid) |
| `rootNodeId` | [`NodeId`](datatype_export.md#nodeid) |
| `rootVendorId` | [`VendorId`](datatype_export.md#vendorid) |

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:55](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/Fabric.ts#L55)

___

### FabricJsonObject

Ƭ **FabricJsonObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](datatype_export.md#caseauthenticatedtag)[] |
| `fabricId` | [`FabricId`](datatype_export.md#fabricid) |
| `fabricIndex` | [`FabricIndex`](datatype_export.md#fabricindex) |
| `identityProtectionKey` | [`ByteArray`](util_export.md#bytearray) |
| `intermediateCACert` | [`ByteArray`](util_export.md#bytearray) \| `undefined` |
| `keyPair` | [`BinaryKeyPair`](crypto_export.md#binarykeypair) |
| `label` | `string` |
| `nodeId` | [`NodeId`](datatype_export.md#nodeid) |
| `operationalCert` | [`ByteArray`](util_export.md#bytearray) |
| `operationalId` | [`ByteArray`](util_export.md#bytearray) |
| `operationalIdentityProtectionKey` | [`ByteArray`](util_export.md#bytearray) |
| `rootCert` | [`ByteArray`](util_export.md#bytearray) |
| `rootNodeId` | [`NodeId`](datatype_export.md#nodeid) |
| `rootPublicKey` | [`ByteArray`](util_export.md#bytearray) |
| `rootVendorId` | [`VendorId`](datatype_export.md#vendorid) |
| `scopedClusterData` | `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](storage_export.md#supportedstoragetypes)\>\> |

#### Defined in

[packages/matter.js/src/fabric/Fabric.ts:36](https://github.com/project-chip/matter.js/blob/558e12c94a201592c28c7bc0743705360b3e5ca6/packages/matter.js/src/fabric/Fabric.ts#L36)
