[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [OperationalCredentials](../modules/cluster_export.OperationalCredentials.md) / UpdateFabricLabelRequest

# Interface: UpdateFabricLabelRequest

[cluster/export](../modules/cluster_export.md).[OperationalCredentials](../modules/cluster_export.OperationalCredentials.md).UpdateFabricLabelRequest

Input to the OperationalCredentials updateFabricLabel command

**`See`**

MatterSpecification.v11.Core § 11.17.6.11

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvUpdateFabricLabelRequest`](../modules/cluster_export.OperationalCredentials.md#tlvupdatefabriclabelrequest)\>

  ↳ **`UpdateFabricLabelRequest`**

## Table of contents

### Properties

- [fabricIndex](cluster_export.OperationalCredentials.UpdateFabricLabelRequest.md#fabricindex)
- [label](cluster_export.OperationalCredentials.UpdateFabricLabelRequest.md#label)

## Properties

### fabricIndex

• **fabricIndex**: [`FabricIndex`](../modules/datatype_export.md#fabricindex)

#### Inherited from

TypeFromSchema.fabricIndex

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:586](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L586)

___

### label

• **label**: `string`

#### Inherited from

TypeFromSchema.label

#### Defined in

[packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts:585](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/OperationalCredentialsCluster.ts#L585)
