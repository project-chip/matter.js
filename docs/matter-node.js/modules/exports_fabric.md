[@project-chip/matter-node.js](../README.md) / [Modules](../modules.md) / exports/fabric

# Module: exports/fabric

## Table of contents

### Enumerations

- [FabricAction](../enums/exports_fabric.FabricAction.md)

### Classes

- [Fabric](../classes/exports_fabric.Fabric.md)
- [FabricBuilder](../classes/exports_fabric.FabricBuilder.md)
- [FabricManager](../classes/exports_fabric.FabricManager.md)
- [FabricNotFoundError](../classes/exports_fabric.FabricNotFoundError.md)
- [FabricTableFullError](../classes/exports_fabric.FabricTableFullError.md)

### Type Aliases

- [ExposedFabricInformation](exports_fabric.md#exposedfabricinformation)
- [FabricJsonObject](exports_fabric.md#fabricjsonobject)

## Type Aliases

### ExposedFabricInformation

Ƭ **ExposedFabricInformation**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fabricId` | [`FabricId`](exports_datatype.md#fabricid) |
| `fabricIndex` | [`FabricIndex`](exports_datatype.md#fabricindex) |
| `label` | `string` |
| `nodeId` | [`NodeId`](exports_datatype.md#nodeid) |
| `rootNodeId` | [`NodeId`](exports_datatype.md#nodeid) |
| `rootVendorId` | [`VendorId`](exports_datatype.md#vendorid) |

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:35

___

### FabricJsonObject

Ƭ **FabricJsonObject**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `caseAuthenticatedTags?` | [`CaseAuthenticatedTag`](exports_datatype.md#caseauthenticatedtag)[] |
| `fabricId` | [`FabricId`](exports_datatype.md#fabricid) |
| `fabricIndex` | [`FabricIndex`](exports_datatype.md#fabricindex) |
| `identityProtectionKey` | [`ByteArray`](util_export.md#bytearray) |
| `intermediateCACert` | [`ByteArray`](util_export.md#bytearray) \| `undefined` |
| `keyPair` | [`BinaryKeyPair`](crypto_export.md#binarykeypair) |
| `label` | `string` |
| `nodeId` | [`NodeId`](exports_datatype.md#nodeid) |
| `operationalCert` | [`ByteArray`](util_export.md#bytearray) |
| `operationalId` | [`ByteArray`](util_export.md#bytearray) |
| `operationalIdentityProtectionKey` | [`ByteArray`](util_export.md#bytearray) |
| `rootCert` | [`ByteArray`](util_export.md#bytearray) |
| `rootNodeId` | [`NodeId`](exports_datatype.md#nodeid) |
| `rootPublicKey` | [`ByteArray`](util_export.md#bytearray) |
| `rootVendorId` | [`VendorId`](exports_datatype.md#vendorid) |
| `scopedClusterData` | `Map`\<`number`, `Map`\<`string`, [`SupportedStorageTypes`](storage_export.md#supportedstoragetypes)\>\> |

#### Defined in

packages/matter.js/dist/esm/fabric/Fabric.d.ts:17
