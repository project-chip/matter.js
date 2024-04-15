[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / UpdateNocRequest

# Interface: UpdateNocRequest

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).UpdateNocRequest

Input to the OperationalCredentials updateNoc command

**`See`**

MatterSpecification.v11.Core § 11.17.6.9

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvUpdateNocRequest`](../modules/cluster_export.OperationalCredentials.md#tlvupdatenocrequest)\>

  ↳ **`UpdateNocRequest`**

## Table of contents

### Properties

- [fabricIndex](cluster_export.OperationalCredentials.UpdateNocRequest.md#fabricindex)
- [icacValue](cluster_export.OperationalCredentials.UpdateNocRequest.md#icacvalue)
- [nocValue](cluster_export.OperationalCredentials.UpdateNocRequest.md#nocvalue)

## Properties

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:569](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L569)

___

### icacValue

• `Optional` **icacValue**: `Uint8Array`

#### Inherited from

TypeFromSchema.icacValue

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:568](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L568)

___

### nocValue

• **nocValue**: `Uint8Array`

#### Inherited from

TypeFromSchema.nocValue

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:567](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L567)
