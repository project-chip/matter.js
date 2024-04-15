[@project-chip/matter.js](../README.md) / [Modules](../modules.md) / [cluster/export](../modules/cluster_export.md) / [TargetNavigator](../modules/cluster_export.TargetNavigator.md) / TargetInfoStruct

# Interface: TargetInfoStruct

[cluster/export](../modules/cluster_export.md).[TargetNavigator](../modules/cluster_export.TargetNavigator.md).TargetInfoStruct

This indicates an object describing the navigable target.

**`See`**

MatterSpecification.v11.Cluster § 6.11.5.1

## Hierarchy

- [`TypeFromSchema`](../modules/tlv_export.md#typefromschema)\<typeof [`TlvTargetInfoStruct`](../modules/cluster_export.TargetNavigator.md#tlvtargetinfostruct)\>

  ↳ **`TargetInfoStruct`**

## Table of contents

### Properties

- [identifier](cluster_export.TargetNavigator.TargetInfoStruct.md#identifier)
- [name](cluster_export.TargetNavigator.TargetInfoStruct.md#name)

## Properties

### identifier

• **identifier**: `number`

An unique id within the TargetList.

**`See`**

MatterSpecification.v11.Cluster § 6.11.5.1.1

#### Inherited from

TypeFromSchema.identifier

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:32](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L32)

___

### name

• **name**: `string`

A name string for the TargetInfoStruct.

**`See`**

MatterSpecification.v11.Cluster § 6.11.5.1.2

#### Inherited from

TypeFromSchema.name

#### Defined in

[packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts:39](https://github.com/project-chip/matter.js/blob/c0d55745d5279e16fdfaa7d2c564daa31e19c627/packages/matter.js/src/cluster/definitions/TargetNavigatorCluster.ts#L39)
